# LearnWeb

Website statis untuk belajar HTML dan CSS dari nol — tanpa framework, tanpa build tool. Jalur belajar saat ini sengaja disederhanakan jadi 2 modul (HTML Dasar → CSS Dasar, total 42 lesson): materi disusun per topik (Teks → CSS untuk Teks → Gambar → Tabel → topik HTML lainnya), baru di bagian akhir tiap modul ada beberapa lesson "Tugas" yang menggabungkan semuanya jadi satu praktik nyata. Modul lanjutan (JavaScript, HTML/CSS/JS Lanjutan, Proyek Gabungan) untuk sementara dinonaktifkan dari alur — file datanya masih ada di `data/lessons/`, tinggal didaftarkan lagi di `assets/js/app.js` kalau mau diaktifkan.

**🔗 Demo Langsung:** https://tinyurl.com/coding-html-lesson
(alamat asli: https://wisnu199701-glitch.github.io/learnweb/)

**Project berkelanjutan:** playground di semua lesson berbagi SATU kode yang sama (tersimpan otomatis di `localStorage`, lihat `assets/js/project.js`), jadi kode yang kamu tulis tetap ada meski pindah-pindah lesson. Tombol "🗑 Reset Total" di playground menghapus seluruh progress ini (beda dari lesson biasa yang cuma reset ke starter code lesson itu sendiri). Sandbox (`sandbox.html`) tetap terpisah, tidak ikut project ini.

Lihat `LEARNWEB_SPEC.md` untuk spesifikasi lengkap proyek ini.

## Menjalankan Lokal

Tidak ada build step — cukup buka `index.html` langsung di browser (dobel-klik juga bisa). Data lesson dimuat lewat `<script>` tag (`data/lessons/*.js`), bukan `fetch()`, supaya tidak kena blokir CORS browser untuk akses `file://`.

Kalau mau tetap pakai server lokal (opsional, misalnya untuk meniru kondisi produksi):

```bash
# Python 3
python -m http.server 8000

# atau Node.js (tanpa install tambahan)
npx serve .
```

Lalu buka `http://localhost:8000` di browser.

## Struktur Proyek

```
/
├── index.html          # Landing page + roadmap modul aktif
├── app.html             # Shell SPA untuk render lesson (routing via hash)
├── sandbox.html          # Playground bebas
├── assets/css/style.css  # Semua styling + tema dark/light
├── assets/js/
│   ├── app.js            # Routing hash + render lesson dari data
│   ├── playground.js     # Live editor HTML/CSS/JS -> iframe
│   ├── progress.js       # Status lesson selesai via localStorage
│   ├── project.js        # Kode project berkelanjutan via localStorage
│   └── theme.js          # Toggle dark/light mode
└── data/lessons/*.js     # Konten materi tiap modul (data, dimuat via <script>)
```

## Menambah Materi Baru

Materi lesson murni data, bukan hardcode. Setiap file di `data/lessons/` mengisi `window.LEARNWEB_LESSONS["<nama-modul>"]` dengan skema:

```js
window.LEARNWEB_LESSONS = window.LEARNWEB_LESSONS || {};
window.LEARNWEB_LESSONS["nama-modul"] = {
  "modul": "nama-modul",
  "judul": "Judul Modul",
  "lessons": [
    {
      "id": "nama-modul-N",
      "judul": "Judul Lesson",
      "penjelasan": "Boleh mengandung HTML sederhana seperti <code> atau <strong>.",
      "contoh_kode": "Kode contoh sebagai teks.",
      "starter_code": { "html": "", "css": "", "js": "" },
      "tantangan": "Instruksi latihan singkat."
    }
  ]
};
```

Untuk menambah lesson baru: tambahkan objek baru ke array `lessons` di file modul terkait.

Untuk menambah modul baru: buat file `.js` baru di `data/lessons/` mengikuti format di atas, daftarkan di array `MODULES` pada `assets/js/app.js`, lalu tambahkan `<script src="data/lessons/nama-modul.js">` di `index.html` dan `app.html` (sebelum `assets/js/app.js`).

Data disimpan sebagai file `.js` (bukan `.json` murni) karena `fetch()` ke file JSON lokal diblokir kebijakan CORS browser saat halaman dibuka langsung lewat `file://`. Dengan `<script>` tag, halaman tetap bisa dibuka tanpa server lokal.

## Deploy ke GitHub Pages

1. Push repo ini ke GitHub.
2. Buka **Settings → Pages** di repo GitHub.
3. Pilih source: branch `main`, folder `/ (root)`.
4. Simpan — situs akan tersedia di `https://<username>.github.io/<nama-repo>/` setelah beberapa menit.

Tidak ada proses build yang diperlukan; setiap push langsung tercermin di situs.
