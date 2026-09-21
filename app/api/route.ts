import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  subject?: string;
  message?: string;
};

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body.' }, { status: 400 });
  }

  const name = (data.name ?? '').trim();
  const email = (data.email ?? '').trim();
  const message = (data.message ?? '').trim();
  const company = (data.company ?? '').trim();
  const subject = (data.subject ?? '').trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: 'Name, email and message are required.' },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'Invalid email address.' }, { status: 400 });
  }

  const submission = {
    name,
    email,
    company,
    subject,
    message,
    receivedAt: new Date().toISOString(),
    userAgent: req.headers.get('user-agent') ?? ''
  };

  // Optional forwarding to an external webhook (Zapier/Make/Formspree).
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission)
      });
    } catch (err) {
      console.error('[contact] webhook forward failed', err);
    }
  } else {
    console.log('[contact] submission', submission);
  }

  return NextResponse.json({ ok: true });
}