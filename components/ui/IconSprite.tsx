export default function IconSprite() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: 'absolute' }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <symbol id="ar" viewBox="0 0 16 16">
          <path d="M4 12L12 4M6 4h6v6" fill="none" stroke="currentColor" strokeWidth="1.7" />
        </symbol>

        <symbol id="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </symbol>
        <symbol id="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
        </symbol>

        {/* 64x64 product icons */}
        <symbol id="k-tank" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="20" y="14" width="24" height="40" rx="12" />
          <path d="M20 26h24M20 42h24M32 6v8M26 58h12" />
          <circle cx="32" cy="34" r="3.4" />
        </symbol>
        <symbol id="k-alarm" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="12" width="48" height="40" rx="4" />
          <path d="M8 24h48M16 32h14M16 40h10" />
          <circle cx="47" cy="34" r="3.6" />
          <circle cx="47" cy="34" r="8" opacity=".38" />
          <path d="M47 20v-4M32 6v4M57 20l3-3" />
        </symbol>
        <symbol id="k-hose" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="30" cy="32" r="17" />
          <circle cx="30" cy="32" r="10" />
          <circle cx="30" cy="32" r="3.6" />
          <path d="M30 15V6h14M30 49v9h14" />
          <path d="M50 40v14M44 54h12" />
        </symbol>
        <symbol id="k-hood" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 16h48l-7 13H15z" />
          <rect x="26" y="6" width="12" height="10" rx="2" />
          <path d="M15 29v6M22 29v6M29 29v6M36 29v6M43 29v6M50 29v6" />
          <path d="M18 40c-1 5-1 9 0 13M32 40v13M46 40c1 5 1 9 0 13" />
        </symbol>
        <symbol id="k-plant" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 56V28l14 9v-9l14 9V18l16 10v28z" />
          <path d="M14 46h4M26 46h4M40 46h4" />
          <path d="M52 28V14h6v14" />
          <circle cx="55" cy="9" r="4" />
        </symbol>
        <symbol id="k-iot" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="16" width="44" height="34" rx="4" />
          <path d="M10 28h44" />
          <circle cx="32" cy="42" r="3" />
          <path d="M32 10V6M22 10V6M42 10V6" />
          <path d="M20 36l6-4 5 6 6-8 7 5" />
        </symbol>

        {/* 32x32 line icons */}
        <symbol id="k-globe" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="16" r="11" />
          <path d="M5 16h22M16 5c3 3.4 4.4 7 4.4 11S19 24.6 16 27c-3-2.4-4.4-6-4.4-11S13 8.4 16 5z" />
        </symbol>
        <symbol id="k-pin" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 28s9-7.2 9-14a9 9 0 10-18 0c0 6.8 9 14 9 14z" />
          <circle cx="16" cy="14" r="3.4" />
        </symbol>
        <symbol id="k-shield" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4l10 3.6v7.6c0 6.2-4.2 11.2-10 12.8-5.8-1.6-10-6.6-10-12.8V7.6z" />
          <path d="M11.6 15.6l3 3 5.8-5.8" />
        </symbol>
        <symbol id="k-gauge" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="17" r="10" />
          <path d="M16 17l5.6-4.4" />
          <path d="M6.6 17h2M23.4 17h2M16 7v2" />
          <circle cx="16" cy="17" r="1.6" fill="currentColor" stroke="none" />
        </symbol>
        <symbol id="k-truck" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9.5h13v11H3zM16 13h5l4 4v3.5h-9z" />
          <circle cx="9" cy="23" r="2.4" />
          <circle cx="21" cy="23" r="2.4" />
          <path d="M11.4 23h7.2M3 20.5h3.6" />
        </symbol>
        <symbol id="k-chat" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M27 18.5a3 3 0 01-3 3h-9l-6 4.5v-4.5H8a3 3 0 01-3-3v-9a3 3 0 013-3h16a3 3 0 013 3z" />
          <path d="M11 11.5h10M11 15.5h6" />
        </symbol>
        <symbol id="k-reg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="32" cy="30" rx="18" ry="12" />
          <ellipse cx="32" cy="28" rx="13" ry="8" />
          <circle cx="32" cy="28" r="5" />
          <rect x="24" y="40" width="16" height="12" rx="3" />
          <path d="M12 30H6M52 30h6M32 12V6" />
        </symbol>
        <symbol id="k-meter" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="12" y="10" width="40" height="44" rx="6" />
          <rect x="20" y="18" width="24" height="12" rx="2" />
          <path d="M20 38h24M20 46h14" />
          <circle cx="46" cy="46" r="3" />
        </symbol>
        <symbol id="k-valve" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 32h12l8-10 8 10h12" />
          <circle cx="32" cy="32" r="8" />
          <circle cx="32" cy="32" r="3" />
          <path d="M32 12V4M22 8l10 4 10-4" />
        </symbol>
        <symbol id="k-tool" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M40 8a12 12 0 00-11 16L10 43a5 5 0 007 7l19-19A12 12 0 0056 24l-7 5-6-2-2-6z" />
        </symbol>
        <symbol id="k-det" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="32" cy="32" r="11" />
          <circle cx="32" cy="32" r="20" opacity=".45" />
          <circle cx="32" cy="32" r="4" fill="currentColor" stroke="none" />
        </symbol>
        <symbol id="k-spr" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M32 6v14M18 20h28" />
          <path d="M22 28c-2 6-2 13 0 19M32 28v24M42 28c2 6 2 13 0 19" />
          <path d="M14 52h36" />
        </symbol>
        <symbol id="k-pipe" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 20h20a10 10 0 0110 10v24" />
          <path d="M58 20H46" />
          <rect x="4" y="14" width="8" height="12" rx="2" />
          <rect x="52" y="14" width="8" height="12" rx="2" />
        </symbol>
        <symbol id="k-cube" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M32 6l22 11v24L32 52 10 41V17z" />
          <path d="M10 17l22 11 22-11M32 28v24" />
        </symbol>
        <symbol id="k-filter" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 12h44L38 34v20l-12 6V34z" />
        </symbol>
        <symbol id="k-water" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M32 6s14 16 14 26a14 14 0 11-28 0c0-10 14-26 14-26z" />
          <path d="M24 34c0 5 4 8 8 8" />
        </symbol>
      </defs>
    </svg>
  );
}