# Skill desain untuk Arisuweb

Skill dipasang pada scope project, bukan global. Isi skill di-commit agar tersedia bersama repository. Codex memakai `.agents/skills/`; `.claude/skills/` menautkan salinan yang sama melalui symlink relatif.

## Sumber dan versi

| Skill | Sumber | Versi yang disalin |
| --- | --- | --- |
| Design DNA | https://github.com/zanwei/design-dna | Commit `593e39bc9e3652734653bd75544a333d7d43615e` |
| Genjutsu | https://github.com/AThevon/genjutsu | Tag `v4.1.1`, commit `4efe1e0b6958b220fadedfe3519ca9a81c466221` |
| Impeccable | https://github.com/pbakaus/impeccable | Rilis skill `4.7.0` (`skill-v4.7.0`), CLI npm `4.7.0`, engine `0.1.16` |

Design DNA dipasang dengan CLI `skills@1.7.4` untuk Codex dan Claude Code. Entri sumbernya tercatat di `skills-lock.json`. Lockfile npm tambahan untuk helper Design DNA disertakan agar dependensi `sharp` dapat dipasang ulang secara konsisten.

Genjutsu dibuat dari tag di atas menggunakan script resmi `package-for-claude-ai.sh`. Bundle yang dihasilkan dipasang dengan CLI yang sama dan seluruh isinya disimpan di `.agents/skills/genjutsu/`, termasuk 17 modul `_jutsu`. Lisensi MIT upstream ikut disertakan. Genjutsu tidak memakai entri lock lokal sementara: salinan lengkap di Git adalah sumber instalasi project ini.

Impeccable dipasang dengan installer resmi untuk provider Codex dan Claude Code, pada scope project dan tanpa hook otomatis (`--no-hooks`). Karena endpoint `impeccable.style` tidak dapat diakses dari lingkungan ini, bundle diambil dari aset GitHub resmi `skill-v4.7.0/universal.zip`. Tanda tangan Ed25519, ukuran, dan SHA-256 diverifikasi terhadap keyring dari tag upstream sebelum installer memakai bundle lokal. Salinan provider Codex berada di `.agents/skills/impeccable/`, salinan khusus Claude Code di `.claude/skills/impeccable/`, dan agent pendamping di `.claude/agents/`.

Binary engine tidak di-commit. `npm ci` memasang CLI serta paket binary opsional sesuai platform dari lockfile. `npm run setup:skills` memeriksa versi lalu menyalin binary tersebut ke kedua launcher skill. Untuk menambah kemampuan baru Impeccable, baca referensi perintahnya terlebih dahulu; pemasangan ini tidak menjalankan interview produk atau memilih desain perusahaan.

Jangan mengganti bundle lengkap dengan `npx skills add AThevon/genjutsu`: upstream menyatakan perintah itu memasang pipeline tanpa modul. Untuk pembaruan, gunakan bundle resmi lengkap dari https://genjutsu.athevon.dev atau bangun ulang dari tag sumber yang telah dipilih dan periksa perubahannya sebelum mengganti salinan project.

## Persiapan setelah clone

Jalankan dari root repository dengan Node.js 22+ dan Python 3.10+:

```sh
npm ci
npm run setup:skills
```

Di cloud environment ini, cache npm perlu diarahkan ke direktori yang dapat ditulis:

```sh
npm --cache /workspace/.cache/npm ci --no-fund --no-audit
npm_config_cache=/workspace/.cache/npm npm run setup:skills
```

Helper Design DNA memproses gambar lokal dan tidak memerlukan API key. Genjutsu menyertakan alat Python serta dataset desain; akses browser, screenshot, dan kemampuan host diperlukan sesuai workflow yang dipilih. Engine Impeccable dan detector lokal juga dapat berjalan tanpa API key. Fitur eksternal seperti katalog online, update, dan penyedia generasi gambar tetap memerlukan akses atau konfigurasi masing-masing.

## Pemakaian

Buka repository ini dalam agent yang mendukung project skills. Jika daftar skill belum diperbarui, buka sesi baru atau minta agent membaca entry point yang disebut di `AGENTS.md`.

Contoh permintaan:

- "Gunakan Design DNA untuk menganalisis screenshot ini dan menghasilkan profil desain JSON."
- "Gunakan Impeccable untuk memoles tipografi dan layout halaman ini."
- "Gunakan Genjutsu cast untuk menambahkan animasi scroll pada section yang sudah ada."
- "Gunakan Genjutsu paint untuk merancang identitas visual landing page."

`bunshin` merupakan workflow pembuatan situs dengan banyak agent dan harus dipilih secara eksplisit. Instalasi ini tidak menjalankan workflow desain atau membuat situs secara otomatis.

## Kompatibilitas

Design DNA menyatakan kompatibilitas dengan Agent Skills, termasuk Codex dan Claude Code. Genjutsu mendukung Claude Code, claude.ai, dan Cowork secara resmi; upstream menyebut host lain, termasuk Codex, belum diuji dan tidak didukung secara resmi. Di sini, penemuan skill, resolusi bundle, pemuatan modul, dan helper lokal diperiksa; workflow desain penuh pada tiap host belum dijalankan.

Impeccable mendukung Codex dan Claude Code melalui salinan khusus provider. Di Claude Code, mulai dengan `/impeccable init` saat siap mengisi konteks perusahaan. Di Codex, minta agent memakai skill `impeccable`. Installer menambahkan agent pendamping, tetapi tidak mengaktifkan hook otomatis.

Salinan project ini memakai entry point `/genjutsu` pada Claude Code. Nama `/genjutsu:cast`, `/genjutsu:paint`, dan `/genjutsu:bunshin` berasal dari instalasi plugin Claude Code yang terpisah. Plugin itu tidak dipasang oleh konfigurasi project ini.

## Pemeriksaan helper

```sh
npm test --prefix .agents/skills/design-dna/scripts
python3 -m unittest discover -s .agents/skills/genjutsu/_jutsu/design-audit/scripts/tests
python3 -m unittest discover -s .agents/skills/genjutsu/_jutsu/ui-ux-pro-max/scripts/tests
npm run design:detect
.agents/skills/impeccable/scripts/impeccable engine-probe
.claude/skills/impeccable/scripts/impeccable engine-probe
```

Pemeriksaan helper memvalidasi alat skill, bukan kualitas seluruh hasil desain. Untuk aplikasi Next.js, jalankan lint, typecheck, production build, lalu uji halaman dan interaksi di browser pada desktop dan HP. Halaman awal saat ini hanya menunjukkan fondasi aplikasi dan animasi; company profile lengkap belum dibuat.
