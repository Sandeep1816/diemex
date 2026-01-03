import Image from "next/image";

interface EventRowProps {
  title: string;
  description: string;
  logo: string;
}

export default function EventRow({
  title,
  description,
  logo,
}: EventRowProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center py-20 pr-0">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h3 className="text-xl md:text-2xl font-bold text-[#0b1c2d] mb-4">
            {title}
          </h3>
          <p className="text-[#0b1c2d]/80 text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* RIGHT LOGO */}
        <div className="flex justify-end">
          <Image
            src={logo}
            alt={title}
            width={220}
            height={80}
            className="object-contain"
          />
        </div>

      </div>

      {/* FULL-WIDTH DIVIDER */}
      <div className="h-px bg-red-500 w-full" />
    </>
  );
}
