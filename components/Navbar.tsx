"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { MegaMenu } from "@/components/about-mega-menu"

export function Navbar() {
  const [open, setOpen] = useState<null | string>(null)

  return (
    <>
      {/* TOP BAR */}
      <header className="w-full bg-[#f4f2ee] border-b">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LEFT */}
           <Link href="/">
             <div className="flex items-center gap-6">
            <Image src="/images/diemexlogo.png" alt="MITT" width={80} height={30} />
            <span className="text-sm text-[#0b1f33]">
              23 - 13 May 2026 - Pune
            </span>
          </div>
           
           </Link>
          
        

          {/* CENTER NAV */}
          <nav className="hidden lg:flex items-center gap-8 text-sm text-[#0b1f33]">
            <button onClick={() => setOpen("about")} className="flex items-center gap-1">
              About <ChevronDown size={14} />
            </button>

            <button onClick={() => setOpen("exhibit")} className="flex items-center gap-1">
              Exhibit <ChevronDown size={14} />
            </button>

            <button onClick={() => setOpen("attend")} className="flex items-center gap-1">
              Attend <ChevronDown size={14} />
            </button>

            {/* <button onClick={() => setOpen("connect")}>
              Connect
            </button> */}
            <Link href="/connect">Connect</Link>

            <button onClick={() => setOpen("insights")} className="flex items-center gap-1">
              Industry Insights <ChevronDown size={14} />
            </button>

            <Link href="/contact-us">Contact Us</Link>

            <button onClick={() => setOpen("more")} className="underline">
              More
            </button>
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <Image src="/images/ru.png" alt="RU" width={28} height={18} />
            {/* <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">
              Exhibit
            </button> */}  
            <Link href="/exhibitor-enquiry">Exhibit</Link>
            {/* <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">
              Register
            </button> */}

            <Link href="/visitor-registration">Register</Link>
          </div>
        </div>
      </header>

      {/* ===== MEGA MENUS ===== */}

      {/* ABOUT */}
      <MegaMenu
        isOpen={open === "about"}
        onClose={() => setOpen(null)}
        sectionNumber="01"
        sectionTitle="About"
        items={[
          { number: "01", label: "About MITT", href: "/about-diemex" },
          { number: "02", label: "About ITE Group", href: "about/about-diemexgroup" },
          { number: "03", label: "Partners and Sponsors", href: "/partners-and-sponsors" },
        ]}
      />

      {/* EXHIBIT */}
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
          { number: "05", label: "Exhibitor Promotion", href: "/exhibitor-promotion" },
          { number: "06", label: "Enquire to Exhibit", href: "/enquire-to-exhibit" },
          { number: "07", label: "Download Event Brochure", href: "/event-brochure" },
          { number: "08", label: "Download Post Show Report 2025", href: "/post-show-report-2025" },
        ]}
      />

      {/* ATTEND */}
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

      {/* CONNECT (simple links, no mega layout in original) */}
      <MegaMenu
        isOpen={open === "connect"}
        onClose={() => setOpen(null)}
        sectionNumber="04"
        sectionTitle="Connect"
        items={[
          { number: "01", label: "Networking", href: "/networking" },
          { number: "02", label: "Hosted Buyers", href: "/hosted-buyers" },
        ]}
      />

      {/* INDUSTRY INSIGHTS */}
      <MegaMenu
        isOpen={open === "insights"}
        onClose={() => setOpen(null)}
        sectionNumber="05"
        sectionTitle="Industry Insights"
        items={[
          { number: "01", label: "Industry News", href: "/industry-news" },
          { number: "02", label: "Download Post Show Report", href: "/exhibit/download-post-show-report" },
          { number: "03", label: "Download Event Brochure", href: "/download-event-brochure" },
        ]}
      />

      {/* MORE */}
      <MegaMenu
        isOpen={open === "more"}
        onClose={() => setOpen(null)}
        sectionNumber="06"
        sectionTitle="More"
        items={[
          { number: "01", label: "Press", href: "/press" },
          { number: "02", label: "Media", href: "/media" },
          { number: "03", label: "Downloads", href: "/downloads" },
        ]}
      />
    </>
  )
}
