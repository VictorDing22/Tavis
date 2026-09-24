"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToTeamLink() {
  return <Link href="/team" scroll={false} className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
    onClick={event => {
      if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
        sessionStorage.setItem("team:restore-position", "true");
      }
    }}><ArrowLeft size={17} aria-hidden="true" />返回团队</Link>;
}
