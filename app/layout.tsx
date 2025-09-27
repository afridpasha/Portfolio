import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mohammad Afrid Pasha | Advanced Software Engineer Portfolio',
  description: 'B.Tech IT student and Advanced Software Engineer specializing in machine learning, web development, and cloud technologies.',
  keywords: 'Mohammad Afrid Pasha, Software Engineer, Machine Learning, React, Python, AWS, Portfolio',
  authors: [{ name: 'Mohammad Afrid Pasha' }],
  openGraph: {
    title: 'Mohammad Afrid Pasha | Advanced Software Engineer Portfolio',
    description: 'Advanced Software Engineer specializing in ML, web development, and cloud technologies',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}