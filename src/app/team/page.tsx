import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamPage from "@/components/TeamPage";
import TeamPageShell from "@/components/TeamPageShell";

export const metadata: Metadata = {
  title: "团队成员 — SuperUnknown",
  description: "认识 SuperUnknown 的核心团队成员，了解我们的能力与背景。",
};

export default function Team() {
  return (
    <TeamPageShell>
      <Navbar />
      <main>
        <TeamPage />
      </main>
      <Footer />
    </TeamPageShell>
  );
}
