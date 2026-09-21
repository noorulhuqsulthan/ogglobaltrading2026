export default function InstrumentPanel() {
  return (
    <div className="panel" aria-hidden="true">
      <div className="panel-hd">
        <span>Supply overview</span>
        <span className="panel-live">
          <i />
          Active
        </span>
      </div>
      <div className="panel-body">
        <svg viewBox="0 0 400 230" fill="none">
          <g stroke="var(--line)">
            <path d="M0 58h400M0 116h400M0 174h400" />
            <path d="M80 0v230M160 0v230M240 0v230M320 0v230" />
          </g>

          <g stroke="var(--steel)" strokeOpacity=".55" strokeWidth="1.1" fill="none">
            <circle cx="30" cy="42" r="6" />
            <circle cx="30" cy="112" r="6" />
            <circle cx="30" cy="182" r="6" />
            <path d="M30 42h52M30 112h52M30 182h52" />
          </g>

          <path d="M186 96l24 14v28l-24 14-24-14v-28z" fill="var(--acc)" fillOpacity=".16" stroke="var(--acc)" strokeWidth="1.4" />
          <text x="186" y="122" textAnchor="middle" fill="var(--fg)" fontFamily="IBM Plex Mono, monospace" fontSize="12">UAE</text>
          <text x="186" y="136" textAnchor="middle" fill="var(--acc-2)" fontFamily="Inter Tight, sans-serif" fontSize="8">IMPORT HUB</text>

          <path d="M82 42 Q140 42 162 108" stroke="var(--steel)" strokeOpacity=".5" strokeWidth="1.6" fill="none" />
          <path d="M82 112 Q130 112 162 118" stroke="var(--steel)" strokeOpacity=".5" strokeWidth="1.6" fill="none" />
          <path d="M82 182 Q140 182 162 132" stroke="var(--steel)" strokeOpacity=".5" strokeWidth="1.6" fill="none" />

          <path d="M210 110 Q270 70 330 46" stroke="var(--signal)" strokeOpacity=".55" strokeWidth="1.6" fill="none" />
          <path d="M210 120 Q280 118 330 118" stroke="var(--signal)" strokeOpacity=".55" strokeWidth="1.6" fill="none" />
          <path d="M210 130 Q270 178 330 190" stroke="var(--signal)" strokeOpacity=".55" strokeWidth="1.6" fill="none" />

          <g fill="var(--signal)">
            <circle cx="334" cy="46" r="6" />
            <circle cx="334" cy="118" r="6" />
            <circle cx="334" cy="190" r="6" />
            <circle cx="334" cy="46" r="14" fill="none" stroke="var(--signal)" strokeOpacity=".3" />
          </g>

          <circle r="3.4" fill="var(--steel-2)">
            <animateMotion dur="3.4s" repeatCount="indefinite" path="M82 112 Q130 112 162 118" />
          </circle>
          <circle r="3.4" fill="var(--signal-2)">
            <animateMotion dur="3.4s" begin="1.4s" repeatCount="indefinite" path="M210 120 Q280 118 330 118" />
          </circle>
        </svg>
      </div>
      <div className="panel-rows">
        <div className="prow"><span className="k">Product families</span><span className="v">06</span></div>
        <div className="prow"><span className="k">Markets served</span><span className="v">UAE <span className="u">+ GCC</span></span></div>
        <div className="prow"><span className="k">Sourcing</span><span className="v">International</span></div>
        <div className="prow"><span className="k">Standard</span><span className="v">ISO 9001:2015 <span className="u">in process</span></span></div>
      </div>
    </div>
  );
}