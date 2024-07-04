import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"

import { Navbar } from "@/components/navbar"

const font = localFont({
  src: "../../public/fonts/GeneralSans-Variable.woff2",
  variable: "--satoshi"
})

export const metadata: Metadata = {
  title: {
    default: "John Prutton",
    template: "%s | John Prutton"
  },
  description: "Software Developer & Fullstack Web Developer",
  icons: {
    icon: "/favicon-32x32.png"
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
