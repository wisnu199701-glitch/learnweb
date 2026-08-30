window.LEARNWEB_LESSONS = window.LEARNWEB_LESSONS || {};
window.LEARNWEB_LESSONS["css-lanjutan"] = {
  "modul": "css-lanjutan",
  "judul": "CSS Lanjutan",
  "lessons": [
    {
      "id": "css-lanjutan-1",
      "judul": "Selector Combinator",
      "penjelasan": "Selector bisa digabung untuk menargetkan elemen lebih spesifik: <code>A B</code> (descendant, semua B di dalam A), <code>A &gt; B</code> (child langsung), <code>A + B</code> (sibling tepat setelah A), <code>A ~ B</code> (semua sibling setelah A), dan <code>[atribut]</code> untuk menargetkan berdasarkan atribut, misalnya <code>input[type=\"text\"]</code>.",
      "contoh_kode": "<div class=\"card\">\n  <h3>Judul</h3>\n  <p>Paragraf pertama.</p>\n  <p>Paragraf kedua.</p>\n</div>\n<input type=\"text\" placeholder=\"Teks\">\n<input type=\"checkbox\">",
      "starter_code": {
        "html": "<div class=\"card\">\n  <h3>Judul</h3>\n  <p>Paragraf pertama.</p>\n  <p>Paragraf kedua.</p>\n</div>\n<input type=\"text\" placeholder=\"Teks\">\n<input type=\"checkbox\">",
        "css": ".card > h3 {\n  color: #4f46e5;\n}\n\n.card p + p {\n  color: gray;\n}\n\ninput[type=\"text\"] {\n  border: 2px solid #4f46e5;\n}",
        "js": ""
      },
      "tantangan": "Beri jarak antar section portofoliomu memakai selector .section + .section (margin-top), dan style khusus untuk link di dalam footer pakai selector footer a."
    },
    {
      "id": "css-lanjutan-2",
      "judul": "Specificity & Cascade",
      "penjelasan": "Kalau beberapa aturan CSS menargetkan elemen yang sama, browser memilih berdasarkan specificity: id (paling kuat) &gt; class/atribut &gt; tag (paling lemah). Aturan yang ditulis belakangan menang jika specificity-nya sama. <code>!important</code> memaksa satu aturan menang di atas semuanya, tapi sebaiknya dihindari kecuali terpaksa karena menyulitkan maintenance.",
      "contoh_kode": "<p id=\"teks\" class=\"biru\">Warna teks ini?</p>",
      "starter_code": {
        "html": "<p id=\"teks\" class=\"biru\">Warna teks ini?</p>",
        "css": "p {\n  color: black;\n}\n\n.biru {\n  color: blue;\n}\n\n#teks {\n  color: red;\n}",
        "js": ""
      },
      "tantangan": "Kalau ada warna badge/skill di portofoliomu yang tertimpa aturan CSS lain, perbaiki dengan menambah SATU aturan CSS baru yang specificity-nya sengaja dibuat lebih tinggi (gabungkan id/class), tanpa mengubah HTML."
    },
    {
      "id": "css-lanjutan-3",
      "judul": "calc() dan Fungsi CSS",
      "penjelasan": "<code>calc()</code> memungkinkan operasi matematika langsung di CSS, bisa mencampur satuan berbeda (misal <code>calc(100% - 50px)</code>). <code>min()</code> dan <code>max()</code> memilih nilai terkecil/terbesar dari beberapa opsi, dan <code>clamp(min, ideal, max)</code> membatasi nilai dalam rentang tertentu — sangat berguna untuk ukuran responsif.",
      "contoh_kode": "<div class=\"sidebar\">Sidebar</div>\n<div class=\"konten\">Konten mengisi sisa lebar</div>\n<p class=\"judul-responsif\">Judul Responsif</p>",
      "starter_code": {
        "html": "<div class=\"sidebar\">Sidebar</div>\n<div class=\"konten\">Konten mengisi sisa lebar</div>\n<p class=\"judul-responsif\">Judul Responsif</p>",
        "css": ".sidebar {\n  width: 150px;\n  background: #eef0ff;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.konten {\n  width: calc(100% - 170px);\n  background: #dcfce7;\n  display: inline-block;\n}\n\n.judul-responsif {\n  font-size: clamp(16px, 4vw, 32px);\n}",
        "js": ""
      },
      "tantangan": "Buat ukuran font <h1> (nama) di portofoliomu memakai clamp() supaya otomatis menyesuaikan dari layar HP sampai desktop."
    },
    {
      "id": "css-lanjutan-4",
      "judul": "Background & Gradient Lanjutan",
      "penjelasan": "<code>linear-gradient()</code> membuat gradasi warna sebagai background tanpa perlu gambar. Properti <code>background-size</code> dan <code>background-position</code> mengatur ukuran dan posisi gambar/gradient latar, dan <code>background-repeat: no-repeat</code> mencegah gambar berulang.",
      "contoh_kode": "<div class=\"banner\">Banner Gradient</div>",
      "starter_code": {
        "html": "<div class=\"banner\">Banner Gradient</div>",
        "css": ".banner {\n  height: 120px;\n  border-radius: 12px;\n  background: linear-gradient(135deg, #4f46e5, #f59e0b);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}",
        "js": ""
      },
      "tantangan": "Beri <header> portofoliomu background gradient (linear-gradient) sebagai sentuhan visual utama, ganti warna solid yang lama."
    },
    {
      "id": "css-lanjutan-5",
      "judul": "Flexbox Lanjutan",
      "penjelasan": "Selain justify-content dan align-items, flexbox punya: <code>flex-wrap</code> (item pindah baris kalau tidak muat), <code>flex-grow</code>/<code>flex-shrink</code>/<code>flex-basis</code> (mengatur bagaimana item membesar/mengecil), <code>align-content</code> (jarak antar baris saat wrap), dan <code>order</code> (mengubah urutan tampil tanpa mengubah HTML).",
      "contoh_kode": "<div class=\"container\">\n  <div class=\"item besar\">1 (besar)</div>\n  <div class=\"item\">2</div>\n  <div class=\"item pertama\">3 (order duluan)</div>\n</div>",
      "starter_code": {
        "html": "<div class=\"container\">\n  <div class=\"item besar\">1 (besar)</div>\n  <div class=\"item\">2</div>\n  <div class=\"item pertama\">3 (order duluan)</div>\n</div>",
        "css": ".container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.item {\n  background: #4f46e5;\n  color: white;\n  padding: 16px;\n  flex: 1;\n}\n\n.besar {\n  flex-grow: 2;\n}\n\n.pertama {\n  order: -1;\n}",
        "js": ""
      },
      "tantangan": "Terapkan flex-wrap pada daftar Keahlian portofoliomu supaya rapi di layar sempit, lalu pakai flex-grow pada satu skill yang ingin ditonjolkan."
    },
    {
      "id": "css-lanjutan-6",
      "judul": "Grid Lanjutan",
      "penjelasan": "<code>grid-template-areas</code> membuat layout dengan menamai area lalu menempatkan elemen ke nama itu lewat <code>grid-area</code> — sangat intuitif untuk layout halaman. <code>minmax(min, max)</code> dan <code>auto-fit</code>/<code>auto-fill</code> dipakai bersama <code>repeat()</code> untuk membuat grid yang otomatis menyesuaikan jumlah kolom sesuai lebar layar.",
      "contoh_kode": "<div class=\"layout\">\n  <div class=\"kepala\">Header</div>\n  <div class=\"sisi\">Sidebar</div>\n  <div class=\"isi\">Konten</div>\n  <div class=\"kaki\">Footer</div>\n</div>",
      "starter_code": {
        "html": "<div class=\"layout\">\n  <div class=\"kepala\">Header</div>\n  <div class=\"sisi\">Sidebar</div>\n  <div class=\"isi\">Konten</div>\n  <div class=\"kaki\">Footer</div>\n</div>",
        "css": ".layout {\n  display: grid;\n  grid-template-areas:\n    \"kepala kepala\"\n    \"sisi isi\"\n    \"kaki kaki\";\n  grid-template-columns: 120px 1fr;\n  gap: 8px;\n}\n\n.kepala { grid-area: kepala; background: #4f46e5; color: white; padding: 10px; }\n.sisi { grid-area: sisi; background: #eef0ff; padding: 10px; }\n.isi { grid-area: isi; background: #dcfce7; padding: 10px; }\n.kaki { grid-area: kaki; background: #ffe4e6; padding: 10px; }",
        "js": ""
      },
      "tantangan": "Tambahkan section baru <h2>Proyek Saya</h2> berisi 2-3 <div class=\"proyek-card\"> (isi placeholder judul+deskripsi dulu), lalu susun dengan CSS Grid: grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)). Kartu-kartu ini akan dibuat dinamis lewat JavaScript nanti."
    },
    {
      "id": "css-lanjutan-7",
      "judul": "Custom Font dengan @font-face",
      "penjelasan": "Secara default browser hanya punya font sistem terbatas. <code>@font-face</code> memungkinkan memuat font kustom dari file atau layanan seperti Google Fonts, lalu dipakai lewat <code>font-family</code> seperti biasa. Cara termudah untuk pemula: pakai <code>&lt;link&gt;</code> ke Google Fonts di <code>&lt;head&gt;</code>.",
      "contoh_kode": "<!-- Di head: -->\n<!-- <link href=\"https://fonts.googleapis.com/css2?family=Poppins&display=swap\" rel=\"stylesheet\"> -->\n\n<style>\n  .judul {\n    font-family: \"Poppins\", sans-serif;\n  }\n</style>\n<h2 class=\"judul\">Judul dengan Font Kustom</h2>",
      "starter_code": {
        "html": "<h2 class=\"judul\">Judul dengan Font Kustom</h2>\n<p>Di project nyata, font ini dimuat lewat &lt;link&gt; ke Google Fonts di bagian &lt;head&gt; sebelum dipakai di sini.</p>",
        "css": ".judul {\n  font-family: \"Poppins\", \"Segoe UI\", sans-serif;\n  font-size: 28px;\n}",
        "js": ""
      },
      "tantangan": "Ganti font-family judul (h1, h2) di portofoliomu memakai kombinasi font kustom + fallback, misalnya \"Poppins\", \"Segoe UI\", sans-serif."
    },
    {
      "id": "css-lanjutan-8",
      "judul": "Efek Teks Berjalan (Marquee) Lebih Rapi",
      "penjelasan": "Trik marquee dasar (<code>padding-left: 100%</code> + <code>translateX(-100%)</code>) punya kelemahan: ada jeda kosong panjang sebelum teks muncul lagi dari kanan, dan kecepatannya beda-beda tergantung panjang teks (karena durasi tetap tapi jarak tempuh berubah). Versi lebih rapi: duplikat teksnya jadi dua <span> berdampingan di dalam satu wadah <code>display: flex</code>, lalu animasikan seluruh wadah itu bergeser sejauh <strong>lebar satu salinan teks</strong> (gunakan <code>gap</code> untuk jarak antar salinan). Karena ada dua salinan identik, begitu salinan pertama habis bergeser keluar, salinan kedua persis menggantikan posisinya — terlihat menyambung tanpa jeda (looping mulus).",
      "contoh_kode": "<div class=\"marquee\">\n  <div class=\"marquee-track\">\n    <span>Teks berjalan tanpa jeda •&nbsp;</span>\n    <span>Teks berjalan tanpa jeda •&nbsp;</span>\n  </div>\n</div>",
      "starter_code": {
        "html": "<div class=\"marquee\">\n  <div class=\"marquee-track\">\n    <span>Teks berjalan tanpa jeda •&nbsp;</span>\n    <span>Teks berjalan tanpa jeda •&nbsp;</span>\n  </div>\n</div>",
        "css": ".marquee {\n  overflow: hidden;\n  border: 1px solid #ccc;\n  padding: 8px 0;\n}\n\n.marquee-track {\n  display: flex;\n  width: max-content;\n  animation: geser 6s linear infinite;\n}\n\n@keyframes geser {\n  from { transform: translateX(0); }\n  to { transform: translateX(-50%); }\n}",
        "js": ""
      },
      "tantangan": "Ganti teks berjalan \"TEKS INI SEDANG BERJALAN\" di Website Pertamamu memakai teknik dua-salinan ini (bukan padding-left: 100%) supaya animasinya menyambung mulus tanpa jeda kosong. Tambahkan juga aturan .marquee:hover .marquee-track { animation-play-state: paused; } supaya teks berhenti sesaat saat disentuh kursor."
    },
    {
      "id": "css-lanjutan-9",
      "judul": "Caption di Atas Gambar: Overlay yang Lebih Kuat",
      "penjelasan": "Teknik <code>position: absolute</code> + <code>transform: translate(-50%, -50%)</code> sudah cukup untuk menaruh SATU baris teks di tengah gambar. Untuk caption yang lebih panjang atau perlu tetap terbaca di atas gambar terang MAUPUN gelap, tambahkan lapisan gradient gelap transparan di antara gambar dan teks (<code>linear-gradient</code> dengan warna <code>rgba(0,0,0, ...)</code>), dan letakkan caption di salah satu sisi (misal <code>bottom</code>) memakai <code>width: 100%</code>, bukan cuma dikunci di tengah presisi.",
      "contoh_kode": "<div class=\"gambar-wadah\">\n  <img src=\"https://via.placeholder.com/300x180\" alt=\"Contoh\">\n  <div class=\"overlay-gradient\"></div>\n  <p class=\"caption\">Judul Foto di Sini</p>\n</div>",
      "starter_code": {
        "html": "<div class=\"gambar-wadah\">\n  <img src=\"https://via.placeholder.com/300x180\" alt=\"Contoh\">\n  <div class=\"overlay-gradient\"></div>\n  <p class=\"caption\">Judul Foto di Sini</p>\n</div>",
        "css": ".gambar-wadah {\n  position: relative;\n  display: inline-block;\n}\n\n.gambar-wadah img {\n  display: block;\n  max-width: 100%;\n}\n\n.overlay-gradient {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent 60%);\n}\n\n.caption {\n  position: absolute;\n  bottom: 12px;\n  left: 0;\n  width: 100%;\n  margin: 0;\n  text-align: center;\n  color: white;\n  font-weight: bold;\n}",
        "js": ""
      },
      "tantangan": "Perkuat caption \"INI TULISAN DI DALAM GAMBAR\" di box-2 Website Pertamamu: tambahkan lapisan .overlay-gradient di antara gambar dan teksnya, lalu pindahkan captionnya ke bagian bawah gambar (bottom + width: 100%) alih-alih dikunci pas di tengah — bandingkan mana yang menurutmu lebih enak dilihat."
    }
  ]
};
