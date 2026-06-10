import localFont from 'next/font/local';
import { ThemeProvider, QueryProvider } from './_providers';

const pretendardJP = localFont({
  src: './fonts/PretendardJPVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard-jp',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${pretendardJP.variable} font-sans antialiased`}>
        <QueryProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='light'
            enableSystem={false}
            disableTransitionOnChange={true}
          >
            {children}
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
