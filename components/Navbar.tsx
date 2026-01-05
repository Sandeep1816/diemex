"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { MegaMenu } from "@/components/about-mega-menu"

/* ================= MOBILE MENU DATA ================= */
const mobileMenu = [
  {
    title: "About",
    items: [
      { label: "About MITT", href: "/about-diemex" },
      { label: "About ITE Group", href: "/about/about-diemexgroup" },
      { label: "Partners and Sponsors", href: "/partners-and-sponsors" },
    ],
  },
  {
    title: "Exhibit",
    items: [
      { label: "Why Exhibit", href: "/why-exhibit" },
      { label: "Exhibition Sectors", href: "/sectors" },
      { label: "Plan Your Travel", href: "/plan-your-travel" },
      { label: "Exhibitor Resource Centre", href: "/exhibitor-resource-centre" },
      { label: "Exhibitor Promotion", href: "/free-promo" },
      { label: "Enquire to Exhibit", href: "/exhibitor-enquiry" },
    ],
  },
  {
    title: "Attend",
    items: [
      { label: "Why Visit", href: "/why-visit" },
      { label: "Event Sectors", href: "/sectors" },
      { label: "Plan Your Travel", href: "/plan-your-travel" },
      { label: "Visitor Enquiry", href: "/visitor-registration" },
    ],
  },
  {
    title: "Industry Insights",
    items: [
      { label: "Industry News", href: "/industry-news" },
      { label: "Download Event Brochure", href: "/download-event-brochure" },
    ],
  },
]

export function Navbar() {
  const [open, setOpen] = useState<null | string>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMobile, setActiveMobile] = useState<string | null>(null)

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="w-full sticky top-0 z-50 bg-[#e5e7eb]">
        <div className="px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="MITT"
              width={320}
              height={80}
              priority
              className="w-[200px] md:w-[260px] lg:w-[300px] h-auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 text-xl text-[#0b1f33]">
            <button onClick={() => setOpen("about")}>About</button>
            <button onClick={() => setOpen("exhibit")}>Exhibit</button>
            <button onClick={() => setOpen("attend")}>Attend</button>
            <button onClick={() => setOpen("insights")}>Industry Insights</button>
            <Link href="/contact-us">Contact Us</Link>
          </nav>

          {/* DESKTOP ACTIONS */}
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

          {/* MOBILE HAMBURGER */}
          <button
            className="lg:hidden text-[#0b1f33]"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[999] bg-[#0b1f33] text-white overflow-y-auto">

          {/* TOP BAR */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <Image src="/images/logo.png" alt="MITT" width={220} height={60} />
            <button onClick={() => setMobileOpen(false)}>
              <X size={30} />
            </button>
          </div>

          {/* MENU CONTENT */}
          <div className="px-6 py-6 space-y-6 text-xl">

            <p className="text-sm text-white/50">Main Menu</p>

            {mobileMenu.map((section) => (
              <div key={section.title} className="border-b border-white/10 pb-4">

                {/* SECTION TITLE */}
                <button
                  className="w-full flex items-center justify-between"
                  onClick={() =>
                    setActiveMobile(
                      activeMobile === section.title ? null : section.title
                    )
                  }
                >
                  <span>{section.title}</span>
                  <span className="text-2xl">
                    {activeMobile === section.title ? "−" : "+"}
                  </span>
                </button>

                {/* SUB ITEMS */}
                {activeMobile === section.title && (
                  <div className="mt-4 ml-4 space-y-3 text-lg text-white/80">
                    {section.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* MORE MENU */}
            <p className="text-sm text-white/50 pt-8">More Menu</p>

            <Link
              href="/Conference-Programme"
              onClick={() => setMobileOpen(false)}
              className="block"
            >
              Conference Programme
            </Link>

            <Link
              href="/media-gallery"
              onClick={() => setMobileOpen(false)}
              className="block"
            >
              Media Gallery
            </Link>

            {/* CTA */}
            <div className="pt-10">
              <Link
                href="/exhibitor-enquiry"
                onClick={() => setMobileOpen(false)}
                className="block bg-red-500 text-center py-3 rounded-full text-lg"
              >
                Exhibit
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ================= DESKTOP MEGA MENUS ================= */}
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
