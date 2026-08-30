# LearnWeb — Jalur Belajar HTML/CSS/JavaScript

## Ringkasan Proyek
Website statis (vanilla HTML/CSS/JS, **tanpa framework dan tanpa build tool**) berisi jalur belajar terstruktur untuk pemula: HTML Dasar → CSS Dasar → JavaScript Dasar → Proyek Gabungan. Setiap lesson punya penjelasan singkat + contoh kode + live code playground (edit kode, lihat preview langsung), plus progress tracker.

Karena dibuat murni dengan HTML/CSS/JS tanpa build step, project ini sekaligus jadi contoh nyata yang bisa dibuka source code-nya oleh pengguna (view-source) sebagai bahan belajar tambahan.

**Target deploy:** GitHub Pages (branch `main` atau folder `/docs`), tanpa proses build. Push langsung jalan.

## Prinsip Desain
- **Sesederhana mungkin.** Tidak ada npm install, tidak ada bundler, tidak ada framework (React/Vue/dll). Hanya HTML, CSS, JS murni.
- **Konten terpisah dari kode.** Materi lesson disimpan sebagai data JSON, bukan hardcode di JS/HTML, supaya menambah materi baru = menambah file JSON.
- **Mobile-friendly.** Banyak pengguna kemungkinan mengakses dari HP.
- **Tanpa backend.** Semua state (progress belajar, tema dark/light) disimpan di `localStorage` browser.
- **Aksesibel untuk pemula.** Bahasa penjelasan sederhana, contoh kode singkat dan langsung bisa dicoba.

## Struktur File
```
/
├── index.html                  # Landing page: intro + roadmap visual 4 modul
├── app.html                    # Shell SPA sederhana untuk render lesson (routing via hash)
├── sandbox.html                # Playground bebas, tanpa terikat lesson
├── assets/
│   ├── css/
│   │   └── style.css           # Semua styling, termasuk dark/light mode via CSS variables
│   └── js/
│       ├── app.js              # Routing (hash-based) + render lesson dari data JSON
│       ├── playground.js       # Logic live editor: textarea HTML/CSS/JS -> render ke iframe preview
│       ├── progress.js         # Baca/tulis localStorage untuk status lesson selesai
│       └── theme.js            # Toggle dark/light mode, simpan preferensi di localStorage
├── data/
│   └── lessons/
│       ├── html-dasar.json
│       ├── css-dasar.json
│       ├── javascript-dasar.json
│       └── proyek-gabungan.json
└── README.md                   # Cara menjalankan lokal & deploy ke GitHub Pages
```

## Skema Data Lesson (JSON)
Setiap file di `data/lessons/` berisi array lesson dengan format:
```json
{
  "modul": "html-dasar",
  "judul": "HTML Dasar",
  "lessons": [
    {
      "id": "html-dasar-1",
      "judul": "Struktur Dasar HTML",
      "penjelasan": "Teks penjelasan singkat (boleh mengandung HTML sederhana seperti <code>, <strong>).",
      "contoh_kode": "<!DOCTYPE html>\n<html>...</html>",
      "starter_code": {
        "html": "<!-- kode awal untuk playground -->",
        "css": "",
        "js": ""
      },
      "tantangan": "Instruksi latihan singkat yang harus dicoba di playground."
    }
  ]
}
```

## Fitur & Halaman

### 1. Landing Page (`index.html`)
- Judul, deskripsi singkat project.
- Roadmap visual 4 modul (HTML Dasar, CSS Dasar, JavaScript Dasar, Proyek Gabungan) berurutan, tiap modul menunjukkan progress (X dari Y lesson selesai) diambil dari `progress.js`.
- Tombol lanjut ke lesson terakhir yang belum selesai, atau mulai dari awal jika belum ada progress.
- Link ke Sandbox.

### 2. Halaman Lesson (`app.html#/modul/{modul}/{id}`)
- Sidebar/list lesson dalam modul yang sedang dibuka, menandai mana yang sudah selesai (checkmark).
- Konten lesson: penjelasan + contoh kode (ditampilkan read-only dengan syntax highlight sederhana, boleh pakai `<pre><code>`).
- **Live playground** tertanam di bawah contoh kode: 3 kolom/tab kecil (HTML/CSS/JS) berisi `starter_code`, tombol "Jalankan" me-render hasil ke `<iframe>` di sebelahnya (pakai `srcdoc` atau `postMessage`, bukan `eval` langsung untuk keamanan dasar).
- Tombol "Tandai Selesai" -> update `progress.js` -> localStorage.
- Navigasi Prev/Next antar lesson.

### 3. Sandbox (`sandbox.html`)
- Sama seperti playground di lesson, tapi kosong/bebas, tanpa keterikatan modul. Untuk eksperimen bebas.

### 4. Progress Tracker (`progress.js`)
- Key localStorage misalnya `learnweb_progress` berisi object `{ "html-dasar-1": true, ... }`.
- Fungsi: `markComplete(lessonId)`, `isComplete(lessonId)`, `getModuleProgress(modulId, totalLessons)`.

### 5. Dark/Light Mode (`theme.js`)
- Toggle di navbar semua halaman.
- Simpan preferensi di localStorage key `learnweb_theme`.
- Terapkan lewat CSS variables (`:root[data-theme="dark"]`).

## Urutan Pengerjaan (MVP dulu)
1. Setup struktur file dasar + `style.css` (layout, navbar, dark/light variables).
2. Buat `index.html` dengan roadmap statis dulu (progress bisa 0 semua).
3. Buat `progress.js` dan `theme.js`.
4. Buat `app.js` dengan routing hash sederhana + render 1 lesson dummy dari `html-dasar.json`.
5. Buat `playground.js` dan integrasikan ke halaman lesson (HTML/CSS/JS -> iframe).
6. Isi penuh `html-dasar.json` (semua lesson modul HTML Dasar) sampai modul ini benar-benar bisa dipakai end-to-end.
7. Setelah MVP modul HTML Dasar jalan sempurna, baru isi `css-dasar.json`, `javascript-dasar.json`, `proyek-gabungan.json` dengan pola yang sama.
8. Buat `sandbox.html`.
9. Tulis `README.md`: cara run lokal (cukup buka `index.html` atau `python -m http.server`) dan cara aktifkan GitHub Pages.

## Batasan / Yang Harus Dihindari
- Jangan pakai framework JS (React/Vue/Svelte) atau bundler (Webpack/Vite) — harus vanilla, langsung jalan tanpa `npm install`.
- Jangan pakai backend/server — semua harus static & client-side.
- Jangan gunakan `eval()` untuk menjalankan kode JS user di playground — gunakan `iframe.srcdoc` supaya kode user berjalan terisolasi.
- Nama modul, id lesson, dan struktur JSON harus konsisten mengikuti skema di atas supaya `app.js` bisa generic (tidak hardcode per lesson).
