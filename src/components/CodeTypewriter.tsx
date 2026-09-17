"use client";

import { useEffect, useState } from "react";

const FRONT_SNIPPET = `// 与 SuperUnknown 一同探索未知
const studio = {
  name: "SuperUnknown",
  mission: "用技术驱动业务创新",
  services: ["Web", "AI", "IoT"],
  industries: ["教育", "工业", "医疗"]
};

studio.create({
  reliable: true,
  scalable: true
});`;

const BACK_SNIPPET = `// superunknown.config.ts
export const stack = {
  frontend: ["Next.js", "React"],
  backend: ["Java", "Node.js", "Python"],
  delivery: ["Docker", "CI/CD", "Vercel"]
};

await SuperUnknown.launch(
  "your next idea"
);`;

function useTypewriter(source: string, typingDelay = 28, holdDelay = 3200) {
  const [text, setText] = useState("");

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setText(source);
      return;
    }

    let index = 0;
    let timerId: ReturnType<typeof setTimeout>;

    const typeNextCharacter = () => {
      if (index < source.length) {
        index += 1;
        setText(source.slice(0, index));
        timerId = setTimeout(typeNextCharacter, typingDelay);
        return;
      }

      timerId = setTimeout(() => {
        index = 0;
        setText("");
        typeNextCharacter();
      }, holdDelay);
    };

    typeNextCharacter();
    return () => clearTimeout(timerId);
  }, [source, typingDelay, holdDelay]);

  return text;
}

function WindowControls() {
  return (
    <div className="flex gap-2" aria-hidden="true">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#27ca40]" />
    </div>
  );
}

function CodeWindow({ filename, code }: { filename: string; code: string }) {
  return (
    <article className="code-window-face overflow-hidden rounded-2xl border border-white/10 bg-[#11111f]/95 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
      <header className="flex h-12 items-center gap-4 border-b border-white/[0.06] bg-[#0d0d19]/90 px-4">
        <WindowControls />
        <span className="font-mono text-[11px] text-neutral-500">
          {filename}
        </span>
      </header>
      <div className="h-[292px] overflow-hidden px-5 py-6 sm:h-[316px] sm:px-7 sm:py-7">
        <pre className="m-0 whitespace-pre-wrap break-words font-mono text-[11px] leading-[1.65] text-[#b6bfd3] sm:text-[12px] lg:text-[13px]">
          <code>{code}</code>
          <span className="code-cursor text-accent-light" aria-hidden="true">
            |
          </span>
        </pre>
      </div>
    </article>
  );
}

export default function CodeTypewriter() {
  const frontCode = useTypewriter(FRONT_SNIPPET);
  const backCode = useTypewriter(BACK_SNIPPET, 28, 3600);
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-full max-w-[520px] lg:justify-self-end">
      <div
        className="code-flip-card h-[341px] w-full cursor-pointer sm:h-[365px]"
        onClick={() => setFlipped((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setFlipped((value) => !value);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="SuperUnknown 动态代码展示，点击切换内容"
        aria-pressed={flipped}
      >
        <div
          className={`code-flip-inner ${flipped ? "is-flipped" : ""}`}
        >
          <CodeWindow filename="superunknown.ts" code={frontCode} />
          <div className="code-window-back">
            <CodeWindow filename="studio.config.ts" code={backCode} />
          </div>
        </div>
      </div>
    </div>
  );
}
