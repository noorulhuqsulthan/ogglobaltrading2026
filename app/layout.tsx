import type { Metadata, Viewport } from 'next';
import { Archivo, IBM_Plex_Mono, Inter_Tight } from 'next/font/google';
import './globals.css';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileMenu from '@/components/layout/MobileMenu';
import IconSprite from '@/components/ui/IconSprite';
import CanvasField from '@/components/visuals/CanvasField';
import Grain from '@/components/visuals/Grain';
import ScrollProgress from '@/components/visuals/ScrollProgress';
import BootScreen from '@/components/visuals/BootScreen';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import RevealObserver from '@/components/providers/RevealObserver';
import { site } from '@/data/site';

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap'
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap'
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter-tight',
  display: 'swap'
});

//Light
//const themeScript = `(function(){try{var s=localStorage.getItem('og-theme');var m=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';var t=(s==='light'||s==='dark')?s:m;document.documentElement.setAttribute('data-theme',t);document.documentElement.style.colorScheme=t;document.documentElement.className+=' js';}catch(e){}})();`;
//Dark
const themeScript = `(function(){try{var s=localStorage.getItem('og-theme');var t=(s==='light'||s==='dark')?s:'dark';document.documentElement.setAttribute('data-theme',t);document.documentElement.style.colorScheme=t;document.documentElement.className+=' js';}catch(e){document.documentElement.setAttribute('data-theme','dark');document.documentElement.className+=' js';}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Gas, Fire & Safety, Industrial and Oil & Gas Equipment`,
    template: `%s — ${site.name}`
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    'UAE gas equipment',
    'fire alarm equipment UAE',
    'firefighting equipment supplier',
    'kitchen hood suppression',
    'industrial gas equipment',
    'oil and gas IoT',
    'OG Importing and Exporting'
  ],
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: site.name,
    description: site.shortDescription,
    url: site.url,
    locale: 'en_AE'
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.shortDescription
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }]
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#050D12' },
    { media: '(prefers-color-scheme: light)', color: '#EFF2F1' }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${archivo.variable} ${ibmPlexMono.variable} ${interTight.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta id="meta-theme" name="theme-color" content="#050D12" />
      </head>
      <body>
        <ThemeProvider>
          <CanvasField />
          <Grain />
          <ScrollProgress />
          <BootScreen />
          <IconSprite />
          <RevealObserver />

          <Header />
          <MobileMenu />

          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}