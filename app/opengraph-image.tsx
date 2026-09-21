import { ImageResponse } from 'next/og';
import { site } from '@/data/site';

export const runtime = 'edge';
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: 'radial-gradient(120% 90% at 100% 0%, #0D2029 0%, #050D12 60%)',
          color: '#EAF1F2',
          fontFamily: 'sans-serif'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 999,
              background: '#4FA3C7'
            }}
          />
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 999,
              background: '#D9820F',
              marginLeft: -18
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#8FA3AA'
            }}
          >
            OG Importing &amp; Exporting
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1, letterSpacing: -2 }}>
            Global products.
          </div>
          <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1, letterSpacing: -2 }}>
            Local expertise.
          </div>
          <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1, color: '#F0A63C', letterSpacing: -2 }}>
            Trusted supply.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 24, fontSize: 20, color: '#8FA3AA' }}>
          <span>Gas</span><span>·</span>
          <span>Fire &amp; Safety</span><span>·</span>
          <span>Industrial</span><span>·</span>
          <span>Oil &amp; Gas IoT</span>
        </div>
      </div>
    ),
    size
  );
}