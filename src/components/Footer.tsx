const FOOTER_LINKS = [
  { label: "首页", href: "#" },
  { label: "案例", href: "#cases" },
  { label: "服务", href: "#services" },
  { label: "联系", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-content mx-auto px-6 pt-12 pb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-8">
          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold">太微工作室</h4>
            <p className="text-sm text-secondary mt-1">
              聚焦软件开发，构建可靠的数字产品
            </p>
          </div>
          <div className="flex gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="pt-6 border-t border-border text-sm text-secondary text-center md:text-left">
          © {new Date().getFullYear()} 太微工作室. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
