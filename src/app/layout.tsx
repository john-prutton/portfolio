import type { Metadata } from "next"
import localFont from "next/font/local"

import PlausibleProvider from "next-plausible"

import "./globals.css"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

const font = localFont({
  src: "../../public/fonts/GeneralSans-Variable.woff2",
  variable: "--font"
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
      <head>
        <PlausibleProvider
          domain={new URL(process.env.BASE_URL!).hostname}
          customDomain={process.env.PLAUSIBLE_CUSTOM_DOMAIN}
          selfHosted
        />
      </head>
      <body className={font.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
