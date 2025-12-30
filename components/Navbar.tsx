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
      <header className="w-full sticky top-0 z-50  my-4 bg-[#e5e7eb]">

        <div className="p-6 h-20 flex items-center justify-between">

          {/* LEFT */}
           <Link href="/">
             <div className="flex items-center gap-12">
            <Image src="/images/diemexlogo.png" alt="diemex" width={80} height={80} />
            <span className=" text-[#0b1f33] text-lg">
              23 - 13 May 2026 - Pune
            </span>
          </div>
           
           </Link>
          
        

          {/* CENTER NAV */}
          <nav className="hidden lg:flex items-center gap-6  text-xl text-[#0b1f33] mx-2">
            <button onClick={() => setOpen("about")} className="flex items-center gap-1">
              About 
              {/* <ChevronDown size={14} /> */}
            </button>

            <button onClick={() => setOpen("exhibit")} className="flex items-center gap-1">
              Exhibit 
              {/* <ChevronDown size={14} /> */}
            </button>

            <button onClick={() => setOpen("attend")} className="flex items-center gap-1">
              Attend 
              {/* <ChevronDown size={14} /> */}
            </button>

            {/* <button onClick={() => setOpen("connect")}>
              Connect
            </button> */}
            <Link href="/connect">Connect</Link>

            <button onClick={() => setOpen("insights")} className="flex items-center gap-1">
              Industry Insights 
              {/* <ChevronDown size={14} /> */}
            </button>

            <Link href="/contact-us">Contact Us</Link>

            
          </nav>
        
          {/* RIGHT */}
          <div className="flex items-center gap-3 mx-6">
            <button onClick={() => setOpen("more")} className="underline text-xl">
              More
            </button>
            <Image src="/images/ru.png" alt="RU" width={28} height={18} />
            <button className="bg-red-500 text-white px-8 py-2 rounded-full text-xl">
              <Link href="/exhibitor-enquiry">Exhibit</Link>
            </button> 
            
            <button className="bg-red-500 text-white px-8 py-2 rounded-full text-xl">
              <Link href="/visitor-registration">Register</Link>
            </button>

            
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
          { number: "05", label: "Exhibitor Promotion", href: "/free-promo" },
          { number: "06", label: "Enquire to Exhibit", href: "/exhibitor-enquiry" },
          { number: "07", label: "Download Event Brochure", href: "/download-event-brochure" },
          { number: "08", label: "Download Post Show Report 2025", href: "/exhibit/download-post-show-report" },
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
          { number: "01", label: "Conference Programme", href: "/Conference-Programme" },
          { number: "02", label: "Media Gallery", href: "/media-gallery" },
          // { number: "03", label: "Downloads", href: "/downloads" },
        ]}
      />
    </>
  )
}
