import type { Metadata } from "next";
import CasesPage from "@/components/CasesPage";

export const metadata: Metadata = {
  title: "案例 — SuperUnknown",
  description:
    "SuperUnknown 精选案例，涵盖 AI 应用、Web 平台、小程序与工业物联网等多个技术领域。",
};

export default function Cases() {
  return <CasesPage />;
}
