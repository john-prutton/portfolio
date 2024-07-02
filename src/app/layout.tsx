import type { Metadata } from "next"
import { Bricolage_Grotesque } from "next/font/google"

import "./globals.css"

const font = Bricolage_Grotesque({ subsets: ["latin"] })

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
      <body className={font.className}>{children}</body>
    </html>
  )
}
