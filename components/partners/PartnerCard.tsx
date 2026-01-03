import Image from "next/image";
import Link from "next/link";
import { PartnerItem } from "./PartnersSection";

export default function PartnerCard({ logo, name, website }: PartnerItem) {
  return (
    <div className="border-r border-b border-red-500 flex flex-col bg-[#f2f2f2]">

      {/* LOGO */}
      <div className="h-[220px] flex items-center justify-center">
        <Image
          src={logo}
          alt={name || "Partner Logo"}
          width={180}
          height={80}
          className="object-contain"
        />
      </div>

      {/* DIVIDER */}
      {(name || website) && <div className="border-t border-red-500" />}

      {/* TEXT */}
      {(name || website) && (
        <div className="px-10 py-10 flex flex-col gap-4">
          {name && (
            <p className="text-[20px] font-semibold text-[#0b1c2d]">
              {name}
            </p>
          )}

          {website && (
            <Link
              href={website}
              target="_blank"
              className="w-fit text-[14px] font-bold uppercase underline underline-offset-4 flex items-center gap-2"
            >
              Visit Website <span className="text-lg">↗</span>
            </Link>
          )}
        </div>
      )}

    </div>
  );
}
