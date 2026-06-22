import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Answerline — Daily Quizbowl Training',
  description:
    'Real Quizbowl questions, distilled into one short study email a day. Learn the clues behind the answer — not another pile of random facts.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="font-sans text-ink bg-canvas">{children}</body>
    </html>
  )
}
