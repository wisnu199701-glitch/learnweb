window.LEARNWEB_LESSONS = window.LEARNWEB_LESSONS || {};
window.LEARNWEB_LESSONS["css-dasar"] = {
  "modul": "css-dasar",
  "judul": "CSS Dasar",
  "lessons": [
    {
      "id": "css-dasar-1",
      "judul": "Box Model: Kotak Beneran",
      "penjelasan": "Lanjutan dari modul HTML Dasar: box-1 dan box-2 sekarang baru berupa <div> polos, belum terlihat seperti kotak, dan karena <div> itu elemen block, keduanya otomatis bertumpuk ke bawah (box-2 di bawah box-1). Setiap elemen HTML sebenarnya adalah kotak yang terdiri dari <code>content</code> (isi), <code>padding</code> (jarak dalam ke isi), <code>border</code> (garis tepi), dan <code>margin</code> (jarak luar ke elemen lain) — gabungan ketiganya disebut <strong>Box Model</strong>. Beri properti ini pada class <code>.box</code> supaya box-1 dan box-2 sekaligus jadi kotak yang rapi.<br><br>Supaya keduanya duduk BERDAMPINGAN (bukan bertumpuk), pakai lagi trik <code>display: inline-block;</code> yang sudah kamu kenal dari lesson Mempercantik Judul — karena box-1 dan box-2 ditulis berurutan tanpa elemen lain di antaranya, mengubah <code>.box</code> jadi inline-block otomatis membuat keduanya sejajar seperti dua kata dalam satu kalimat. Tambahkan <code>vertical-align: top;</code> supaya bagian atas keduanya rata, dan <code>body { text-align: center; }</code> supaya pasangan box ini rata tengah halaman.",
      "contoh_kode": "<style>\n  body {\n    text-align: center;\n  }\n\n  .box {\n    display: inline-block;\n    vertical-align: top;\n    border: 2px solid #4f46e5;\n    border-radius: 12px;\n    padding: 16px;\n    margin: 16px 8px;\n    max-width: 260px;\n    background-color: #eef0ff;\n    text-align: center;\n  }\n</style>",
      "starter_code": {
        "html": "",
        "css": "",
        "js": ""
      },
      "tantangan": "Di CSS Website Pertamamu: (1) buat aturan body { text-align: center; }; (2) buat aturan .box { } yang menarget box-1 DAN box-2 sekaligus (keduanya sama-sama punya class \"box\"), isi dengan display: inline-block;, vertical-align: top;, border, border-radius, padding, margin (misal 16px 8px supaya ada jarak antar box), max-width, dan background-color. Hasilnya: \"TEKS BOX 1\" dan \"TEKS BOX 2\" jadi dua kotak yang duduk BERDAMPINGAN, bukan bertumpuk ke bawah."
    },
    {
      "id": "css-dasar-2",
      "judul": "Teks di Atas Gambar",
      "penjelasan": "Sekarang tambahkan \"INI TULISAN DI DALAM GAMBAR\" menumpang di atas gambar pada box-2. Properti <code>position</code> mengatur cara elemen diposisikan: <code>relative</code> (jadi acuan/patokan untuk anak di dalamnya) dan <code>absolute</code> (keluar dari alur normal, mengikuti induk terdekat yang ber-<code>position: relative</code>). Trik <code>transform: translate(-50%, -50%)</code> dipakai bersama <code>top: 50%; left: 50%;</code> untuk menempatkan elemen PERSIS di tengah induknya, berapa pun ukurannya.",
      "contoh_kode": "<div class=\"gambar-wadah\">\n  <img src=\"https://via.placeholder.com/280x160\" alt=\"Contoh\">\n  <p class=\"teks-di-gambar\">INI TULISAN DI DALAM GAMBAR</p>\n</div>\n\n<style>\n  .gambar-wadah {\n    position: relative;\n    display: inline-block;\n  }\n  .gambar-wadah img {\n    display: block;\n    border-radius: 6px;\n    max-width: 100%;\n  }\n  .teks-di-gambar {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    margin: 0;\n    color: white;\n    font-weight: bold;\n    text-shadow: 1px 1px 3px black;\n  }\n</style>",
      "starter_code": {
        "html": "",
        "css": "",
        "js": ""
      },
      "tantangan": "Di box-2, bungkus <img> DAN teks \"INI TULISAN DI DALAM GAMBAR\" dengan <div class=\"gambar-wadah\">. Beri .gambar-wadah position: relative. Beri teksnya class \"teks-di-gambar\" dengan position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; text-shadow: 1px 1px 3px black; supaya terbaca jelas di atas gambar."
    },
    {
      "id": "css-dasar-3",
      "judul": "Tombol Ala Website",
      "penjelasan": "Tombol \"TEKAN UNTUK PERGI KE GOOGLE\" masih berupa teks polos. Karena <code>&lt;a&gt;</code> aslinya elemen <em>inline</em> (tidak bisa diberi padding atas-bawah dengan baik), ubah jadi <code>display: inline-block;</code> supaya bisa diberi <code>padding</code> seperti tombol sungguhan. Tambahkan juga <code>background-color</code>, <code>color</code> putih, <code>border-radius</code>, dan <code>text-decoration: none;</code> untuk menghilangkan garis bawah bawaan link.",
      "contoh_kode": "<style>\n  .tombol-link {\n    display: inline-block;\n    padding: 10px 20px;\n    background-color: #4f46e5;\n    color: white;\n    text-decoration: none;\n    border-radius: 6px;\n  }\n  .tombol-link:hover {\n    background-color: #4338ca;\n  }\n</style>\n\n<a class=\"tombol-link\" href=\"https://www.google.com\" target=\"_blank\">TEKAN UNTUK PERGI KE GOOGLE</a>",
      "starter_code": {
        "html": "",
        "css": "",
        "js": ""
      },
      "tantangan": "Beri class \"tombol-link\" pada <a> Google-mu, lalu buat aturan CSS-nya: display: inline-block, padding, background-color, color: white, border-radius, dan text-decoration: none. Sebagai bonus, tambahkan .tombol-link:hover supaya warnanya berubah saat disentuh kursor."
    },
    {
      "id": "css-dasar-4",
      "judul": "Teks Berjalan (Marquee)",
      "penjelasan": "Terakhir, buat \"TEKS INI SEDANG BERJALAN\" beneran BERJALAN seperti marquee jadul. Caranya: bungkus teksnya dengan sebuah wadah ber-<code>overflow: hidden;</code> (memotong apa pun yang keluar dari kotaknya) dan <code>white-space: nowrap;</code> (teks tidak boleh pindah baris). Teksnya sendiri diberi <code>display: inline-block; padding-left: 100%;</code> (mulai dari luar kanan) dan <code>animation</code> yang memanggil <code>@keyframes</code> untuk menggeser posisinya dari <code>translateX(0)</code> ke <code>translateX(-100%)</code> terus-menerus.",
      "contoh_kode": "<div class=\"teks-berjalan-wadah\">\n  <p class=\"teks-berjalan\">TEKS INI SEDANG BERJALAN</p>\n</div>\n\n<style>\n  .teks-berjalan-wadah {\n    overflow: hidden;\n    white-space: nowrap;\n    border: 1px solid #ccc;\n    padding: 8px 0;\n  }\n  .teks-berjalan {\n    display: inline-block;\n    padding-left: 100%;\n    margin: 0;\n    animation: geser 8s linear infinite;\n  }\n  @keyframes geser {\n    from { transform: translateX(0); }\n    to { transform: translateX(-100%); }\n  }\n</style>",
      "starter_code": {
        "html": "",
        "css": "",
        "js": ""
      },
      "tantangan": "Di bawah tombol Google, tambahkan <div class=\"teks-berjalan-wadah\"><p class=\"teks-berjalan\">TEKS INI SEDANG BERJALAN</p></div>. Beri wadahnya overflow: hidden; white-space: nowrap;. Beri teksnya display: inline-block; padding-left: 100%; dan animation: geser 8s linear infinite;, lalu buat @keyframes geser dari transform: translateX(0); ke transform: translateX(-100%);"
    },
    {
      "id": "css-dasar-5",
      "judul": "Website Pertamamu Selesai!",
      "penjelasan": "Selamat! Kalau kamu mengikuti semua lesson dari HTML Dasar sampai di sini, halamanmu sekarang seharusnya sudah persis seperti rencana Website Pertama: judul dengan font unik, dua kotak berdampingan (list & gambar dengan teks di atasnya), paragraf, tombol Google, teks berjalan, dan tabel nilai. Bandingkan kodemu dengan contoh lengkap di bawah ini, perbaiki kalau ada bagian yang beda, lalu klik tombol \"Simpan sebagai File\" di playground untuk mengunduh hasil akhirnya.",
      "contoh_kode": "<h1>HALLO NAMA SAYA WISNU</h1>\n<h2>INI ADALAH WEBSITE PERTAMA SAYA</h2>\n<p class=\"font-unik\">INI FONT ALGERIAN</p>\n\n<div class=\"box box-1\">\n  <p><strong>TEKS BOX 1</strong></p>\n  <p>Kita buat list :</p>\n  <ul>\n    <li>AN-NASS</li>\n    <li>AL-FALAQ</li>\n    <li>AL-IKHLAS</li>\n  </ul>\n</div>\n\n<div class=\"box box-2\">\n  <p><strong>TEKS BOX 2</strong></p>\n  <p>Gambar di dalam box</p>\n  <div class=\"gambar-wadah\">\n    <img src=\"https://via.placeholder.com/280x160\" alt=\"Contoh gambar\">\n    <p class=\"teks-di-gambar\">INI TULISAN DI DALAM GAMBAR</p>\n  </div>\n</div>\n\n<p>Kami adalah siswa dan siswi MIMU yang sedang belajar CODING HTML/CSS/JS untuk membuat website dan app web.</p>\n\n<a class=\"tombol-link\" href=\"https://www.google.com\" target=\"_blank\" rel=\"noopener\">TEKAN UNTUK PERGI KE GOOGLE</a>\n\n<div class=\"teks-berjalan-wadah\">\n  <p class=\"teks-berjalan\">TEKS INI SEDANG BERJALAN</p>\n</div>\n\n<table border=\"1\">\n  <tr><th>NO</th><th>NAMA</th><th>KELAS</th><th>NILAI</th></tr>\n  <tr><td>1</td><td>ALIF</td><td>1A</td><td>75</td></tr>\n  <tr><td>2</td><td>NURMAN</td><td>1B</td><td>85</td></tr>\n  <tr><td>3</td><td>ABDUL</td><td>1C</td><td>95</td></tr>\n</table>",
      "starter_code": {
        "html": "",
        "css": "",
        "js": ""
      },
      "tantangan": "Bandingkan hasil akhir kodemu dengan contoh lengkap di atas, urutan bagiannya sama persis: judul & font unik, box-1 (list), box-2 (gambar+teks di atasnya), paragraf, tombol Google, teks berjalan, lalu tabel. Rapikan kalau ada yang beda, lalu unduh hasilnya lewat tombol \"Simpan sebagai File\"."
    }
  ]
};
