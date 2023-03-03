import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Yellowtail } from 'next/font/google'

const jakartaSans = Inter({
  subsets: ["latin"],
  variable: "--jakartaSans",
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"]
})

const yellowTail = Yellowtail({
  subsets: ["latin"],
  weight: '400',
  variable: "--yellowTail"
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${jakartaSans.variable} ${yellowTail.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
