import localFont from 'next/font/local';
import './globals.css';

const pretendardJP = localFont({
  src: './fonts/PretendardJPVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard-jp',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${pretendardJP.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
