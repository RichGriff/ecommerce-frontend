import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import CookiePolicy from '@/components/CookiePolicy'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <body className=''>
        {children}
        <CookiePolicy />
      </body>
    </html>
  )
}
