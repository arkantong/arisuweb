"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionDemo() {
  const container = useRef<HTMLElement>(null);
  const [status, setStatus] = useState("Siap diputar.");

  const { contextSafe } = useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo("[data-motion-orb]", { opacity: 0.5 }, {
        opacity: 1,
        duration: 0.6,
        scrollTrigger: { trigger: container.current, start: "top 90%", once: true },
      });
    });
    return () => media.revert();
  }, { scope: container });

  const play = contextSafe(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStatus("Animasi dinonaktifkan sesuai pengaturan perangkat.");
      return;
    }
    gsap.killTweensOf("[data-motion-orb]");
    setStatus("Animasi berjalan.");
    gsap.fromTo("[data-motion-orb]", { y: 0, scale: 1 }, {
      y: -36,
      scale: 0.9,
      duration: 0.4,
      repeat: 1,
      yoyo: true,
      ease: "power2.inOut",
      onComplete: () => setStatus("Animasi selesai."),
    });
  });

  return (
    <section id="pratinjau" ref={container} aria-labelledby="motion-title" className="min-w-0">
      <div aria-hidden="true" className="flex min-h-64 items-center justify-center bg-[#e4eae4] sm:min-h-80">
        <div data-motion-orb className="h-28 w-28 rounded-full bg-[#216550] sm:h-36 sm:w-36" />
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <h2 id="motion-title" className="text-lg font-medium">Sedikit gerakan.</h2>
        <button type="button" onClick={play} className="min-h-11 cursor-pointer bg-[#216550] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#174c3c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#216550]">
          Putar animasi
        </button>
      </div>
      <p role="status" aria-live="polite" className="mt-3 min-h-6 text-sm text-[#475752]">{status}</p>
    </section>
  );
}
