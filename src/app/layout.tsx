import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/ui/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Echo - The Professional Home for Builders and Creators',
  description: 'A creator-first platform for showcasing work and connecting with other builders',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}