# Arisuweb

Dependensi untuk pengembangan scene 3D dan animasi web.

## Instalasi

Gunakan Node.js 22 atau lebih baru, lalu jalankan dari direktori repository:

```sh
npm ci
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

## Workflow desain dari daftar awal

- **Design DNA:** belum dipasang; tautan sumber diperlukan untuk mengidentifikasi skill atau alat yang dimaksud.
- **Motion Design:** GSAP dan Lottie telah disiapkan untuk animasi SVG dan Lottie. Workflow AI khusus belum dipasang karena sumbernya belum diberikan.
- **Genjutsu:** belum dipasang; tautan sumber diperlukan untuk mengidentifikasi skill atau alat yang dimaksud.

Nama workflow desain tidak otomatis menunjukkan nama paket npm.
