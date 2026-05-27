import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamPage from "@/components/TeamPage";

export const metadata: Metadata = {
  title: "团队成员 — 奇点工坊",
  description: "认识奇点工坊的核心团队成员，了解我们的能力与背景。",
};

export default function Team() {
  return (
    <>
      <Navbar />
      <main>
        <TeamPage />
      </main>
      <Footer />
    </>
  );
}
