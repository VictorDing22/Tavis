import Image from "next/image";
import type { CaseStudy } from "@/data/cases";

interface CaseCoverProps {
  caseStudy: Pick<CaseStudy, "title" | "image">;
  priority?: boolean;
  className?: string;
}

export default function CaseCover({
  caseStudy: { title, image },
  priority = false,
  className = "",
}: CaseCoverProps) {
  if (Array.isArray(image)) {
    return (
      <div className={`absolute inset-0 ${className}`}>
        {image.map((src, index) => (
          <div
            key={src}
            className={`absolute aspect-[585/1270] h-[74%] overflow-hidden rounded-[7.5%/3.5%] shadow-[0_24px_60px_rgba(15,23,42,0.28)] ${
              index === 0 ? "left-[15%] top-[13%]" : "left-[52%] top-[21%]"
            }`}
          >
            <Image
              src={src}
              alt={`${title}界面 ${index + 1}`}
              fill
              priority={priority}
              sizes="(max-width: 767px) 40vw, 180px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`absolute left-[10%] top-[16%] flex h-[90%] w-[118%] origin-top-left flex-col overflow-hidden rounded-tl-xl bg-white shadow-[0_24px_60px_rgba(15,23,42,0.22)] ${className}`}
    >
      <div className="flex h-[22px] shrink-0 items-center gap-1.5 border-b border-black/[0.06] px-3">
        <span className="h-2 w-2 rounded-full bg-[#ff605c]" />
        <span className="h-2 w-2 rounded-full bg-[#ffbd44]" />
        <span className="h-2 w-2 rounded-full bg-[#00ca4e]" />
      </div>
      <div className="relative flex-1">
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          sizes="(max-width: 767px) 120vw, 640px"
          className="object-cover object-left-top"
        />
      </div>
    </div>
  );
}
