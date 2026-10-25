import { MotionDemo } from "@/components/motion-demo";

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-svh max-w-6xl flex-col px-6 sm:px-10">
      <header className="flex items-center justify-between gap-6 border-b border-[#1d2927]/15 py-7">
        <a href="#utama" className="text-lg font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4">
          Arisuweb
        </a>
        <a href="#pratinjau" className="inline-flex min-h-11 items-center text-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">
          Pratinjau
        </a>
      </header>

      <main id="utama" className="grid flex-1 items-center gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        <div>
          <h1 className="max-w-xl text-4xl leading-tight font-medium tracking-tight sm:text-5xl lg:text-6xl">
            Ruang untuk cerita perusahaan Anda.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#475752]">
            Website company profile sedang disiapkan. Identitas, layanan, dan karya perusahaan akan hadir di sini.
          </p>
        </div>
        <MotionDemo />
      </main>

      <footer className="border-t border-[#1d2927]/15 py-6 text-sm text-[#475752]">
        Arisuweb · Segera hadir
      </footer>
    </div>
  );
}
