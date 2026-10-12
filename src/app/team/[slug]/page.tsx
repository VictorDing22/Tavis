import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BackToTeamLink from "@/components/BackToTeamLink";
import { TEAM_MEMBERS, getTeamMember } from "@/data/team";

interface Props { params: { slug: string } }
export function generateStaticParams() { return TEAM_MEMBERS.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: Props): Metadata {
  const member = getTeamMember(params.slug);
  return { title: member ? `${member.name} · ${member.role} — SuperUnknown` : "成员未找到 — SuperUnknown", description: member?.bio };
}

export default function TeamMemberPage({ params }: Props) {
  const member = getTeamMember(params.slug);
  if (!member) notFound();
  return <>
    <Navbar tone="light" />
    <ScrollToTop routeKey={member.slug} />
    <main className="bg-white pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="max-w-content mx-auto px-6">
        <BackToTeamLink />
        <div className="mt-10 md:mt-14 grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] md:gap-20 items-start">
          <div className="relative aspect-[5/6] w-full max-w-[400px] overflow-hidden rounded-[10px] bg-neutral-100">
            {member.image ? <Image src={member.image} alt={member.name} fill priority sizes="(max-width: 767px) 100vw, 400px" className="object-cover object-center" /> : <span className="flex h-full items-center justify-center text-6xl text-secondary">{member.name.slice(0, 1)}</span>}
          </div>
          <div className="min-w-0">
            <p className="text-base text-secondary">{member.role}</p>
            <h1 className="mt-3 text-5xl md:text-6xl font-medium tracking-tight leading-tight">{member.name}</h1>
            <section className="mt-10" aria-labelledby="member-bio">
              <h2 id="member-bio" className="text-sm text-secondary mb-4">个人介绍</h2>
              <p className="text-base md:text-lg leading-[1.9] text-neutral-700">{member.bio}</p>
            </section>
            <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
              {member.education?.length ? <section aria-labelledby="member-education">
                <h2 id="member-education" className="text-sm text-secondary mb-4">毕业院校</h2>
                <ul className="space-y-5">{member.education.map(item => <li key={item.school}><p className="text-base font-medium">{item.school}</p><p className="mt-1 text-sm text-secondary">{item.degree}</p></li>)}</ul>
              </section> : null}
              {member.experience ? <section aria-labelledby="member-experience"><h2 id="member-experience" className="text-sm text-secondary mb-4">工作经历</h2><p className="text-base leading-[1.85] text-neutral-700">{member.experience}</p></section> : null}
            </div>
          </div>
        </div>
        <section className="mt-14 md:mt-20 border-t border-border pt-8 md:pt-10 grid md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] gap-6 md:gap-20" aria-labelledby="member-skills">
          <h2 id="member-skills" className="text-2xl font-medium tracking-tight">技术与专长</h2>
          <ul className="flex flex-wrap gap-2">{member.skills.map(skill => <li key={skill} className="rounded-full border border-border px-4 py-2 text-sm text-neutral-600">{skill}</li>)}</ul>
        </section>
        <div className="mt-14 md:mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8">
          <p className="text-xl md:text-2xl font-medium">一起把想法变成现实。</p>
          <Link href="/#contact" className="rounded-full bg-primary text-white px-7 py-3.5 text-base hover:bg-neutral-800 transition-colors">联系我们</Link>
        </div>
      </div>
    </main>
    <Footer />
  </>;
}
