"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
export function SiteMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-copy h1 span", {
          y: 50,
          opacity: 0,
          duration: 1.1,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "all",
        });
        gsap.from(".hero-copy p, .hero-actions", {
          y: 24,
          opacity: 0,
          duration: 1,
          delay: 0.35,
          stagger: 0.1,
          clearProps: "all",
        });
        gsap.from(".hero-art", {
          scale: 0.92,
          opacity: 0,
          duration: 1.6,
          ease: "power2.out",
          clearProps: "all",
        });
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            y: 30,
            opacity: 0,
            duration: 0.85,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: { trigger: el, start: "top 94%", once: true },
          });
        });
        gsap.to(".hero-art-inner", {
          yPercent: 12,
          rotation: 7,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.to(".contact-art", {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: ".contact",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.fromTo(
          document.querySelector(".reading-progress"),
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: document.documentElement,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.2,
            },
          },
        );
      });
      media.add(
        "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
        () => {
          const hero = root.current?.querySelector<HTMLElement>(".hero");
          const art = root.current?.querySelector<HTMLElement>(".hero-art");
          if (!hero || !art) return;
          const xTo = gsap.quickTo(art, "x", {
            duration: 1.2,
            ease: "power3.out",
          });
          const yTo = gsap.quickTo(art, "y", {
            duration: 1.2,
            ease: "power3.out",
          });
          const move = (e: PointerEvent) => {
            const rect = hero.getBoundingClientRect();
            xTo((e.clientX / rect.width - 0.5) * 25);
            yTo(((e.clientY - rect.top) / rect.height - 0.5) * 20);
          };
          const leave = () => {
            xTo(0);
            yTo(0);
          };
          hero.addEventListener("pointermove", move);
          hero.addEventListener("pointerleave", leave);
          return () => {
            hero.removeEventListener("pointermove", move);
            hero.removeEventListener("pointerleave", leave);
          };
        },
      );
      return () => media.revert();
    },
    { scope: root },
  );
  return <div ref={root}>{children}</div>;
}
