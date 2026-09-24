import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CASES, type CaseStudy } from "@/data/cases";
import AnimateOnScroll from "./AnimateOnScroll";
import ScrollToTop from "./ScrollToTop";
import BackToCasesLink from "./BackToCasesLink";

interface CaseDetailPageProps {
  caseStudy: CaseStudy;
}

export default function CaseDetailPage({ caseStudy }: CaseDetailPageProps) {
  const [projectField, projectForm = "数字化解决方案"] =
    caseStudy.subtitle.split(" · ");
  const currentIndex = CASES.findIndex(({ slug }) => slug === caseStudy.slug);
  const nextCase = CASES[(currentIndex + 1) % CASES.length];
  const detailCards =
    caseStudy.gallery ??
    caseStudy.capabilities.slice(0, 2).map((capability) => ({
      image: caseStudy.image,
      alt: `${capability.title}界面细节`,
      title: capability.title,
      description: capability.description,
    }));

  return (
    <>
      <ScrollToTop routeKey={caseStudy.slug} />
      <article className="bg-white">
        <header className="pb-12 pt-28 md:pb-16 md:pt-32 lg:pb-20">
          <div className="mx-auto max-w-content px-6">
            <BackToCasesLink />

            <AnimateOnScroll duration={0.55}>
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end lg:gap-20">
                <div>
                  <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    {caseStudy.subtitle}
                  </p>
                  <h1 className="max-w-[900px] text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-primary sm:text-6xl lg:text-[72px]">
                    {caseStudy.title}
                  </h1>
                  <p className="mt-7 max-w-[760px] text-lg leading-relaxed text-secondary sm:text-xl">
                    {caseStudy.summary}
                  </p>
                </div>

                <dl className="border-t border-primary/20 text-sm">
                  <div className="grid grid-cols-[84px_1fr] gap-4 border-b border-border py-4">
                    <dt className="text-neutral-400">项目领域</dt>
                    <dd className="text-right font-medium text-primary">
                      {projectField}
                    </dd>
                  </div>
                  <div className="grid grid-cols-[84px_1fr] gap-4 border-b border-border py-4">
                    <dt className="text-neutral-400">项目形态</dt>
                    <dd className="text-right font-medium text-primary">
                      {projectForm}
                    </dd>
                  </div>
                  <div className="grid grid-cols-[84px_1fr] gap-4 py-4">
                    <dt className="text-neutral-400">技术方向</dt>
                    <dd className="text-right font-medium leading-relaxed text-primary">
                      {caseStudy.tags.slice(0, 3).join(" · ")}
                    </dd>
                  </div>
                </dl>
              </div>
            </AnimateOnScroll>
          </div>
        </header>

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <AnimateOnScroll variant="fade" duration={0.75}>
            <div
              className={`rounded-[28px] bg-gradient-to-br p-4 sm:p-8 md:p-12 lg:p-16 ${caseStudy.gradient}`}
            >
              <div className="mx-auto max-w-[1160px] overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_28px_80px_rgba(17,24,39,0.16)] md:rounded-2xl">
                <div className="flex h-10 items-center gap-2 border-b border-black/[0.08] bg-white px-4 md:h-12 md:px-5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff605c]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd44]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00ca4e]" />
                  <span className="ml-3 truncate text-[11px] text-neutral-400 md:text-xs">
                    {caseStudy.title}
                  </span>
                </div>
                <div className="relative aspect-[16/9] w-full bg-neutral-100">
                  <Image
                    src={caseStudy.image}
                    alt={`${caseStudy.title}项目界面`}
                    fill
                    priority
                    sizes="(min-width: 1280px) 1160px, 92vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <section className="mx-auto max-w-content px-6 py-20 md:py-28">
          <AnimateOnScroll>
            <div className="grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">
              {caseStudy.highlights.map((highlight, index) => (
                <div
                  key={highlight}
                  className="border-b border-border py-7 sm:px-6 sm:first:pl-0 sm:[&:nth-child(2)]:border-l lg:border-b-0 lg:border-l lg:first:border-l-0 lg:last:pr-0"
                >
                  <span className="font-mono text-[11px] text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-primary sm:text-base">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </section>

        <section className="mx-auto grid max-w-content gap-12 px-6 pb-24 md:pb-32 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-24">
          <AnimateOnScroll>
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Overview
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-primary sm:text-4xl">
                从真实问题出发，构建可持续运行的解决方案
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.08}>
            <div>
              <p className="text-xl leading-[1.85] text-secondary sm:text-2xl sm:leading-[1.75]">
                {caseStudy.overview}
              </p>
              <div className="mt-10 flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-white px-3.5 py-2 text-xs text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        <section className="bg-[#f4f4f1] py-20 md:py-28">
          <div className="mx-auto max-w-content px-6">
            <AnimateOnScroll>
              <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end md:mb-16">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    Product details
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-primary sm:text-4xl">
                    关键界面细节
                  </h2>
                </div>
                <p className="max-w-[420px] text-sm leading-relaxed text-secondary">
                  从整体运行状态到关键业务信息，让复杂数据保持清晰、可读与可操作。
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid gap-6 md:grid-cols-2">
              {detailCards.map((detail, index) => (
                <AnimateOnScroll
                  key={detail.title}
                  delay={index * 0.08}
                  variant="scale-up"
                >
                  <figure>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/[0.08] bg-white">
                      <Image
                        src={detail.image}
                        alt={detail.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className={
                          caseStudy.gallery
                            ? "object-contain p-4 sm:p-6"
                            : `scale-[1.18] object-cover ${
                                index === 0
                                  ? "origin-top-left object-left-top"
                                  : "origin-bottom-right object-right-bottom"
                              }`
                        }
                      />
                    </div>
                    <figcaption className="mt-5">
                      <p className="font-mono text-[11px] text-neutral-400">
                        0{index + 1}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-primary">
                        {detail.title}
                      </h3>
                      <p className="mt-2 max-w-[520px] text-sm leading-relaxed text-secondary">
                        {detail.description}
                      </p>
                    </figcaption>
                  </figure>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-content px-6 py-24 md:py-32">
          <AnimateOnScroll>
            <div className="grid gap-12 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-24">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  Capabilities
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-primary sm:text-4xl">
                  核心能力
                </h2>
              </div>

              <div className="border-t border-primary/20">
                {caseStudy.capabilities.map((capability, index) => (
                  <div
                    key={capability.title}
                    className="grid gap-4 border-b border-border py-7 sm:grid-cols-[52px_190px_minmax(0,1fr)] sm:gap-6"
                  >
                    <span className="font-mono text-xs text-neutral-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-semibold text-primary">
                      {capability.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-secondary sm:text-base">
                      {capability.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        <section className="border-t border-border">
          <Link
            href={`/cases/${nextCase.slug}`}
            scroll
            className="group mx-auto flex max-w-content flex-col gap-8 px-6 py-16 sm:flex-row sm:items-end sm:justify-between md:py-20"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
                下一个项目
              </p>
              <h2 className="mt-4 max-w-[800px] text-3xl font-semibold tracking-[-0.035em] text-primary transition-colors group-hover:text-accent sm:text-4xl lg:text-5xl">
                {nextCase.title}
              </h2>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-white">
              <ArrowRight size={18} />
            </span>
          </Link>
        </section>
      </article>

      <section className="bg-dark py-20 text-white md:py-28">
        <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
              Start a project
            </p>
            <h2 className="max-w-[620px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              想将类似的想法变成可交付的产品？
            </h2>
          </div>
          <Link
            href="/#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-primary transition-colors hover:bg-neutral-100"
          >
            开始合作
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
