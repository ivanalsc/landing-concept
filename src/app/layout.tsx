import type { Metadata } from 'next'
import { Sofia_Sans_Condensed, Bowlby_One_SC } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'


 
const bowlby = Bowlby_One_SC({
  weight: '400',
  subsets: ['latin'],
})
const sofia = Sofia_Sans_Condensed({
  weight: '500',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "ROCK 'N BURGER",
  description: 'New York favourite hamburguer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bowlby.className}>
        <Header />
        {children}
        <Footer font={sofia} />
        </body>
    </html>
  )
}
