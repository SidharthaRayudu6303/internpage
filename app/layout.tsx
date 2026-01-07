import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Good Morning - The Tann Mann Gaadi',
  description: 'Start your day bright with The Tann Mann Gaadi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
