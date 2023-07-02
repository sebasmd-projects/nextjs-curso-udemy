import { NavBar } from '@/components/navbar/navBar'

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Introducción Next Js',
  description: 'Curso Udemy Sección 2',
}

export default function RootLayout({ children, } : { children: React.ReactNode }) {
  return (
    <html lang="es-co">
      <head>
        <title></title>
      </head>
      <body className={inter.className}>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  )
}