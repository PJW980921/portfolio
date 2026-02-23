import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './_fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './_fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const bmEuljiro = localFont({
  src: './_fonts/BMEuljiro10yearslaterOTF.woff',
  display: 'swap',
  variable: '--font-bm-euljiro',
});
const bmHannaAir = localFont({
  src: './_fonts/BMHANNAAir_ttf.woff',
  display: 'swap',
  variable: '--font-bm-hanna_air',
});
const bmHannaPro = localFont({
  src: './_fonts/BMHANNAPro.woff',
  display: 'swap',
  variable: '--font-bm-hanna_pro',
});
export const metadata: Metadata = {
  title: 'PJW PortFolio',
  description:
    '프론트엔드 개발자 박지원 포트폴리오입니다. 저를 상세히 표현하기 위한 웹 포트폴리오 입니다. ',
  icons: {
    icon: '../../public/favicon.ico',
  },
  verification: {
    google: 'LBrhCAHSKqGCdXspcLy9elv4b-N-a83xKv0HUZ_dxas',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${bmEuljiro.variable} ${bmHannaAir.variable} ${bmHannaPro.variable} ${geistSans.variable} ${geistMono.variable}   antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
