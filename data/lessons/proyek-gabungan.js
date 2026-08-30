window.LEARNWEB_LESSONS = window.LEARNWEB_LESSONS || {};
window.LEARNWEB_LESSONS["proyek-gabungan"] = {
  "modul": "proyek-gabungan",
  "judul": "Proyek Gabungan",
  "lessons": [
    {
      "id": "proyek-gabungan-1",
      "judul": "Membuat Kartu Profil",
      "penjelasan": "Saatnya menggabungkan HTML dan CSS! Kartu profil biasanya berisi gambar, nama, dan deskripsi singkat, disusun rapi dengan flexbox dan diberi bayangan (box-shadow) agar terlihat seperti kartu.",
      "contoh_kode": "<div class=\"profil-card\">\n  <img src=\"https://via.placeholder.com/100\" alt=\"Foto profil\">\n  <h3>Nama Kamu</h3>\n  <p>Pelajar HTML/CSS/JS</p>\n</div>",
      "starter_code": {
        "html": "<div class=\"profil-card\">\n  <img src=\"https://via.placeholder.com/100\" alt=\"Foto profil\">\n  <h3>Nama Kamu</h3>\n  <p>Pelajar HTML/CSS/JS</p>\n</div>",
        "css": ".profil-card {\n  max-width: 220px;\n  margin: 20px auto;\n  padding: 20px;\n  text-align: center;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.15);\n  font-family: sans-serif;\n}\n\n.profil-card img {\n  border-radius: 50%;\n}",
        "js": ""
      },
      "tantangan": "Rapikan bagian atas portofoliomu (foto + nama + tagline di header) supaya benar-benar terlihat seperti kartu profil profesional — gabungkan flexbox, box-shadow, dan border-radius yang sudah kamu pelajari."
    },
    {
      "id": "proyek-gabungan-2",
      "judul": "To-Do List Sederhana",
      "penjelasan": "Sekarang gabungkan HTML, CSS, dan JS: buat input untuk menambah tugas baru, tombol untuk menambahkannya ke daftar, dan gunakan manipulasi DOM untuk menampilkan tugas baru di layar.",
      "contoh_kode": "<input type=\"text\" id=\"input-tugas\" placeholder=\"Tulis tugas baru...\">\n<button id=\"tambah-btn\">Tambah</button>\n<ul id=\"daftar-tugas\"></ul>\n\n<script>\n  document.querySelector(\"#tambah-btn\").addEventListener(\"click\", function () {\n    const input = document.querySelector(\"#input-tugas\");\n    if (input.value.trim() === \"\") return;\n    const li = document.createElement(\"li\");\n    li.textContent = input.value;\n    document.querySelector(\"#daftar-tugas\").appendChild(li);\n    input.value = \"\";\n  });\n</script>",
      "starter_code": {
        "html": "<input type=\"text\" id=\"input-tugas\" placeholder=\"Tulis tugas baru...\">\n<button id=\"tambah-btn\">Tambah</button>\n<ul id=\"daftar-tugas\"></ul>",
        "css": "#input-tugas {\n  padding: 8px;\n  margin-right: 8px;\n}\n\n#daftar-tugas {\n  margin-top: 12px;\n}",
        "js": "document.querySelector(\"#tambah-btn\").addEventListener(\"click\", function () {\n  const input = document.querySelector(\"#input-tugas\");\n  if (input.value.trim() === \"\") return;\n  const li = document.createElement(\"li\");\n  li.textContent = input.value;\n  document.querySelector(\"#daftar-tugas\").appendChild(li);\n  input.value = \"\";\n});"
      },
      "tantangan": "Tambahkan widget kecil \"Progress Belajar\" di portofoliomu (opsional, section terpisah): daftar checklist yang bisa ditambah dan dicoret sebagai bukti kamu paham manipulasi DOM + array — sekaligus pemanis konten."
    },
    {
      "id": "proyek-gabungan-3",
      "judul": "Galeri Gambar Interaktif",
      "penjelasan": "Buat galeri kecil: beberapa thumbnail gambar, dan saat salah satu diklik, gambar utama di atasnya berubah menampilkan gambar yang diklik. Ini melatih event handling dan manipulasi atribut <code>src</code>.",
      "contoh_kode": "<img id=\"gambar-utama\" src=\"https://via.placeholder.com/300?text=1\" width=\"300\">\n<div class=\"thumbnail-row\">\n  <img class=\"thumb\" src=\"https://via.placeholder.com/60?text=1\">\n  <img class=\"thumb\" src=\"https://via.placeholder.com/60?text=2\">\n  <img class=\"thumb\" src=\"https://via.placeholder.com/60?text=3\">\n</div>\n\n<script>\n  document.querySelectorAll(\".thumb\").forEach(function (thumb) {\n    thumb.addEventListener(\"click\", function () {\n      document.querySelector(\"#gambar-utama\").src = thumb.src.replace(\"60\", \"300\");\n    });\n  });\n</script>",
      "starter_code": {
        "html": "<img id=\"gambar-utama\" src=\"https://via.placeholder.com/300?text=1\" width=\"300\">\n<div class=\"thumbnail-row\">\n  <img class=\"thumb\" src=\"https://via.placeholder.com/60?text=1\">\n  <img class=\"thumb\" src=\"https://via.placeholder.com/60?text=2\">\n  <img class=\"thumb\" src=\"https://via.placeholder.com/60?text=3\">\n</div>",
        "css": ".thumbnail-row {\n  display: flex;\n  gap: 8px;\n  margin-top: 10px;\n}\n\n.thumb {\n  cursor: pointer;\n  border: 2px solid transparent;\n  border-radius: 4px;\n}\n\n.thumb:hover {\n  border-color: #4f46e5;\n}",
        "js": "document.querySelectorAll(\".thumb\").forEach(function (thumb) {\n  thumb.addEventListener(\"click\", function () {\n    document.querySelector(\"#gambar-utama\").src = thumb.src.replace(\"60\", \"300\");\n  });\n});"
      },
      "tantangan": "Tambahkan galeri mini di section Proyek Saya: saat sebuah kartu proyek diklik, tampilkan gambar/preview proyek itu lebih besar di bagian atas section."
    },
    {
      "id": "proyek-gabungan-4",
      "judul": "Proyek Akhir: Landing Page Sederhana",
      "penjelasan": "Ini proyek akhir jalur belajar! Gabungkan semua yang sudah dipelajari: struktur HTML (header, section, footer), styling CSS (flexbox, warna, spacing), dan interaktivitas JS (misalnya tombol dark mode atau toggle menu).",
      "contoh_kode": "<header class=\"lp-header\">\n  <h1>Toko Kopi Kita</h1>\n  <button id=\"toggle-tema\">Ganti Tema</button>\n</header>\n<section class=\"lp-hero\">\n  <p>Kopi terbaik, diseduh dengan cinta.</p>\n</section>\n<footer class=\"lp-footer\">© 2026 Toko Kopi Kita</footer>\n\n<script>\n  document.querySelector(\"#toggle-tema\").addEventListener(\"click\", function () {\n    document.body.classList.toggle(\"tema-gelap\");\n  });\n</script>",
      "starter_code": {
        "html": "<header class=\"lp-header\">\n  <h1>Toko Kopi Kita</h1>\n  <button id=\"toggle-tema\">Ganti Tema</button>\n</header>\n<section class=\"lp-hero\">\n  <p>Kopi terbaik, diseduh dengan cinta.</p>\n</section>\n<footer class=\"lp-footer\">© 2026 Toko Kopi Kita</footer>",
        "css": "body {\n  font-family: sans-serif;\n  margin: 0;\n  transition: background 0.3s, color 0.3s;\n}\n\n.lp-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 24px;\n  background: #4f46e5;\n  color: white;\n}\n\n.lp-hero {\n  padding: 60px 24px;\n  text-align: center;\n}\n\n.lp-footer {\n  padding: 16px;\n  text-align: center;\n  font-size: 14px;\n  color: gray;\n}\n\nbody.tema-gelap {\n  background: #14161c;\n  color: #eee;\n}",
        "js": "document.querySelector(\"#toggle-tema\").addEventListener(\"click\", function () {\n  document.body.classList.toggle(\"tema-gelap\");\n});"
      },
      "tantangan": "Sentuhan akhir portofoliomu: tambahkan tombol toggle dark/light mode yang memanfaatkan CSS variables dari lesson sebelumnya, pastikan semua section tetap rapi di HP, lalu deploy ke GitHub Pages supaya jadi portofolio nyata yang bisa dibagikan."
    }
  ]
};
