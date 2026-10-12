"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TEAM_MEMBERS } from "@/data/team";
import styles from "./TeamMembers.module.css";

export default function TeamMembers() {
  return (
    <section aria-label="团队成员" className="bg-white pb-20 md:pb-28">
      <div className="max-w-content mx-auto px-6">
        <div className={styles.grid}>
          {TEAM_MEMBERS.map(member => (
            <Link key={member.slug} href={`/team/${member.slug}`} scroll
              id={`member-${member.slug}`} className={styles.card}
              aria-label={`${member.name}，${member.role}，查看个人介绍`}
              onClick={() => sessionStorage.setItem("team:list-scroll", String(window.scrollY))}>
              <div className={styles.portrait}>
                {member.image ? <Image src={member.image} alt={member.name} fill
                  sizes="(max-width: 327px) calc(100vw - 48px), 280px"
                  className={styles.image} /> : <span className={styles.initial}>{member.name.slice(0, 1)}</span>}
                <span className={styles.arrow} aria-hidden="true"><ArrowUpRight size={22} /></span>
              </div>
              <h2 className={styles.name}>{member.name}</h2>
              <p className={styles.role}>{member.role}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
