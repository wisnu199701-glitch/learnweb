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
      "tantangan": "Mulai styling portofoliomu: tambahkan CSS internal yang mengatur font-family body ke sans-serif untuk seluruh halaman."
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
      "tantangan": "Styling judul portofoliomu: beri warna berbeda untuk h1 (nama) lewat selector tag, dan warna lain untuk h2 (judul tiap section) juga lewat selector tag."
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
      "tantangan": "Beri background-color pada <header> portofoliomu (bagian nama+tagline) dan pastikan warna tekstnya tetap kontras dan mudah dibaca."
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
      "tantangan": "Beri padding, margin, dan border pada tiap .section di portofoliomu supaya tiap bagian terlihat seperti kartu yang terpisah rapi."
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
      "tantangan": "Susun foto profil dan bagian nama/tagline di header portofoliomu agar sejajar berdampingan memakai display: flex."
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
      "tantangan": "Tambahkan media query supaya susunan flex foto+nama di header portofoliomu berubah jadi tumpuk vertikal saat layar sempit (max-width: 600px)."
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
      "tantangan": "Ganti beberapa ukuran font atau padding di portofoliomu dari px ke rem, supaya ukurannya lebih konsisten di seluruh halaman."
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
      "tantangan": "Atur line-height dan text-align pada paragraf bio di bagian Tentang Saya supaya nyaman dibaca."
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
      "tantangan": "Bungkus foto profil di portofoliomu dengan sebuah <div> baru, beri class lalu text-align: center supaya foto ikut rata tengah. Setelah itu coba cara kedua: hapus wadahnya, dan pakai display: block; margin: 0 auto; langsung pada tag <img>-nya untuk hasil yang sama tanpa perlu pembungkus."
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
      "tantangan": "Buat foto profil di portofoliomu jadi bulat sempurna (border-radius: 50%), lalu tambahkan box-shadow pada tiap .section supaya terlihat lebih menonjol."
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
      "tantangan": "Ubah tampilan daftar Keahlian di portofoliomu jadi \"chip/badge\": beri tiap <li> display: inline-block dengan background warna dan border-radius."
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
      "tantangan": "Buat <header> portofoliomu position: sticky di bagian atas supaya tetap terlihat saat halaman di-scroll ke bawah."
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
      "tantangan": "Ubah layout daftar Keahlian di portofoliomu jadi grid 2-3 kolom memakai display: grid dan grid-template-columns."
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
      "tantangan": "Tambahkan efek :hover pada link kontak/sosial media di portofoliomu, dan ::before berupa ikon kecil (misal \"✓ \") di tiap item daftar Keahlian."
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
      "tantangan": "Beri transition halus pada tombol kirim di form Kontak portofoliomu (efek :hover), dan tambahkan animasi fade-in ringan pada header saat halaman pertama kali dimuat."
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
      "tantangan": "Pindahkan warna-warna utama portofoliomu ke CSS variables di :root (misal --warna-utama, --warna-bg), lalu ganti semua penggunaan warna langsung dengan var(...) — ini akan memudahkan bikin dark mode nanti di lesson JavaScript."
    }
  ]
};
