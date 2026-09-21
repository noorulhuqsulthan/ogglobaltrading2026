'use client';
import { useState, type FormEvent } from 'react';
import Eyebrow from '@/components/ui/Eyebrow';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactSection({
  email,
  phone,
  phoneHref,
  location
}: {
  email: string;
  phone: string;
  phoneHref: string;
  location: string;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || 'Something went wrong.');
      setStatus('sent');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  return (
    <section className="sec clear">
      <div className="wrap">
        <div className="introband">
          <div className="ib-copy">
            <div data-r><Eyebrow>Send an enquiry</Eyebrow></div>
            <h2 data-r="m" style={{ marginTop: 20 }}>Tell us the application.</h2>
            <p className="lead" data-r style={{ ['--d' as string]: '140ms' }}>
              Share your specification, quantity and timeline. We&apos;ll identify suitable products
              and respond with commercial details.
            </p>

            <div className="ib-facts" style={{ marginTop: 'clamp(24px,3vw,36px)' }}>
              <div className="ib-fact">
                <b>Email</b>
                <a href={`mailto:${email}`} style={{ color: 'var(--acc)' }}>{email}</a>
              </div>
              <div className="ib-fact">
                <b>Phone</b>
                <a href={`tel:${phoneHref}`} style={{ color: 'var(--acc)' }}>{phone}</a>
              </div>
              <div className="ib-fact">
                <b>Location</b>
                <span>{location}</span>
              </div>
              <div className="ib-fact">
                <b>Response</b>
                <span>Within one business day, Sun–Thu</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            data-r
            style={{
              display: 'grid',
              gap: 14,
              border: '1px solid var(--line)',
              padding: 'clamp(20px,3vw,34px)',
              background: 'var(--paper-b)'
            }}
            noValidate
          >
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Company" name="company" />
            <Field label="Subject" name="subject" />
            <Field label="Message" name="message" textarea required />

            {status === 'sent' && (
              <p style={{ color: 'var(--acc)', fontSize: '.92rem' }}>
                Thank you — your enquiry has been received. We&apos;ll be in touch shortly.
              </p>
            )}
            {status === 'error' && error && (
              <p style={{ color: '#d9820f', fontSize: '.92rem' }} role="alert">{error}</p>
            )}

            <button
              className="btn solid"
              type="submit"
              disabled={status === 'sending'}
              style={{ justifyContent: 'center' }}
            >
              <i />
              {status === 'sending' ? 'Sending…' : 'Send enquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  textarea = false
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const commonStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    background: 'var(--void-2)',
    border: '1px solid var(--line-2)',
    color: 'var(--fg)',
    font: 'inherit',
    outline: 'none',
    resize: textarea ? 'vertical' : undefined,
    minHeight: textarea ? 140 : undefined
  };
  return (
    <label style={{ display: 'grid', gap: 6, fontSize: '.82rem', color: 'var(--fg-mute)' }}>
      <span>
        {label}
        {required && <span aria-hidden="true" style={{ color: 'var(--acc)' }}> *</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} style={commonStyle} />
      ) : (
        <input name={name} type={type} required={required} style={commonStyle} />
      )}
    </label>
  );
}