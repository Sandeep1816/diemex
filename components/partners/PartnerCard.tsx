import Image from "next/image";

export default function PartnerCard({ logo }: { logo: string }) {
  return (
    <div className="border-r border-b border-red-500 h-[140px] flex items-center justify-center bg-[#f2f2f2]">
      <Image
        src={logo}
        alt="Partner Logo"
        width={140}
        height={60}
        className="object-contain"
      />
    </div>
  );
}
