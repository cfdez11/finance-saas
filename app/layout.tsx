import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { QueryProvider } from '@/providers/query-provider'
import { Toaster } from '@/components/ui/sonner'
import SheetProvider from '@/providers/sheet-provider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Finance App',
  description: 'Manage your finance'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ClerkProvider afterSignOutUrl='/'>
          <QueryProvider>
            <SheetProvider />
            <Toaster />
            {children}
          </QueryProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
