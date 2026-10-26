"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Arrow } from "./arrow";
const links = [
  ["Studio", "studio"],
  ["Services", "services"],
  ["Work", "work"],
  ["Approach", "approach"],
];
export function SiteHeader() {
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const closeOutside = (e: PointerEvent) => {
      if (menu.current && !menu.current.contains(e.target as Node))
        menu.current.open = false;
    };
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", escape);
    };
  }, []);
  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <a href="#home" className="brand" aria-label="ARISU — home">
          <Image
            src="/images/arisu-logo.png"
            alt="ARISU"
            width={478}
            height={122}
            sizes="140px"
            preload
          />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([name, id]) => (
            <a key={id} href={`#${id}`}>
              {name}
            </a>
          ))}
        </nav>
        <a href="#contact" className="button button-outline header-cta">
          Let’s talk <Arrow />
        </a>
        <details className="mobile-menu" ref={menu}>
          <summary aria-label="Toggle navigation">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            {[...links, ["Let’s talk", "contact"]].map(([name, id], i) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => {
                  if (menu.current) menu.current.open = false;
                }}
              >
                <span>0{i + 1}</span>
                {name}
                <Arrow />
              </a>
            ))}
          </nav>
        </details>
      </div>
      <div className="reading-progress" aria-hidden="true" />
    </header>
  );
}
