import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ryan Devenney | Backend Software Engineer',
  description: 'Backend Software Engineer | Vim Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
          <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
          {children}
          <Analytics />
      </body>
    </html>
  )
}
