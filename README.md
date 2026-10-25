# Arisuweb

Dependensi untuk pengembangan scene 3D dan animasi web.

## Instalasi

Gunakan Node.js 22 atau lebih baru, lalu jalankan dari direktori repository:

```sh
npm ci
npm run setup:skills
```

`package-lock.json` mengunci versi dependensi agar instalasi konsisten. Repository ini menyiapkan dependensi; aplikasi web dan perintah untuk menjalankan situs belum dibuat.

## Library yang terpasang

| Library | Kegunaan |
| --- | --- |
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
- **[Genjutsu v4.1.1](https://github.com/AThevon/genjutsu/tree/v4.1.1):** bundle lengkap dengan pipeline `cast`, `paint`, `bunshin`, dan 17 modul pendamping untuk motion, visual identity, Three.js, GSAP, serta audit desain.
- **Motion Design:** GSAP, ScrollTrigger, Lottie, dan panduan motion Genjutsu tersedia. Workflow AI terpisah dari daftar awal belum diidentifikasi karena tautan sumbernya belum diberikan.

Skill disimpan di `.agents/skills/` untuk project ini, dengan symlink relatif di `.claude/skills/` untuk Claude Code. Tidak perlu mengunduh ulang skill setelah clone. Detail sumber, kompatibilitas, penggunaan, dan pemeriksaan tersedia di [SKILLS.md](SKILLS.md).
