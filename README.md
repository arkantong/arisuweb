# Arisuweb

Website company profile ARISU Creative dengan Next.js App Router, TypeScript, Tailwind CSS v4, dan GSAP. Konten berasal dari deck ARISU: layanan Campaign, Brand, Content, Craft; proses kerja; studi kasus Gulo Bakes; dan kontak.

Visual gelap dengan aksen cyan–ungu, karya abstrak kaca/krom, animasi scroll dan respons pointer. Navigasi mobile, dialog detail proyek, serta tautan email, WhatsApp, dan Instagram tersedia. Animasi mengikuti preferensi reduced motion. Tidak ada backend formulir atau pengiriman pesan otomatis.

## Instalasi

Gunakan Node.js 22+ dan Python 3.10+ untuk helper skill, lalu jalankan dari direktori repository:

```sh
npm ci
npm run setup:skills
```

`package-lock.json` mengunci versi dependensi agar instalasi konsisten. Skill AI disimpan bersama repository; script setup menyiapkan helper Design DNA dan engine Impeccable sesuai platform.

## Menjalankan aplikasi

```sh
npm run dev
```

Server memakai port 3000 secara default. Untuk port lain, jalankan `npm run dev -- --port 3001`.

Pemeriksaan dan mode produksi:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Judul dan metadata sudah memakai identitas ARISU. Website dibangun dan diuji secara lokal; deployment hosting dan domain belum dikonfigurasi. Teks mengikuti bahasa Inggris pada deck. Logo dan karya Gulo Bakes berasal dari PDF yang diberikan; resolusi gambar portofolio mengikuti sumber PDF. Ganti dengan master beresolusi tinggi ketika tersedia, tanpa mengubah desain asli.

## Struktur

- `src/app/`: halaman, layout, metadata, dan stylesheet Tailwind.
- `src/components/site-motion.tsx`: animasi GSAP dan ScrollTrigger dengan cleanup serta reduced motion.
- `src/components/site-header.tsx`: navigasi desktop/mobile.
- `src/components/project-dialog.tsx`: detail studi kasus dengan native dialog, dukungan Escape, dan pemulihan fokus.
- `public/images/`: logo asli, gambar portofolio dari deck, dan aset abstrak yang dibuat untuk website.
- `src/app/fonts/`: Space Grotesk lokal dan lisensi SIL OFL; tidak bergantung pada Google Fonts saat runtime.
- `docs/design/creative-direction.md`: arah visual, tokens, sumber aset, dan adaptasi responsif.
- `scripts/setup-impeccable.mjs`: menyiapkan engine skill dari paket npm yang dikunci versinya.
- `.agents/skills/` dan `.claude/skills/`: skill AI untuk masing-masing provider.

## Library yang terpasang

| Library | Kegunaan |
| --- | --- |
| [Next.js](https://nextjs.org/docs) + React | App Router, rendering server, dan build produksi. |
| [Tailwind CSS](https://tailwindcss.com/docs) | Styling responsif dengan integrasi PostCSS. |
| [Three.js](https://threejs.org/docs/) (`three`) | Scene 3D, material, lighting, dan partikel. |
| [GSAP](https://gsap.com/docs/v3/) (`gsap`) | Tween, timeline, serta animasi elemen HTML dan SVG. |
| [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | Plugin animasi berbasis scroll; sudah termasuk paket `gsap`. |
| [Lottie](https://github.com/airbnb/lottie-web) (`lottie-web`) | Pemutar animasi Lottie JSON dengan renderer SVG, Canvas, atau HTML. |

Contoh impor untuk aplikasi browser yang memakai bundler:

```js
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import lottie from 'lottie-web';

gsap.registerPlugin(ScrollTrigger);
```

Three.js membutuhkan konteks WebGL untuk rendering. ScrollTrigger dan Lottie digunakan di browser; jika memakai SSR, inisialisasikan setelah komponen terpasang di client. Pemutaran Lottie membutuhkan file animasi JSON.

## Skill AI yang terpasang

- **[Design DNA](https://github.com/zanwei/design-dna):** mengekstrak warna, tipografi, spacing, gaya, dan efek dari referensi menjadi profil JSON, lalu memakai profil itu untuk implementasi. Termasuk alat pengukuran warna deterministik dan verifikasi dengan `sharp`.
- **[Impeccable v4.7.0](https://github.com/pbakaus/impeccable/tree/skill-v4.7.0):** panduan desain, audit, pemolesan layout dan tipografi, serta detector lokal. Jalankan `npm run design:detect` untuk memeriksa source aplikasi. Skill dipasang untuk Codex dan Claude Code tanpa hook otomatis.
- **[Genjutsu v4.1.1](https://github.com/AThevon/genjutsu/tree/v4.1.1):** bundle lengkap dengan pipeline `cast`, `paint`, `bunshin`, dan 17 modul pendamping untuk motion, visual identity, Three.js, GSAP, serta audit desain.
- **Motion Design:** GSAP, ScrollTrigger, Lottie, dan panduan motion Genjutsu tersedia. Workflow AI terpisah dari daftar awal belum diidentifikasi karena tautan sumbernya belum diberikan.

Skill disimpan pada scope project. Design DNA dan Genjutsu memakai symlink relatif untuk Claude Code; Impeccable memiliki salinan khusus masing-masing provider. Tidak perlu mengunduh ulang dokumen skill setelah clone. Detail sumber, kompatibilitas, penggunaan, dan pemeriksaan tersedia di [SKILLS.md](SKILLS.md).
