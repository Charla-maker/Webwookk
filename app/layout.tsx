import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Cash For Cars Sydney | Sell Your Car Today - SellMyCars',
  description: 'Get instant cash for your car in Sydney. Fast, fair, and hassle-free. We buy any car, truck, ute, or 4x4 in any condition. Free towing. Cash on the spot.',
  keywords: 'cash for cars sydney, sell my car, car removal sydney, scrap car sydney, unwanted car removal',
  openGraph: {
    title: 'Cash For Cars Sydney | Sell Your Car Today',
    description: 'Get instant cash for your car in Sydney. Fast, fair, and hassle-free.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
