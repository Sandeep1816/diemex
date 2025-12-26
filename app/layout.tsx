import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "@/styles/globals.css"
import { Navbar } from "@/components/Navbar"
import { MainFooter } from "@/components/MainFooter"

/* Fonts */
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400", // Bebas Neue only has 400
  variable: "--font-bebas",
})

export const metadata: Metadata = {
  title: "Diemex 2026 - Moscow International Travel & Tourism Exhibition",
  description:
    "The leading B2B exhibition for the travel, tourism and hospitality industry in CIS. Join us March 11-13, 2026 at Crocus Expo, Moscow.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${bebasNeue.variable}`}
    >
      <Navbar />
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
      <MainFooter />
    </html>
  )
}
