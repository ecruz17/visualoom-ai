import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';

const kanit = Kanit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'VisuaLoom App',
  description: 'AI Generated Images',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {  
  return (
    <html lang="en" className={kanit.className}>
      <Providers>
        <body className='bg-gradient-to-r from-slate-900 to-slate-700'>{children}</body>
      </Providers>
    </html>
  )
}
