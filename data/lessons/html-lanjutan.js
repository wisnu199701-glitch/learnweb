window.LEARNWEB_LESSONS = window.LEARNWEB_LESSONS || {};
window.LEARNWEB_LESSONS["html-lanjutan"] = {
  "modul": "html-lanjutan",
  "judul": "HTML Lanjutan",
  "lessons": [
    {
      "id": "html-lanjutan-1",
      "judul": "Input Types Lanjutan",
      "penjelasan": "Selain <code>text</code> dan <code>email</code>, atribut <code>type</code> pada <code>&lt;input&gt;</code> punya banyak varian yang memberi UI khusus dari browser: <code>number</code> (angka dengan tombol +/-), <code>date</code> (kalender), <code>range</code> (slider), <code>color</code> (pemilih warna), dan <code>file</code> (unggah berkas).",
      "contoh_kode": "<label>Jumlah: <input type=\"number\" min=\"1\" max=\"10\" value=\"1\"></label><br>\n<label>Tanggal Lahir: <input type=\"date\"></label><br>\n<label>Volume: <input type=\"range\" min=\"0\" max=\"100\"></label><br>\n<label>Warna Favorit: <input type=\"color\"></label><br>\n<label>Unggah Foto: <input type=\"file\" accept=\"image/*\"></label>",
      "starter_code": {
        "html": "<label>Jumlah: <input type=\"number\" min=\"1\" max=\"10\" value=\"1\"></label><br>\n<label>Tanggal Lahir: <input type=\"date\"></label><br>\n<label>Volume: <input type=\"range\" min=\"0\" max=\"100\"></label>",
        "css": "",
        "js": ""
      },
      "tantangan": "Upgrade form Kontak di portofoliomu: tambahkan input type=\"date\" untuk \"tanggal tersedia interview\" dan input type=\"color\" supaya pengunjung bisa memilih warna tema favorit mereka."
    },
    {
      "id": "html-lanjutan-2",
      "judul": "Elemen Form Tambahan",
      "penjelasan": "<code>&lt;fieldset&gt;</code> dan <code>&lt;legend&gt;</code> mengelompokkan input sejenis dengan judul grup. <code>&lt;datalist&gt;</code> memberi saran ketik (autocomplete) pada input teks. <code>&lt;progress&gt;</code> menampilkan progress bar, dan <code>&lt;meter&gt;</code> menampilkan nilai dalam rentang (mis. skor).",
      "contoh_kode": "<fieldset>\n  <legend>Data Diri</legend>\n  <label>Kota: <input list=\"daftar-kota\"></label>\n  <datalist id=\"daftar-kota\">\n    <option value=\"Jakarta\">\n    <option value=\"Bandung\">\n    <option value=\"Surabaya\">\n  </datalist>\n</fieldset>\n\n<p>Progress unduhan:</p>\n<progress value=\"70\" max=\"100\"></progress>\n\n<p>Skor ujian:</p>\n<meter value=\"8\" min=\"0\" max=\"10\"></meter>",
      "starter_code": {
        "html": "<fieldset>\n  <legend>Data Diri</legend>\n  <label>Kota: <input list=\"daftar-kota\"></label>\n  <datalist id=\"daftar-kota\">\n    <option value=\"Jakarta\">\n    <option value=\"Bandung\">\n  </datalist>\n</fieldset>\n<progress value=\"70\" max=\"100\"></progress>",
        "css": "",
        "js": ""
      },
      "tantangan": "Bungkus form Kontak portofoliomu dengan <fieldset>+<legend>, tambahkan <datalist> saran topik pesan, dan satu <meter> yang menunjukkan \"tingkat kelengkapan profil\"."
    },
    {
      "id": "html-lanjutan-3",
      "judul": "Details & Summary",
      "penjelasan": "<code>&lt;details&gt;</code> membuat konten yang bisa dibuka/tutup (accordion) tanpa perlu JavaScript sama sekali. <code>&lt;summary&gt;</code> di dalamnya adalah judul yang selalu terlihat dan berfungsi sebagai tombol untuk membuka/menutup.",
      "contoh_kode": "<details>\n  <summary>Apa itu HTML?</summary>\n  <p>HTML adalah bahasa markup untuk menyusun struktur halaman web.</p>\n</details>\n\n<details open>\n  <summary>Apa itu CSS?</summary>\n  <p>CSS mengatur tampilan visual dari halaman HTML.</p>\n</details>",
      "starter_code": {
        "html": "<details>\n  <summary>Apa itu HTML?</summary>\n  <p>HTML adalah bahasa markup untuk menyusun struktur halaman web.</p>\n</details>",
        "css": "",
        "js": ""
      },
      "tantangan": "Tambahkan section FAQ singkat (2-3 pertanyaan seputar dirimu, misal \"Sedang mencari kerja?\") di portofoliomu memakai <details>/<summary>."
    },
    {
      "id": "html-lanjutan-4",
      "judul": "Aksesibilitas Dasar (ARIA)",
      "penjelasan": "Aksesibilitas memastikan halaman bisa dipakai semua orang, termasuk pengguna screen reader. Praktik dasar: selalu isi <code>alt</code> pada gambar, hubungkan <code>&lt;label for=\"id\"&gt;</code> dengan input-nya, dan gunakan atribut <code>aria-label</code> untuk memberi nama pada elemen yang tidak punya teks (misalnya tombol ikon).",
      "contoh_kode": "<button aria-label=\"Tutup notifikasi\">✕</button>\n\n<label for=\"cari\">Cari:</label>\n<input id=\"cari\" type=\"text\">\n\n<img src=\"logo.png\" alt=\"Logo perusahaan berwarna biru\">\n\n<div role=\"alert\">Data berhasil disimpan!</div>",
      "starter_code": {
        "html": "<button aria-label=\"Tutup notifikasi\">✕</button>\n<br><br>\n<label for=\"cari\">Cari:</label>\n<input id=\"cari\" type=\"text\">",
        "css": "",
        "js": ""
      },
      "tantangan": "Periksa ulang portofoliomu: pastikan semua <input> di form Kontak punya <label> yang terhubung lewat for/id, dan beri aria-label pada tombol \"Baca Selengkapnya\" atau ikon lain yang belum punya teks jelas."
    },
    {
      "id": "html-lanjutan-5",
      "judul": "SVG Dasar",
      "penjelasan": "SVG (Scalable Vector Graphics) adalah gambar berbasis vektor yang ditulis langsung sebagai kode HTML, sehingga tidak pecah saat diperbesar. Bentuk dasar: <code>&lt;circle&gt;</code>, <code>&lt;rect&gt;</code>, dan <code>&lt;line&gt;</code>, semuanya diletakkan di dalam tag <code>&lt;svg&gt;</code>.",
      "contoh_kode": "<svg width=\"200\" height=\"120\">\n  <rect x=\"10\" y=\"10\" width=\"80\" height=\"50\" fill=\"#4f46e5\" />\n  <circle cx=\"150\" cy=\"35\" r=\"25\" fill=\"#f59e0b\" />\n  <line x1=\"10\" y1=\"90\" x2=\"190\" y2=\"90\" stroke=\"black\" stroke-width=\"3\" />\n</svg>",
      "starter_code": {
        "html": "<svg width=\"200\" height=\"120\">\n  <rect x=\"10\" y=\"10\" width=\"80\" height=\"50\" fill=\"#4f46e5\" />\n  <circle cx=\"150\" cy=\"35\" r=\"25\" fill=\"#f59e0b\" />\n</svg>",
        "css": "",
        "js": ""
      },
      "tantangan": "Tambahkan satu ikon SVG kecil (misalnya bintang atau panah sederhana) di sebelah judul section Keahlian atau Kontak di portofoliomu."
    },
    {
      "id": "html-lanjutan-6",
      "judul": "Meta Tags & Loading Script",
      "penjelasan": "Tag <code>&lt;meta&gt;</code> di dalam <code>&lt;head&gt;</code> memberi info penting: <code>viewport</code> untuk tampilan mobile-friendly, dan <code>description</code> untuk cuplikan di hasil pencarian. Untuk tag <code>&lt;script&gt;</code>, atribut <code>defer</code> membuat script dijalankan setelah HTML selesai diparsing (tanpa memblokir render), berguna untuk performa halaman.",
      "contoh_kode": "<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta name=\"description\" content=\"Belajar HTML, CSS, dan JavaScript dari nol.\">\n  <title>LearnWeb</title>\n  <script src=\"app.js\" defer></script>\n</head>",
      "starter_code": {
        "html": "<p>Meta tag diletakkan di &lt;head&gt; sehingga tidak tampil langsung di preview. Contoh strukturnya:</p>\n<pre>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;\n&lt;script src=\"app.js\" defer&gt;&lt;/script&gt;</pre>",
        "css": "",
        "js": ""
      },
      "tantangan": "Lengkapi bagian <head> portofoliomu dengan meta viewport dan satu meta name=\"description\" yang menjelaskan portofoliomu dalam satu kalimat."
    }
  ]
};
