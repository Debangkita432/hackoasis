import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "IEM HACKOASIS 2.0 - Innovate. Collaborate. Create.",
  description:
    "Join the ultimate 8-hour hackathon at IEM Kolkata on September 20, 2025. Innovate, collaborate, and create amazing projects!",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
  --font-mono: ${orbitron.variable};
}
        `}</style>
      </head>
      <body className={`${inter.variable} ${orbitron.variable} antialiased`}>{children}</body>
    </html>
  )
}
