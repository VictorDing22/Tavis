"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type PointerEvent,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { label: "服务", href: "/#services", match: "services" },
  { label: "案例", href: "/cases", match: "cases" },
  { label: "关于", href: "/team", match: "team" },
] as const;

interface NavbarProps {
  tone?: "dark" | "light";
}

export default function Navbar({ tone = "dark" }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [visible, setVisible] = useState(true);
  const [hash, setHash] = useState("");
  const previousY = useRef(0);
  const serviceSectionReached = useRef(false);

  const lightPage = tone === "light" || pathname !== "/";
  const darkText = lightPage || fixed || open;

  useEffect(() => {
    previousY.current = window.scrollY;
    const updateHash = () => {
      const nextHash = window.location.hash.slice(1);
      serviceSectionReached.current = false;
      setHash(nextHash);
    };
    const onScroll = () => {
      const currentY = Math.max(window.scrollY, 0);
      const isFixed = currentY > 0;
      setFixed(isFixed);
      setVisible(currentY < 12 || currentY < previousY.current);
      previousY.current = currentY;

      if (pathname === "/" && window.location.hash === "#services") {
        const services = document.getElementById("services");
        if (services) {
          const bounds = services.getBoundingClientRect();
          const isServiceVisible =
            bounds.top <= window.innerHeight * 0.45 && bounds.bottom >= 96;

          if (isServiceVisible) {
            serviceSectionReached.current = true;
          } else if (serviceSectionReached.current) {
            window.history.replaceState(
              window.history.state,
              "",
              window.location.pathname + window.location.search
            );
            serviceSectionReached.current = false;
            setHash("");
          }
        }
      }
    };
    updateHash();
    onScroll();
    window.addEventListener("hashchange", updateHash);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.classList.remove("menu-open");
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (match: (typeof NAV_ITEMS)[number]["match"]) => {
    if (match === "cases") return pathname.startsWith("/cases");
    if (match === "team") return pathname.startsWith("/team");
    return pathname === "/" && hash === match;
  };

  const closeMenu = () => setOpen(false);
  const navigateToContact = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    closeMenu();
    if (pathname !== "/") return;
    event.preventDefault();
    if (window.location.hash !== "#contact") {
      window.history.pushState(window.history.state, "", "/#contact");
    }
    setHash("contact");
    window.dispatchEvent(new Event("contact:navigate"));
  };
  const reloadIfCurrent = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const destination = new URL(href, window.location.href);
    const isCurrent =
      destination.pathname === window.location.pathname &&
      destination.hash === window.location.hash;

    if (!isCurrent) return false;

    event.preventDefault();

    window.location.reload();
    return true;
  };
  const setRippleOrigin = (event: PointerEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--ripple-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--ripple-y", `${event.clientY - rect.top}px`);
  };

  return (
    <header
      data-stable-entry={pathname === "/team" ? "true" : undefined}
      className={[
        styles.navbar,
        fixed ? styles.fixed : "",
        visible || open ? styles.visible : styles.hidden,
        darkText ? styles.darkText : styles.lightText,
        open ? styles.open : "",
      ].join(" ")}
    >
      <div className={styles.fill} />
      <div className={styles.strip}>
        <div className={styles.inner}>
          <Link
            href="/"
            className={styles.logo}
            aria-label="SuperUnknown 首页"
            onClick={(event) => {
              closeMenu();
              reloadIfCurrent(event, "/");
            }}
          >
            <span className={styles.logoWave} aria-hidden="true">
              {Array.from("SuperUnknown").map((letter, index) => (
                <span className={styles.logoLetter} key={index}
                  style={{ "--letter-index": index } as CSSProperties}>
                  {letter}
                </span>
              ))}
            </span>
          </Link>

          <div className={styles.desktopMenu}>
            <nav className={styles.links} aria-label="主导航">
              {NAV_ITEMS.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.match) ? "page" : undefined}
                  className={styles.navLink}
                  style={{ "--enter-index": index } as CSSProperties}
                  onClick={(event) => {
                    if (reloadIfCurrent(event, item.href)) return;
                    if (item.match === "services") setHash("services");
                  }}
                >
                  <span className={styles.wordClip}>
                    <span className={styles.word} data-text={item.label}>{item.label}</span>
                  </span>
                </Link>
              ))}
            </nav>

            <Link
              href="/#contact"
              className={styles.contact}
              style={{ "--enter-index": NAV_ITEMS.length } as CSSProperties}
              onPointerMove={setRippleOrigin}
              onClick={navigateToContact}
            >
              <span className={styles.contactBorder} />
              <span className={styles.ripple} />
              <span className={styles.wordClip}>
                <span className={styles.word} data-text="联系">联系</span>
              </span>
            </Link>
          </div>

          <button
            type="button"
            className={styles.toggle}
            aria-label={open ? "关闭菜单" : "打开菜单"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={styles.mobilePanel}>
        <nav aria-label="移动端主导航">
          {NAV_ITEMS.map((item, index) => (
            <Link key={item.href} href={item.href} className={styles.mobileLink}
              style={{ "--mobile-index": index } as CSSProperties} onClick={closeMenu}>
              <span>{item.label}</span>
              <small>0{index + 1}</small>
            </Link>
          ))}
          <Link href="/#contact" className={styles.mobileLink}
            style={{ "--mobile-index": NAV_ITEMS.length } as CSSProperties} onClick={navigateToContact}>
            <span>联系</span><small>04</small>
          </Link>
        </nav>
      </div>
    </header>
  );
}
