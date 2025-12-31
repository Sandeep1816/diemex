"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { MegaMenu } from "@/components/about-mega-menu"

export function Navbar() {
  const [open, setOpen] = useState<null | string>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* HEADER */}
      <header className="w-full sticky top-0 z-50 bg-[#e5e7eb]">
        <div className="px-6 h-20 flex items-center justify-between">

          {/* LEFT */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/images/diemexlogo.png"
              alt="diemex"
              width={70}
              height={70}
            />
            <span className="hidden md:block text-[#0b1f33] text-lg">
              23 - 13 May 2026 - Pune
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-6 text-xl text-[#0b1f33]">
            <button onClick={() => setOpen("about")}>About</button>
            <button onClick={() => setOpen("exhibit")}>Exhibit</button>
            <button onClick={() => setOpen("attend")}>Attend</button>
            <Link href="/connect">Connect</Link>
            <button onClick={() => setOpen("insights")}>Industry Insights</button>
            <Link href="/contact-us">Contact Us</Link>
          </nav>

          {/* DESKTOP RIGHT */}
          <div className="hidden lg:flex items-center gap-4">
            <button onClick={() => setOpen("more")} className="underline text-xl">
              More
            </button>

            <Image src="/images/ru.png" alt="RU" width={26} height={18} />

            <Link
              href="/exhibitor-enquiry"
              className="bg-red-500 text-white px-6 py-2 rounded-full text-lg"
            >
              Exhibit
            </Link>

            <Link
              href="/visitor-registration"
              className="bg-red-500 text-white px-6 py-2 rounded-full text-lg"
            >
              Register
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t px-6 py-6 space-y-4 text-lg">
            <Link href="/about-diemex" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/why-exhibit" onClick={() => setMobileOpen(false)}>Exhibit</Link>
            <Link href="/why-visit" onClick={() => setMobileOpen(false)}>Attend</Link>
            <Link href="/connect" onClick={() => setMobileOpen(false)}>Connect</Link>
            <Link href="/industry-news" onClick={() => setMobileOpen(false)}>Industry Insights</Link>
            <Link href="/contact-us" onClick={() => setMobileOpen(false)}>Contact Us</Link>

            <div className="pt-4 flex gap-3">
              <Link
                href="/exhibitor-enquiry"
                className="flex-1 bg-red-500 text-white text-center py-2 rounded-full"
              >
                Exhibit
              </Link>
              <Link
                href="/visitor-registration"
                className="flex-1 bg-red-500 text-white text-center py-2 rounded-full"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ===== MEGA MENUS (DESKTOP ONLY) ===== */}

      <MegaMenu
        isOpen={open === "about"}
        onClose={() => setOpen(null)}
        sectionNumber="01"
        sectionTitle="About"
        items={[
          { number: "01", label: "About MITT", href: "/about-diemex" },
          { number: "02", label: "About ITE Group", href: "/about/about-diemexgroup" },
          { number: "03", label: "Partners and Sponsors", href: "/partners-and-sponsors" },
        ]}
      />

      <MegaMenu
        isOpen={open === "exhibit"}
        onClose={() => setOpen(null)}
        sectionNumber="02"
        sectionTitle="Exhibit"
        items={[
          { number: "01", label: "Why Exhibit", href: "/why-exhibit" },
          { number: "02", label: "Exhibition Sectors", href: "/sectors" },
          { number: "03", label: "Plan Your Travel", href: "/plan-your-travel" },
          { number: "04", label: "Exhibitor Resource Centre", href: "/exhibitor-resource-centre" },
          { number: "05", label: "Exhibitor Promotion", href: "/free-promo" },
          { number: "06", label: "Enquire to Exhibit", href: "/exhibitor-enquiry" },
        ]}
      />

      <MegaMenu
        isOpen={open === "attend"}
        onClose={() => setOpen(null)}
        sectionNumber="03"
        sectionTitle="Attend"
        items={[
          { number: "01", label: "Why Visit", href: "/why-visit" },
          { number: "02", label: "Event Sectors", href: "/sectors" },
          { number: "03", label: "Plan Your Travel", href: "/plan-your-travel" },
          { number: "04", label: "Visitor Enquiry", href: "/visitor-registration" },
        ]}
      />

      <MegaMenu
        isOpen={open === "insights"}
        onClose={() => setOpen(null)}
        sectionNumber="05"
        sectionTitle="Industry Insights"
        items={[
          { number: "01", label: "Industry News", href: "/industry-news" },
          { number: "02", label: "Download Event Brochure", href: "/download-event-brochure" },
        ]}
      />

      <MegaMenu
        isOpen={open === "more"}
        onClose={() => setOpen(null)}
        sectionNumber="06"
        sectionTitle="More"
        items={[
          { number: "01", label: "Conference Programme", href: "/Conference-Programme" },
          { number: "02", label: "Media Gallery", href: "/media-gallery" },
        ]}
      />
    </>
  )
}
