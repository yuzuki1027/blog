import './globals.css'
import Header from './header';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'blog',
  description: 'create blog',
}
 function Head() {
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href='/favicon.png'/>
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
       <Head />
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  )
}
