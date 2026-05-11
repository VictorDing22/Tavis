import {
  GraduationCap,
  Factory,
  Plane,
  Landmark,
  ShieldCheck,
  HeartPulse,
  HandHeart,
} from "lucide-react";
import type { ReactNode } from "react";

/* ============================================================
   TODO: 自定义行业列表
   增删改 INDUSTRIES 数组即可，页面自动适配任意数量。
   ============================================================ */
const INDUSTRIES: { icon: ReactNode; label: string }[] = [
  { icon: <GraduationCap size={24} />, label: "教育" },
  { icon: <Factory size={24} />, label: "工业" },
  { icon: <Plane size={24} />, label: "航空" },
  { icon: <Landmark size={24} />, label: "考古" },
  { icon: <ShieldCheck size={24} />, label: "安全" },
  { icon: <HeartPulse size={24} />, label: "医疗" },
  { icon: <HandHeart size={24} />, label: "康养" },
];

export default function Industries() {
  return (
    <section className="py-20 md:py-24 bg-surface border-y border-border">
      <div className="max-w-content mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[3px] text-secondary mb-10">
          覆盖行业领域
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {INDUSTRIES.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 w-20"
            >
              <div className="text-secondary">{item.icon}</div>
              <span className="text-sm font-medium text-secondary">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
