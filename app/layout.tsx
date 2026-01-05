import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "@/styles/globals.css"
import { Navbar } from "@/components/Navbar"
import { MainFooter } from "@/components/MainFooter"

/* Display font only */
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
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
    <html lang="en" className={bebasNeue.variable}>
      <body className="antialiased bg-[#e5e7eb] overflow-x-hidden">
        <Navbar />

        {/* ❌ NO site-wrapper here */}
        <main className="w-full">
          {children}
        </main>

        <MainFooter />
        <Analytics />
      </body>
    </html>
  )
}

