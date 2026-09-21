import Link from 'next/link';
import HeroBackground from '@/components/visuals/HeroBackground';
import InstrumentPanel from '@/components/visuals/InstrumentPanel';
import { heroStats } from '@/data/facts';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <HeroBackground />

      <div className="wrap">
        <div className="hero-top">
          <span className="pip" aria-hidden="true" />
          <span>Dubai · United Arab Emirates</span>
          <span className="sep" aria-hidden="true" />
          <span>Import · Supply · Distribution</span>
          <span className="sep" aria-hidden="true" />
          <span>UAE &amp; GCC</span>
        </div>

        <div className="hero-in">
          <div>
            <h1>
              <span className="ln"><span>Global products.</span></span>
              <span className="ln"><span>Local expertise.</span></span>
              <span className="ln"><span><em>Trusted supply.</em></span></span>
            </h1>
            <p className="hero-sub">
              A UAE-based trading company importing, supplying and distributing specialised
              equipment for the Gas, Fire &amp; Safety, Industrial and Oil &amp; Gas sectors —
              sourced from qualified international manufacturers and delivered across the UAE and GCC.
            </p>
            <div className="hero-act">
              <Link className="btn solid" href="/products"><i />Explore products</Link>
              <Link className="btn" href="/contact"><i />Send an enquiry</Link>
            </div>
          </div>

          <InstrumentPanel />
        </div>

        <div className="hero-strip">
          {heroStats.map((s) => (
            <div className="hstat" key={s.label}>
              <b><span className="ct" data-t={s.value}>0</span></b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <i />Scroll
      </div>
    </section>
  );
}