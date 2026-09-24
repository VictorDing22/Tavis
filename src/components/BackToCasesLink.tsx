"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const RESTORE_MARKER_KEY = "cases:restore-position";

export default function BackToCasesLink() {
  return (
    <Link
      href="/cases"
      scroll={false}
      onClick={() => {
        if (sessionStorage.getItem("cases:list-scroll")) {
          sessionStorage.setItem(RESTORE_MARKER_KEY, "true");
        }
      }}
      className="mb-14 inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-primary md:mb-20"
    >
      <ArrowLeft size={15} aria-hidden="true" />
      返回作品
    </Link>
  );
}
