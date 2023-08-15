import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProviders from './AuthProviders'
import Appbar from './components/Appbar'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Getting Started Next-Auth',
  description: 'Hands-on Next-Auth.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProviders>
          <Appbar></Appbar>
          <Navbar />
          <main className="flex justify-center items-start p-6 min-h-screen">
            {children}
          </main>
        </AuthProviders>
      </body>
    </html>
  )
}
