import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseDetailPage from "@/components/CaseDetailPage";
import { CASES, getCaseBySlug } from "@/data/cases";

interface CasePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return CASES.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: CasePageProps): Metadata {
  const caseStudy = getCaseBySlug(params.slug);

  if (!caseStudy) {
    return {
      title: "作品未找到 — SuperUnknown",
    };
  }

  return {
    title: `${caseStudy.title} — SuperUnknown`,
    description: caseStudy.summary,
  };
}

export default function CasePage({ params }: CasePageProps) {
  const caseStudy = getCaseBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseDetailPage caseStudy={caseStudy} />;
}
