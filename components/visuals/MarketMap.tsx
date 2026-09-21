export default function MarketMap() {
  return (
    <figure className="ib-map" data-r="m" style={{ ['--d' as string]: '180ms' }}>
      <svg viewBox="0 0 720 460" role="img" aria-label="Global suppliers routed through a UAE import hub to GCC markets">
        <g stroke="var(--line)">
          <path d="M0 46h720M0 92h720M0 138h720M0 184h720M0 230h720M0 276h720M0 322h720M0 368h720M0 414h720" />
          <path d="M46 0v460M92 0v460M138 0v460M184 0v460M230 0v460M276 0v460M322 0v460M368 0v460M414 0v460M460 0v460M506 0v460M552 0v460M598 0v460M644 0v460M690 0v460" />
        </g>

        <g stroke="var(--steel)" strokeOpacity=".6" strokeWidth="1.6" fill="none">
          <rect x="42" y="80" width="46" height="32" rx="3" />
          <rect x="24" y="176" width="46" height="32" rx="3" />
          <rect x="56" y="272" width="46" height="32" rx="3" />
          <rect x="32" y="356" width="46" height="32" rx="3" />
        </g>
        <g stroke="var(--steel)" strokeOpacity=".35" strokeWidth="1.4" fill="none">
          <path d="M88 96 Q200 96 300 218" />
          <path d="M70 192 Q200 170 300 226" />
          <path d="M102 288 Q210 250 300 232" />
          <path d="M78 372 Q200 320 300 240" />
        </g>

        <path d="M360 186l62 36v72l-62 36-62-36v-72z" fill="var(--steel)" fillOpacity=".14" stroke="var(--steel)" strokeWidth="1.8" />
        <text x="360" y="240" textAnchor="middle" fill="var(--fg)" fontFamily="Archivo, sans-serif" fontSize="30" fontWeight="700">UAE</text>
        <text x="360" y="266" textAnchor="middle" fill="var(--signal-2)" fontFamily="IBM Plex Mono, monospace" fontSize="12" letterSpacing="1">IMPORT HUB</text>

        <g stroke="var(--signal)" strokeOpacity=".6" strokeWidth="1.6" fill="none">
          <path d="M424 216 Q520 96 640 118" />
          <path d="M424 226 Q540 176 664 196" />
          <path d="M424 236 Q520 246 648 282" />
          <path d="M424 246 Q508 322 620 364" />
        </g>

        <g>
          <circle cx="656" cy="118" r="14" fill="var(--signal)" />
          <circle cx="656" cy="118" r="24" fill="none" stroke="var(--signal)" strokeOpacity=".3" strokeWidth="1.4" />
          <circle cx="680" cy="196" r="14" fill="var(--signal)" />
          <circle cx="680" cy="196" r="24" fill="none" stroke="var(--signal)" strokeOpacity=".3" strokeWidth="1.4" />
          <circle cx="664" cy="282" r="14" fill="var(--signal)" />
          <circle cx="664" cy="282" r="24" fill="none" stroke="var(--signal)" strokeOpacity=".3" strokeWidth="1.4" />
          <circle cx="636" cy="364" r="14" fill="var(--signal)" />
          <circle cx="636" cy="364" r="24" fill="none" stroke="var(--signal)" strokeOpacity=".3" strokeWidth="1.4" />
        </g>

        <text x="42" y="46" fill="var(--fg-mute)" fontFamily="Inter Tight, sans-serif" fontSize="13">Global suppliers</text>
        <text x="678" y="46" textAnchor="end" fill="var(--fg-mute)" fontFamily="Inter Tight, sans-serif" fontSize="13">GCC markets</text>
      </svg>
    </figure>
  );
}