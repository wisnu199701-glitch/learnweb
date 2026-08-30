window.LEARNWEB_LESSONS = window.LEARNWEB_LESSONS || {};
window.LEARNWEB_LESSONS["css-dasar"] = {
  "modul": "css-dasar",
  "judul": "CSS Dasar",
  "lessons": [
    {
      "id": "css-dasar-1",
      "judul": "Cara Menyisipkan CSS",
      "penjelasan": "Sebelumnya di modul HTML Dasar kamu sudah sempat coba sedikit CSS internal untuk font, warna, ukuran, dan background. Sekarang kita perdalam dari awal secara lebih formal. Ada 3 cara memakai CSS: inline (atribut <code>style</code> langsung di tag), internal (tag <code>&lt;style&gt;</code> di dalam <code>&lt;head&gt;</code>), dan external (file <code>.css</code> terpisah yang dihubungkan dengan <code>&lt;link&gt;</code>). Cara external paling disarankan karena memisahkan konten dan tampilan.",
      "contoh_kode": "<!-- Internal CSS -->\n<style>\n  p {\n    color: blue;\n  }\n</style>\n\n<p style=\"color: red;\">Ini pakai inline CSS</p>\n<p>Ini pakai internal CSS (warna biru)</p>",
      "starter_code": {
        "html": "<p style=\"color: red;\">Ini pakai inline CSS</p>\n<p>Ini pakai internal CSS</p>",
        "css": "p {\n  color: blue;\n}",
        "js": ""
      },
      "tantangan": "Tambahkan CSS internal yang mengatur font-family body ke sans-serif untuk seluruh halaman kodemu."
    },
    {
      "id": "css-dasar-2",
      "judul": "Selector Dasar",
      "penjelasan": "Selector menentukan elemen mana yang diberi style. Selector tag menargetkan semua elemen dengan nama itu (contoh: <code>p</code>), selector class dengan titik (<code>.judul</code>) menargetkan elemen berclass sama, dan selector id dengan pagar (<code>#header</code>) menargetkan satu elemen unik.",
      "contoh_kode": "<h1 id=\"judul-utama\">Judul</h1>\n<p class=\"catatan\">Catatan pertama</p>\n<p class=\"catatan\">Catatan kedua</p>",
      "starter_code": {
        "html": "<h1 id=\"judul-utama\">Judul</h1>\n<p class=\"catatan\">Catatan pertama</p>\n<p class=\"catatan\">Catatan kedua</p>",
        "css": "#judul-utama {\n  color: darkblue;\n}\n\n.catatan {\n  color: gray;\n  font-style: italic;\n}",
        "js": ""
      },
      "tantangan": "Buat satu elemen ber-id dan dua elemen ber-class sama, lalu beri warna berbeda untuk masing-masing lewat selector id dan class."
    },
    {
      "id": "css-dasar-3",
      "judul": "Warna dan Background",
      "penjelasan": "Warna teks diatur dengan properti <code>color</code>, dan warna latar dengan <code>background-color</code>. Warna bisa ditulis dengan nama (<code>red</code>), kode hex (<code>#ff0000</code>), atau <code>rgb(255,0,0)</code>.",
      "contoh_kode": "<div class=\"kotak\">Kotak Berwarna</div>",
      "starter_code": {
        "html": "<div class=\"kotak\">Kotak Berwarna</div>",
        "css": ".kotak {\n  background-color: #4f46e5;\n  color: white;\n  padding: 20px;\n  text-align: center;\n}",
        "js": ""
      },
      "tantangan": "Buat sebuah <div>, beri background-color dan color yang kontras supaya tetap mudah dibaca."
    },
    {
      "id": "css-dasar-4",
      "judul": "Box Model",
      "penjelasan": "Setiap elemen HTML adalah kotak yang terdiri dari <code>content</code> (isi), <code>padding</code> (jarak dalam ke isi), <code>border</code> (garis tepi), dan <code>margin</code> (jarak luar ke elemen lain). Memahami box model kunci untuk mengatur layout.",
      "contoh_kode": "<div class=\"box\">Konten di dalam box</div>",
      "starter_code": {
        "html": "<div class=\"box\">Konten di dalam box</div>",
        "css": ".box {\n  padding: 16px;\n  border: 3px solid #4f46e5;\n  margin: 20px;\n  background-color: #eef0ff;\n}",
        "js": ""
      },
      "tantangan": "Buat sebuah <div>, beri padding, border, dan margin supaya terlihat seperti kotak dengan jarak yang rapi dari elemen di sekitarnya."
    },
    {
      "id": "css-dasar-5",
      "judul": "Flexbox Dasar",
      "penjelasan": "Flexbox memudahkan menyusun elemen berjajar atau bertumpuk secara fleksibel. Set <code>display: flex</code> pada elemen induk, lalu atur <code>justify-content</code> (arah horizontal) dan <code>align-items</code> (arah vertikal) untuk anak-anaknya.",
      "contoh_kode": "<div class=\"container\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n</div>",
      "starter_code": {
        "html": "<div class=\"container\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n</div>",
        "css": ".container {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n\n.item {\n  background: #4f46e5;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n}",
        "js": ""
      },
      "tantangan": "Buat 3 <div> sejajar berdampingan memakai display: flex, beri gap supaya ada jarak antar elemen."
    },
    {
      "id": "css-dasar-6",
      "judul": "Responsive dengan Media Query",
      "penjelasan": "Media query membuat tampilan menyesuaikan ukuran layar. Contoh <code>@media (max-width: 600px) { ... }</code> hanya berlaku saat lebar layar 600px atau kurang, cocok untuk tampilan HP.",
      "contoh_kode": "<div class=\"card\">Kartu Responsif</div>",
      "starter_code": {
        "html": "<div class=\"card\">Kartu Responsif</div>",
        "css": ".card {\n  background: #eef0ff;\n  padding: 40px;\n  text-align: center;\n  font-size: 20px;\n}\n\n@media (max-width: 600px) {\n  .card {\n    background: #ffe4e6;\n    font-size: 14px;\n  }\n}",
        "js": ""
      },
      "tantangan": "Buat sebuah elemen yang tampilannya (warna atau ukuran font) berubah lewat media query saat lebar layar di bawah 600px — coba persempit jendela preview untuk melihat efeknya."
    },
    {
      "id": "css-dasar-7",
      "judul": "Unit Ukuran di CSS",
      "penjelasan": "CSS punya beberapa satuan ukuran: <code>px</code> (piksel tetap), <code>%</code> (persentase dari induk), <code>em</code> (relatif terhadap font-size elemen itu sendiri), <code>rem</code> (relatif terhadap font-size root/html — paling aman dipakai), serta <code>vw</code>/<code>vh</code> (persentase dari lebar/tinggi layar).",
      "contoh_kode": "<div class=\"a\">px tetap 200</div>\n<div class=\"b\">50% dari induk</div>\n<div class=\"c\">2rem padding</div>",
      "starter_code": {
        "html": "<div class=\"a\">Lebar 200px</div>\n<div class=\"b\">Lebar 50%</div>\n<div class=\"c\">Padding 2rem</div>",
        "css": ".a {\n  width: 200px;\n  background: #eef0ff;\n}\n\n.b {\n  width: 50%;\n  background: #dcfce7;\n}\n\n.c {\n  padding: 2rem;\n  background: #ffe4e6;\n}",
        "js": ""
      },
      "tantangan": "Coba ubah satu ukuran (lebar atau padding) dari px ke rem atau %, lalu amati bedanya dibanding versi px."
    },
    {
      "id": "css-dasar-8",
      "judul": "Styling Teks",
      "penjelasan": "Properti umum untuk teks: <code>font-family</code> (jenis huruf), <code>font-size</code> (ukuran), <code>font-weight</code> (ketebalan), <code>text-align</code> (rata kiri/tengah/kanan), <code>line-height</code> (jarak antar baris), dan <code>text-decoration</code> (garis bawah/coret).",
      "contoh_kode": "<h2 class=\"judul\">Judul Artikel</h2>\n<p class=\"isi\">Paragraf ini punya line-height lebih lega supaya nyaman dibaca.</p>",
      "starter_code": {
        "html": "<h2 class=\"judul\">Judul Artikel</h2>\n<p class=\"isi\">Paragraf ini punya line-height lebih lega supaya nyaman dibaca.</p>",
        "css": ".judul {\n  font-family: Georgia, serif;\n  text-align: center;\n  text-decoration: underline;\n}\n\n.isi {\n  font-family: Arial, sans-serif;\n  font-size: 16px;\n  line-height: 1.8;\n}",
        "js": ""
      },
      "tantangan": "Buat satu paragraf agak panjang, atur line-height dan text-align supaya nyaman dibaca."
    },
    {
      "id": "css-dasar-9",
      "judul": "Tata Letak & Perataan (Alignment)",
      "penjelasan": "Perataan konten diatur lewat <code>text-align</code> pada elemen INDUK (pembungkus), nilainya <code>left</code> (kiri, default), <code>center</code> (tengah), <code>right</code> (kanan), atau <code>justify</code> (rata kiri-kanan sekaligus, seperti kolom koran). Yang sering bikin bingung: <code>text-align: center</code> juga bisa menengahkan GAMBAR, karena <code>&lt;img&gt;</code> secara default berperilaku seperti teks (inline) — jadi ikut mengikuti perataan elemen induknya. Cara lain menengahkan gambar TANPA bergantung pada induk: ubah gambar jadi <code>display: block;</code> lalu beri <code>margin: 0 auto;</code> (margin atas-bawah 0, kiri-kanan otomatis membagi rata sisa ruang).",
      "contoh_kode": "<div class=\"wadah\">\n  <p>Teks ini rata tengah</p>\n  <img src=\"https://via.placeholder.com/100\" alt=\"Gambar ikut rata tengah karena induknya text-align: center\">\n</div>\n\n<img src=\"https://via.placeholder.com/100\" alt=\"Gambar mandiri, ditengahkan sendiri\" class=\"gambar-mandiri\">",
      "starter_code": {
        "html": "<div class=\"wadah\">\n  <p>Teks ini rata tengah</p>\n  <img src=\"https://via.placeholder.com/100\" alt=\"Gambar ikut rata tengah\">\n</div>\n\n<img src=\"https://via.placeholder.com/100\" alt=\"Gambar mandiri\" class=\"gambar-mandiri\">",
        "css": ".wadah {\n  text-align: center;\n}\n\n.gambar-mandiri {\n  display: block;\n  margin: 0 auto;\n}",
        "js": ""
      },
      "tantangan": "Coba dua cara menengahkan gambar: pertama bungkus <img> dengan <div> ber-text-align: center, kedua pakai display: block; margin: 0 auto; langsung pada <img>-nya. Bandingkan hasilnya."
    },
    {
      "id": "css-dasar-10",
      "judul": "Border Radius & Box Shadow",
      "penjelasan": "<code>border-radius</code> membuat sudut elemen melengkung (nilai besar seperti 50% membuat lingkaran penuh pada elemen persegi). <code>box-shadow</code> menambahkan efek bayangan di belakang elemen, formatnya <code>box-shadow: offset-x offset-y blur warna;</code>.",
      "contoh_kode": "<div class=\"kartu\">Kartu dengan Bayangan</div>\n<div class=\"lingkaran\"></div>",
      "starter_code": {
        "html": "<div class=\"kartu\">Kartu dengan Bayangan</div>\n<div class=\"lingkaran\"></div>",
        "css": ".kartu {\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 4px 10px rgba(0,0,0,0.2);\n  background: white;\n  margin-bottom: 16px;\n}\n\n.lingkaran {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: #4f46e5;\n}",
        "js": ""
      },
      "tantangan": "Buat sebuah kartu (<div>) dengan border-radius dan box-shadow, lalu buat satu elemen lain jadi lingkaran sempurna dengan border-radius: 50%."
    },
    {
      "id": "css-dasar-11",
      "judul": "Display Property",
      "penjelasan": "Properti <code>display</code> menentukan bagaimana elemen ditampilkan: <code>block</code> (selalu baris baru, seperti div), <code>inline</code> (mengikuti alur teks, tidak bisa diatur width/height), <code>inline-block</code> (mengikuti alur teks tapi bisa diatur width/height), dan <code>none</code> (elemen disembunyikan total, tidak memakan ruang).",
      "contoh_kode": "<span class=\"tag inline\">Inline</span>\n<span class=\"tag inline-block\">Inline-Block</span>\n<div class=\"tag block\">Block</div>\n<p class=\"sembunyi\">Ini disembunyikan (display: none)</p>",
      "starter_code": {
        "html": "<span class=\"tag inline\">Inline</span>\n<span class=\"tag inline-block\">Inline-Block</span>\n<div class=\"tag block\">Block</div>\n<p class=\"sembunyi\">Ini disembunyikan (display: none)</p>",
        "css": ".tag {\n  background: #4f46e5;\n  color: white;\n  padding: 8px;\n  margin: 4px;\n}\n\n.inline {\n  display: inline;\n}\n\n.inline-block {\n  display: inline-block;\n  width: 120px;\n}\n\n.block {\n  display: block;\n}\n\n.sembunyi {\n  display: none;\n}",
        "js": ""
      },
      "tantangan": "Buat beberapa <span> dan beri display: inline-block supaya bisa diatur width/height-nya tanpa memutus baris seperti <div>."
    },
    {
      "id": "css-dasar-12",
      "judul": "Positioning",
      "penjelasan": "Properti <code>position</code> mengatur cara elemen diposisikan: <code>static</code> (default, mengikuti alur normal), <code>relative</code> (bergeser dari posisi normalnya sendiri), <code>absolute</code> (keluar dari alur, mengikuti induk terdekat yang punya position selain static), <code>fixed</code> (menempel di layar, tidak ikut scroll), dan <code>sticky</code> (menempel setelah scroll melewati titik tertentu).",
      "contoh_kode": "<div class=\"induk\">\n  <div class=\"badge\">Baru!</div>\n  <p>Produk Spesial</p>\n</div>",
      "starter_code": {
        "html": "<div class=\"induk\">\n  <div class=\"badge\">Baru!</div>\n  <p>Produk Spesial</p>\n</div>",
        "css": ".induk {\n  position: relative;\n  width: 200px;\n  padding: 20px;\n  background: #eef0ff;\n}\n\n.badge {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: red;\n  color: white;\n  padding: 2px 8px;\n  border-radius: 6px;\n  font-size: 12px;\n}",
        "js": ""
      },
      "tantangan": "Buat sebuah <div> dengan position: relative, lalu taruh elemen kecil di dalamnya dengan position: absolute di salah satu sudutnya (seperti label \"Baru!\" pada produk)."
    },
    {
      "id": "css-dasar-13",
      "judul": "CSS Grid Dasar",
      "penjelasan": "Grid cocok untuk layout 2 dimensi (baris dan kolom sekaligus). Set <code>display: grid</code> pada induk, lalu <code>grid-template-columns</code> menentukan jumlah dan lebar kolom (misalnya <code>repeat(3, 1fr)</code> untuk 3 kolom sama lebar), dan <code>gap</code> mengatur jarak antar sel.",
      "contoh_kode": "<div class=\"grid\">\n  <div class=\"sel\">1</div>\n  <div class=\"sel\">2</div>\n  <div class=\"sel\">3</div>\n  <div class=\"sel\">4</div>\n</div>",
      "starter_code": {
        "html": "<div class=\"grid\">\n  <div class=\"sel\">1</div>\n  <div class=\"sel\">2</div>\n  <div class=\"sel\">3</div>\n  <div class=\"sel\">4</div>\n</div>",
        "css": ".grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n\n.sel {\n  background: #4f46e5;\n  color: white;\n  padding: 20px;\n  text-align: center;\n  border-radius: 8px;\n}",
        "js": ""
      },
      "tantangan": "Buat 4 <div> disusun dalam 2 kolom memakai display: grid dan grid-template-columns: repeat(2, 1fr)."
    },
    {
      "id": "css-dasar-14",
      "judul": "Pseudo-class & Pseudo-element",
      "penjelasan": "Pseudo-class menargetkan elemen berdasarkan keadaan tertentu, contoh <code>:hover</code> (saat kursor di atasnya) dan <code>:first-child</code> (elemen pertama dari induknya). Pseudo-element menargetkan bagian tertentu dari elemen, contoh <code>::before</code> dan <code>::after</code> untuk menyisipkan konten tambahan lewat CSS.",
      "contoh_kode": "<button class=\"tombol\">Hover Aku</button>\n<ul>\n  <li>Item Pertama</li>\n  <li>Item Kedua</li>\n</ul>",
      "starter_code": {
        "html": "<button class=\"tombol\">Hover Aku</button>\n<ul>\n  <li>Item Pertama</li>\n  <li>Item Kedua</li>\n</ul>",
        "css": ".tombol {\n  padding: 10px 20px;\n  background: #4f46e5;\n  color: white;\n  border: none;\n  border-radius: 6px;\n}\n\n.tombol:hover {\n  background: #4338ca;\n}\n\nli:first-child {\n  font-weight: bold;\n}\n\nli::before {\n  content: \"👉 \";\n}",
        "js": ""
      },
      "tantangan": "Tambahkan efek :hover pada sebuah tombol (misal ganti background), dan ::before berisi ikon kecil (misal \"✓ \") pada salah satu <li>."
    },
    {
      "id": "css-dasar-15",
      "judul": "Transition & Animation Dasar",
      "penjelasan": "<code>transition</code> membuat perubahan properti (misal warna atau ukuran) berlangsung mulus dalam durasi tertentu, biasanya dipasang bersama <code>:hover</code>. Untuk animasi yang lebih kompleks dan berulang, gunakan <code>@keyframes</code> lalu panggil lewat properti <code>animation</code>.",
      "contoh_kode": "<div class=\"box-transisi\">Hover Aku</div>\n<div class=\"box-animasi\"></div>",
      "starter_code": {
        "html": "<div class=\"box-transisi\">Hover Aku</div>\n<div class=\"box-animasi\"></div>",
        "css": ".box-transisi {\n  width: 100px;\n  padding: 10px;\n  background: #4f46e5;\n  color: white;\n  text-align: center;\n  transition: transform 0.3s ease;\n}\n\n.box-transisi:hover {\n  transform: scale(1.2);\n}\n\n.box-animasi {\n  width: 40px;\n  height: 40px;\n  background: #f59e0b;\n  border-radius: 50%;\n  margin-top: 16px;\n  animation: pantul 1s infinite alternate;\n}\n\n@keyframes pantul {\n  from { transform: translateY(0); }\n  to { transform: translateY(30px); }\n}",
        "js": ""
      },
      "tantangan": "Buat sebuah elemen yang membesar halus saat di-hover (transition + transform: scale), dan satu elemen lain yang bergerak naik-turun terus-menerus (animation + @keyframes)."
    },
    {
      "id": "css-dasar-16",
      "judul": "CSS Variables (Custom Properties)",
      "penjelasan": "CSS Variables menyimpan nilai yang bisa dipakai ulang di banyak tempat, didefinisikan dengan awalan dua tanda hubung di dalam <code>:root</code> (misalnya <code>--warna-utama</code>), dan dipanggil dengan <code>var(--warna-utama)</code>. Berguna supaya ganti satu warna tema cukup di satu tempat saja.",
      "contoh_kode": ":root {\n  --warna-utama: #4f46e5;\n  --radius: 8px;\n}\n\n.tombol {\n  background: var(--warna-utama);\n  border-radius: var(--radius);\n}\n\n.judul {\n  color: var(--warna-utama);\n}",
      "starter_code": {
        "html": "<h2 class=\"judul\">Judul Bertema</h2>\n<button class=\"tombol\">Tombol Bertema</button>",
        "css": ":root {\n  --warna-utama: #4f46e5;\n  --radius: 8px;\n}\n\n.judul {\n  color: var(--warna-utama);\n}\n\n.tombol {\n  background: var(--warna-utama);\n  color: white;\n  border: none;\n  padding: 10px 16px;\n  border-radius: var(--radius);\n}",
        "js": ""
      },
      "tantangan": "Buat 2-3 CSS variable di :root (misal --warna-utama), lalu pakai var(...) di beberapa elemen berbeda — coba ganti nilainya di :root dan lihat semua elemen ikut berubah."
    },
    {
      "id": "css-dasar-tugas-1",
      "judul": "Tugas: Percantik Box & Gambar di Website Pertamamu",
      "penjelasan": "Sekarang kembali ke halaman \"Website Pertama\" yang kamu susun strukturnya di modul HTML Dasar. Pakai semua teknik CSS Dasar yang baru dipelajari untuk membuat box-1 dan box-2 benar-benar terlihat seperti kotak, dan menaruh teks di atas gambar.",
      "contoh_kode": ".box-1, .box-2 {\n  border: 2px solid #4f46e5;\n  border-radius: 12px;\n  padding: 16px;\n  margin: 16px auto;\n  max-width: 320px;\n  background: #eef0ff;\n  box-shadow: 0 4px 10px rgba(0,0,0,0.15);\n  text-align: center;\n}\n\n.gambar-wadah {\n  position: relative;\n  display: inline-block;\n}\n\n.gambar-wadah img {\n  display: block;\n  border-radius: 6px;\n  max-width: 100%;\n}\n\n.teks-di-gambar {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: 0;\n  color: white;\n  font-weight: bold;\n  text-shadow: 1px 1px 3px black;\n}",
      "starter_code": {
        "html": "",
        "css": "",
        "js": ""
      },
      "tantangan": "Di CSS Website Pertamamu: (1) beri .box-1, .box-2 padding, border, border-radius, dan box-shadow supaya jadi kotak yang rapi; (2) di box-2, bungkus <img> dan teks \"INI TULISAN DI DALAM GAMBAR\" dengan <div class=\"gambar-wadah\"> ber-position: relative, lalu buat teksnya position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); dengan color: white; dan text-shadow supaya terbaca jelas di atas gambar."
    },
    {
      "id": "css-dasar-tugas-2",
      "judul": "Tugas: Tombol, Teks Berjalan & Variabel Warna",
      "penjelasan": "Langkah terakhir modul CSS Dasar: ubah tombol \"TEKAN UNTUK PERGI KE GOOGLE\" jadi tombol sungguhan, buat \"TEKS INI SEDANG BERJALAN\" beneran bergerak seperti marquee, lalu rapikan semua warna yang kamu pakai jadi CSS variables.",
      "contoh_kode": ".tombol-link {\n  display: inline-block;\n  margin: 12px 0;\n  padding: 10px 20px;\n  background: var(--warna-utama);\n  color: white;\n  text-decoration: none;\n  border-radius: 6px;\n}\n\n.tombol-link:hover {\n  background: #4338ca;\n}\n\n.teks-berjalan-wadah {\n  overflow: hidden;\n  white-space: nowrap;\n  border: 1px solid #ccc;\n  padding: 8px 0;\n  max-width: 500px;\n  margin: 16px auto;\n}\n\n.teks-berjalan {\n  display: inline-block;\n  padding-left: 100%;\n  margin: 0;\n  animation: geser 8s linear infinite;\n}\n\n@keyframes geser {\n  from { transform: translateX(0); }\n  to { transform: translateX(-100%); }\n}",
      "starter_code": {
        "html": "",
        "css": "",
        "js": ""
      },
      "tantangan": "(1) Beri class pada tombol Google-mu, ubah jadi display: inline-block dengan padding, background-color, warna teks putih, text-decoration: none, dan efek :hover; (2) bungkus \"TEKS INI SEDANG BERJALAN\" dengan <div class=\"teks-berjalan-wadah\">, beri overflow: hidden; white-space: nowrap; pada wadahnya dan animation+@keyframes translateX pada teksnya supaya bergerak dari kanan ke kiri terus-menerus; (3) pindahkan warna-warna utama (border box, background tombol) ke CSS variables di :root, ganti semua penggunaannya dengan var(...)."
    }
  ]
};
