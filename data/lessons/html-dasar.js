window.LEARNWEB_LESSONS = window.LEARNWEB_LESSONS || {};
window.LEARNWEB_LESSONS["html-dasar"] = {
  "modul": "html-dasar",
  "judul": "HTML Dasar",
  "lessons": [
    {
      "id": "html-dasar-1",
      "judul": "Struktur HTML & Judul Website",
      "penjelasan": "Selamat datang! Modul HTML Dasar dan CSS Dasar ini adalah SATU tuntunan berurutan: mengikuti tiap lesson dari sini sampai lesson terakhir modul CSS Dasar akan membuatmu punya website dengan tampilan PERSIS seperti rencana \"Website Pertama\" yang sudah kamu susun (judul dengan font unik, dua kotak berisi list & gambar, paragraf, tombol link, teks berjalan, dan tabel nilai). Ikuti urutannya, jangan lompat lesson.<br><br>Setiap halaman HTML punya kerangka wajib: <code>&lt;!DOCTYPE html&gt;</code> menandai jenis dokumen, <code>&lt;html&gt;</code> membungkus semuanya, <code>&lt;head&gt;</code> berisi info halaman (judul, dsb) yang tidak tampil di layar, dan <code>&lt;body&gt;</code> berisi konten yang benar-benar dilihat pengguna. Judul halaman ditulis dengan <code>&lt;h1&gt;</code> (paling besar/penting), dan sub judul di bawahnya bisa pakai <code>&lt;h2&gt;</code>. Kode yang kamu tulis di playground bawah otomatis tersimpan, jadi tetap ada meski kamu pindah lesson.",
      "contoh_kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Website Pertama - Namamu</title>\n</head>\n<body>\n  <h1>HALLO NAMA SAYA WISNU</h1>\n  <h2>INI ADALAH WEBSITE PERTAMA SAYA</h2>\n</body>\n</html>",
      "starter_code": {
        "html": "",
        "css": "",
        "js": ""
      },
      "tantangan": "Tulis struktur lengkap dari <!DOCTYPE html> sampai </html>, isi <title> dengan \"Website Pertama - Namamu\". Di <body>, buat <h1>HALLO NAMA SAYA [NAMAMU]</h1> (ganti dengan namamu sendiri), lalu tepat di bawahnya <h2>INI ADALAH WEBSITE PERTAMA SAYA</h2>."
    },
    {
      "id": "html-dasar-2",
      "judul": "CSS Dasar & Rata Tengah",
      "penjelasan": "CSS (Cascading Style Sheets) adalah bahasa untuk mengatur TAMPILAN, ditulis di kotak CSS terpisah dari kotak HTML. Pola dasarnya: <code>selector { properti: nilai; }</code> — selector menentukan elemen mana yang diubah (misal <code>h1</code> berarti \"semua tag h1\"). Kamu bisa menargetkan beberapa tag sekaligus dengan memisahkan pakai koma: <code>h1, h2 { ... }</code>.<br><br>Properti <code>text-align</code> mengatur perataan teks: <code>left</code> (kiri, default), <code>center</code> (tengah), atau <code>right</code> (kanan). Sesuai rencana Website Pertama, nama dan sub judul ditulis rata tengah.",
      "contoh_kode": "<style>\n  h1, h2 {\n    text-align: center;\n  }\n</style>\n\n<h1>HALLO NAMA SAYA WISNU</h1>\n<h2>INI ADALAH WEBSITE PERTAMA SAYA</h2>",
      "starter_code": {
        "html": "<h1>HALLO NAMA SAYA WISNU</h1>\n<h2>INI ADALAH WEBSITE PERTAMA SAYA</h2>",
        "css": "",
        "js": ""
      },
      "tantangan": "Di kotak CSS, buat aturan h1, h2 { text-align: center; } supaya nama dan sub judul di Website Pertamamu rata tengah."
    },
    {
      "id": "html-dasar-3",
      "judul": "Font Unik (font-family)",
      "penjelasan": "Properti <code>font-family</code> mengubah jenis huruf. Selain font umum (<code>Georgia, serif</code>), kamu bisa pakai font dekoratif yang sudah terpasang di banyak komputer Windows, misalnya <code>\"Algerian\"</code>. Selalu tulis nama font bawaan (<em>fallback</em>) setelahnya seperti <code>fantasy</code> — kalau font utamanya tidak tersedia di perangkat pembaca, browser otomatis memakai font cadangan sejenis.",
      "contoh_kode": "<style>\n  .font-unik {\n    font-family: \"Algerian\", fantasy;\n  }\n</style>\n\n<p class=\"font-unik\">INI FONT ALGERIAN</p>",
      "starter_code": {
        "html": "<h1>HALLO NAMA SAYA WISNU</h1>\n<h2>INI ADALAH WEBSITE PERTAMA SAYA</h2>",
        "css": "h1, h2 {\n  text-align: center;\n}",
        "js": ""
      },
      "tantangan": "Tepat di bawah h2, tambahkan <p class=\"font-unik\">INI FONT ALGERIAN</p>, lalu di CSS buat aturan .font-unik { font-family: \"Algerian\", fantasy; text-align: center; }"
    },
    {
      "id": "html-dasar-4",
      "judul": "Mempercantik Judul (Warna, Ukuran, Background)",
      "penjelasan": "Tiga properti sekaligus untuk mempercantik teks: <code>color</code> (warna teks), <code>font-size</code> (ukuran teks, satuan <code>px</code> paling gampang dipahami — angka lebih besar berarti lebih besar), dan <code>background-color</code> (warna latar di belakang elemen). Kalau pakai background-color, tambahkan juga <code>padding</code> supaya ada jarak antara teks dan tepi latarnya, tidak mepet.",
      "contoh_kode": "<style>\n  h1 {\n    color: #4f46e5;\n    font-size: 40px;\n    background-color: #eef0ff;\n    padding: 12px;\n  }\n</style>\n\n<h1>Judul Berwarna</h1>",
      "starter_code": {
        "html": "<h1>HALLO NAMA SAYA WISNU</h1>\n<h2>INI ADALAH WEBSITE PERTAMA SAYA</h2>",
        "css": "h1, h2 {\n  text-align: center;\n}",
        "js": ""
      },
      "tantangan": "Tambahkan color dan font-size pada aturan h1 (pilih warna dan ukuran favoritmu), lalu beri juga background-color dan sedikit padding — pastikan warna teksnya tetap kontras dan mudah dibaca."
    },
    {
      "id": "html-dasar-5",
      "judul": "Animasi Warna Teks",
      "penjelasan": "CSS bisa membuat teks berubah otomatis lewat <code>@keyframes</code> (mendefinisikan tahapan animasi, dari <code>from</code> ke <code>to</code>) dan properti <code>animation</code> (memanggil animasi itu pada sebuah elemen). Formatnya: <code>animation: nama-animasi durasi jenis-perulangan;</code> — misalnya <code>2s infinite alternate</code> berarti 2 detik, diulang terus-menerus, bolak-balik.",
      "contoh_kode": "<style>\n  h1 {\n    animation: warnaBerubah 2s infinite alternate;\n  }\n\n  @keyframes warnaBerubah {\n    from { color: #4f46e5; }\n    to { color: #f59e0b; }\n  }\n</style>\n\n<h1>Judul yang Berubah Warna</h1>",
      "starter_code": {
        "html": "<h1>HALLO NAMA SAYA WISNU</h1>",
        "css": "h1 {\n  text-align: center;\n  color: #4f46e5;\n}",
        "js": ""
      },
      "tantangan": "Tambahkan animation: warnaBerubah 2s infinite alternate; pada aturan h1, lalu buat @keyframes warnaBerubah (di luar aturan h1) berisi from dan to dengan dua warna berbeda, supaya namamu berubah warna pelan-pelan terus-menerus."
    },
    {
      "id": "html-dasar-6",
      "judul": "List & Kotak Pertama (Box 1)",
      "penjelasan": "<p>Sesuai rencana, sekarang kita buat \"TEKS BOX 1\": sebuah kotak berlabel tebal yang isinya sebuah list. Tiga tag baru:</p><ul><li><code>&lt;div&gt;</code> — elemen pembungkus generik, dipakai bersama <code>class</code> supaya bisa distyling nanti (kotaknya akan benar-benar terlihat seperti kotak di modul CSS Dasar).</li><li><code>&lt;strong&gt;</code> — membuat teks tebal, dipakai untuk label \"TEKS BOX 1\".</li><li><code>&lt;ul&gt;</code>/<code>&lt;li&gt;</code> — daftar tanpa urutan (bullet), tiap item ditulis dengan <code>&lt;li&gt;</code>.</li></ul>",
      "contoh_kode": "<div class=\"box box-1\">\n  <p><strong>TEKS BOX 1</strong></p>\n  <p>Kita buat list :</p>\n  <ul>\n    <li>AN-NASS</li>\n    <li>AL-FALAQ</li>\n    <li>AL-IKHLAS</li>\n  </ul>\n</div>",
      "starter_code": {
        "html": "<h1>HALLO NAMA SAYA WISNU</h1>\n<h2>INI ADALAH WEBSITE PERTAMA SAYA</h2>",
        "css": "h1, h2 {\n  text-align: center;\n}",
        "js": ""
      },
      "tantangan": "Di bawah judulmu, tambahkan <div class=\"box box-1\"> berisi: <p><strong>TEKS BOX 1</strong></p>, <p>Kita buat list :</p>, dan <ul> minimal 3 item (boleh pakai AN-NASS/AL-FALAQ/AL-IKHLAS atau daftar favoritmu sendiri)."
    },
    {
      "id": "html-dasar-7",
      "judul": "Gambar & Kotak Kedua (Box 2)",
      "penjelasan": "<p>Sekarang \"TEKS BOX 2\": kotak kedua berisi gambar. Menampilkan gambar butuh SATU tag: <code>&lt;img&gt;</code> — tidak punya tag penutup, cukup satu tag dengan 2 atribut penting:</p><ul><li><code>src</code> (sumber) — alamat gambarnya, bisa link internet (<code>https://...</code>) atau file di komputer sendiri (<code>foto.jpg</code>, ditaruh di folder yang sama).</li><li><code>alt</code> (teks alternatif) — deskripsi singkat, tampil kalau gambar gagal dimuat dan dibacakan pembaca layar.</li></ul><p><strong>Kesalahan umum:</strong> lupa mengisi <code>src</code>, salah ketik nama file, atau lupa ekstensi (<code>.jpg</code>/<code>.png</code>).</p>",
      "contoh_kode": "<div class=\"box box-2\">\n  <p><strong>TEKS BOX 2</strong></p>\n  <p>Gambar di dalam box</p>\n  <img src=\"https://via.placeholder.com/280x160\" alt=\"Contoh gambar\">\n</div>",
      "starter_code": {
        "html": "",
        "css": "",
        "js": ""
      },
      "tantangan": "Di bawah box-1, tambahkan <div class=\"box box-2\"> berisi: <p><strong>TEKS BOX 2</strong></p>, <p>Gambar di dalam box</p>, dan satu <img> (boleh pakai https://via.placeholder.com/280x160 atau fotomu sendiri, isi alt-nya)."
    },
    {
      "id": "html-dasar-8",
      "judul": "Paragraf & Tombol Link",
      "penjelasan": "Teks biasa ditulis di dalam <code>&lt;p&gt;</code>. Untuk membuat tautan yang bisa diklik menuju halaman lain, pakai <code>&lt;a href=\"...\"&gt;</code> (singkatan <em>Anchor</em>) — teks di antara <code>&lt;a&gt;</code> dan <code>&lt;/a&gt;</code> adalah teks yang bisa diklik. Atribut <code>target=\"_blank\"</code> membuka link di tab baru, biasanya dipasangkan dengan <code>rel=\"noopener\"</code> untuk keamanan. Tombolnya masih polos dulu — akan kita percantik jadi tombol sungguhan di modul CSS Dasar.",
      "contoh_kode": "<p>Kami adalah siswa dan siswi MIMU yang sedang belajar CODING HTML/CSS/JS untuk membuat website dan app web.</p>\n\n<a href=\"https://www.google.com\" target=\"_blank\" rel=\"noopener\">TEKAN UNTUK PERGI KE GOOGLE</a>",
      "starter_code": {
        "html": "",
        "css": "",
        "js": ""
      },
      "tantangan": "Di bawah box-2, tambahkan satu <p> berisi paragraf singkat tentang dirimu (boleh pakai contoh \"Kami adalah siswa dan siswi MIMU...\" atau tulis versimu sendiri), lalu satu <a href=\"https://www.google.com\">TEKAN UNTUK PERGI KE GOOGLE</a> yang dibuka di tab baru dengan target=\"_blank\"."
    },
    {
      "id": "html-dasar-9",
      "judul": "Tabel Nilai",
      "penjelasan": "Elemen terakhir di Website Pertamamu: tabel data. Tabel dibuat dengan <code>&lt;table&gt;</code>, baris dengan <code>&lt;tr&gt;</code>, sel header dengan <code>&lt;th&gt;</code>, dan sel data biasa dengan <code>&lt;td&gt;</code>.",
      "contoh_kode": "<table border=\"1\">\n  <tr>\n    <th>NO</th><th>NAMA</th><th>KELAS</th><th>NILAI</th>\n  </tr>\n  <tr><td>1</td><td>ALIF</td><td>1A</td><td>75</td></tr>\n  <tr><td>2</td><td>NURMAN</td><td>1B</td><td>85</td></tr>\n  <tr><td>3</td><td>ABDUL</td><td>1C</td><td>95</td></tr>\n</table>",
      "starter_code": {
        "html": "",
        "css": "",
        "js": ""
      },
      "tantangan": "Di bagian paling bawah halamanmu, tambahkan <table border=\"1\"> dengan kolom NO, NAMA, KELAS, NILAI dan minimal 3 baris data (boleh contoh ALIF/NURMAN/ABDUL atau data temanmu sendiri). Struktur HTML Website Pertamamu sudah lengkap — lanjut ke modul CSS Dasar untuk mempercantiknya jadi persis seperti rencana awal!"
    }
  ]
};
