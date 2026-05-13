import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CasesPage from "@/components/CasesPage";

export const metadata: Metadata = {
  title: "案例 — 太微工作室",
  description:
    "太微工作室精选案例，涵盖 3D 可视化、SaaS 平台、小程序、工业 IoT 等多个技术领域。",
};

export default function Cases() {
  return (
    <>
      <Navbar />
      <main>
        <CasesPage />
      </main>
      <Footer />
    </>
  );
}
