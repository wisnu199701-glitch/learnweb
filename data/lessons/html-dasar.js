window.LEARNWEB_LESSONS = window.LEARNWEB_LESSONS || {};
window.LEARNWEB_LESSONS["html-dasar"] = {
  "modul": "html-dasar",
  "judul": "HTML & CSS Dasar",
  "lessons": [
    {
      "id": "html-dasar-1",
      "judul": "Struktur Dasar HTML",
      "penjelasan": "Setiap halaman HTML punya kerangka wajib: <code>&lt;!DOCTYPE html&gt;</code> menandai jenis dokumen, <code>&lt;html&gt;</code> membungkus semuanya, <code>&lt;head&gt;</code> berisi info halaman (judul, dsb) yang tidak tampil di layar, dan <code>&lt;body&gt;</code> berisi konten yang benar-benar dilihat pengguna. Kode yang kamu tulis di playground bawah otomatis tersimpan di browser, jadi tetap ada meski kamu pindah-pindah lesson.",
      "contoh_kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Halaman Pertamaku</title>\n</head>\n<body>\n  <h1>Halo, Dunia!</h1>\n  <p>Ini paragraf pertamaku.</p>\n</body>\n</html>",
      "starter_code": {
        "html": "",
        "css": "",
        "js": ""
      },
      "tantangan": "Tulis struktur lengkap dari <!DOCTYPE html> sampai </html>, isi <title> dengan judul bebas, lalu di <body> buat satu <h1> dan satu <p> berisi kalimatmu sendiri. Klik Jalankan untuk melihat hasilnya."
    },
    {
      "id": "html-dasar-2",
      "judul": "Heading dan Paragraf",
      "penjelasan": "HTML punya 6 tingkat heading, dari <code>&lt;h1&gt;</code> (paling penting/besar) sampai <code>&lt;h6&gt;</code> (paling kecil). Teks biasa ditulis di dalam <code>&lt;p&gt;</code>. Gunakan heading sesuai urutan kepentingan, jangan cuma untuk membuat teks besar.",
      "contoh_kode": "<h1>Judul Utama</h1>\n<h2>Sub Judul</h2>\n<p>Ini adalah paragraf penjelasan di bawah sub judul.</p>\n<h3>Judul Lebih Kecil</h3>\n<p>Paragraf lain di sini.</p>",
      "starter_code": {
        "html": "<h1>Resep Mie Goreng</h1>\n<p>Resep sederhana untuk pemula.</p>",
        "css": "",
        "js": ""
      },
      "tantangan": "Buat satu <h1>, satu <h2>, dan dua <p> tentang topik apa saja (hobi, film favorit, dll) untuk melihat perbedaan ukuran tiap level heading."
    },
    {
      "id": "html-dasar-3",
      "judul": "Format Teks Inline",
      "penjelasan": "Selain heading dan paragraf biasa, HTML punya banyak tag kecil untuk menekankan bagian teks: <code>&lt;strong&gt;</code> (tebal, penting), <code>&lt;em&gt;</code> (miring, penekanan), <code>&lt;mark&gt;</code> (highlight), <code>&lt;small&gt;</code> (teks kecil), <code>&lt;del&gt;</code> (dicoret, dihapus), <code>&lt;sub&gt;</code>/<code>&lt;sup&gt;</code> (subskrip/superskrip), dan <code>&lt;blockquote&gt;</code> untuk kutipan panjang.",
      "contoh_kode": "<p><strong>Penting:</strong> promo berakhir <em>hari ini</em>!</p>\n<p>Harga <del>Rp100.000</del> <mark>Rp75.000</mark></p>\n<p>Rumus air: H<sub>2</sub>O, dan 5<sup>2</sup> = 25</p>\n<blockquote>Belajar sedikit tiap hari lebih baik daripada banyak sekali-sekali.</blockquote>\n<p><small>Syarat dan ketentuan berlaku.</small></p>",
      "starter_code": {
        "html": "<p><strong>Penting:</strong> promo berakhir <em>hari ini</em>!</p>\n<p>Harga <del>Rp100.000</del> <mark>Rp75.000</mark></p>\n<blockquote>Belajar sedikit tiap hari lebih baik daripada banyak sekali-sekali.</blockquote>",
        "css": "",
        "js": ""
      },
      "tantangan": "Tulis satu paragraf bebas, lalu tandai satu kata jadi <strong>, satu frasa jadi <em>, dan tambahkan satu <blockquote> berisi kutipan favoritmu."
    },
    {
      "id": "html-dasar-4",
      "judul": "Rata Kiri, Tengah, atau Kanan (Text-Align)",
      "penjelasan": "<p>Sekarang mulai bagian <strong>CSS</strong> (Cascading Style Sheets), bahasa untuk mengatur TAMPILAN, bukan struktur. CSS ditulis di kotak CSS yang terpisah dari kotak HTML, dengan pola dasar: <code>selector { properti: nilai; }</code>. Selector menentukan elemen mana yang diubah (misal <code>h1</code> berarti \"semua tag h1\").</p><p>Properti <code>text-align</code> mengatur perataan teks: <code>left</code> (kiri, ini defaultnya), <code>center</code> (tengah), atau <code>right</code> (kanan).</p>",
      "contoh_kode": "<style>\n  h1 {\n    text-align: center;\n  }\n</style>\n\n<h1>Judul di Tengah</h1>",
      "starter_code": {
        "html": "<h1>Judulku</h1>",
        "css": "",
        "js": ""
      },
      "tantangan": "Buat aturan CSS untuk h1, beri text-align: center; supaya judulnya rata tengah. Coba juga ganti ke right untuk lihat bedanya."
    },
    {
      "id": "html-dasar-5",
      "judul": "Mengganti Font Tulisan (CSS)",
      "penjelasan": "Sekarang tambahkan properti baru untuk mengubah jenis huruf: <code>font-family</code>. Tidak perlu bikin aturan baru — tambahkan langsung di DALAM aturan h1 yang sudah kamu buat sebelumnya, di baris baru, masih dalam kurung kurawal yang sama.",
      "contoh_kode": "<style>\n  h1 {\n    text-align: center;\n    font-family: Georgia, serif;\n  }\n</style>\n\n<h1>Judul dengan Font Georgia</h1>",
      "starter_code": {
        "html": "<h1>Judulku</h1>",
        "css": "h1 {\n  text-align: center;\n}",
        "js": ""
      },
      "tantangan": "Tambahkan font-family di dalam aturan h1 yang sama — coba font-family: Georgia, serif; atau \"Courier New\", monospace; atau font dekoratif seperti \"Algerian\", fantasy;"
    },
    {
      "id": "html-dasar-6",
      "judul": "Mengganti Warna Teks (CSS)",
      "penjelasan": "Properti <code>color</code> mengubah warna TEKS (bukan latar belakangnya). Nilainya bisa nama warna (<code>red</code>, <code>blue</code>), kode hex (<code>#4f46e5</code>), atau <code>rgb(79, 70, 229)</code>. Selector-nya sama seperti sebelumnya — tambahkan properti baru di baris berikutnya di dalam kurung kurawal yang sama.",
      "contoh_kode": "<style>\n  h1 {\n    text-align: center;\n    font-family: Georgia, serif;\n    color: #4f46e5;\n  }\n</style>\n\n<h1>Judul Berwarna</h1>",
      "starter_code": {
        "html": "<h1>Judulku</h1>",
        "css": "h1 {\n  text-align: center;\n  font-family: Georgia, serif;\n}",
        "js": ""
      },
      "tantangan": "Tambahkan properti color pada aturan h1 yang sama, pilih warna favoritmu (nama warna atau kode hex)."
    },
    {
      "id": "html-dasar-7",
      "judul": "Mengubah Ukuran Teks (CSS)",
      "penjelasan": "Properti <code>font-size</code> mengatur besar-kecilnya teks. Untuk pemula, satuan paling gampang dipahami adalah <code>px</code> (piksel) — angka lebih besar berarti teks lebih besar. Kamu bisa memberi ukuran berbeda untuk tag berbeda, misalnya <code>h1</code> besar dan <code>p</code> lebih kecil, dengan menulis dua blok selector terpisah.",
      "contoh_kode": "<style>\n  h1 {\n    font-size: 40px;\n  }\n\n  p {\n    font-size: 16px;\n  }\n</style>\n\n<h1>Judul Besar</h1>\n<p>Paragraf ukuran normal.</p>",
      "starter_code": {
        "html": "<h1>Judulku</h1>",
        "css": "h1 {\n  text-align: center;\n  font-family: Georgia, serif;\n  color: #4f46e5;\n}",
        "js": ""
      },
      "tantangan": "Tambahkan font-size pada aturan h1 (coba 36px-48px), lalu buat aturan baru untuk tag p dengan font-size lebih kecil (misal 16px) supaya perbedaan judul vs teks biasa makin terlihat."
    },
    {
      "id": "html-dasar-8",
      "judul": "Menambahkan Background ke Teks (CSS)",
      "penjelasan": "<code>background-color</code> mengatur warna LATAR di belakang elemen — beda dengan <code>color</code> yang mengubah warna teksnya. Properti ini bisa dipasang ke elemen apa saja, termasuk <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, bahkan <code>&lt;body&gt;</code> untuk mengubah warna latar seluruh halaman. Hati-hati memilih kombinasi warna teks dan background supaya tetap mudah dibaca (kontras cukup tinggi). <strong>Satu properti tambahan yang berguna di sini:</strong> <code>padding</code> menambah jarak/ruang KOSONG di dalam kotak elemen, antara tepi background dan tulisannya. Tanpa padding, background akan menempel mepet ke teks (terlihat sempit); dengan <code>padding: 12px;</code> misalnya, ada jarak 12 piksel di sekeliling teks sebelum mentok ke tepi background — jadi terlihat lebih lega dan rapi.",
      "contoh_kode": "<style>\n  h1 {\n    background-color: #4f46e5;\n    color: white;\n    padding: 12px;\n  }\n</style>\n\n<h1>Judul dengan Background</h1>",
      "starter_code": {
        "html": "<h1>Judulku</h1>",
        "css": "h1 {\n  text-align: center;\n  font-family: Georgia, serif;\n  font-size: 40px;\n  color: #4f46e5;\n}",
        "js": ""
      },
      "tantangan": "Beri background-color pada h1, pastikan warna tekstnya tetap kontras/mudah dibaca di atas background baru. Boleh tambahkan padding sedikit supaya tidak terlalu mepet."
    },
    {
      "id": "html-dasar-9",
      "judul": "Mengatur Ukuran Background: Pas Teks atau Penuh",
      "penjelasan": "<p>Perhatikan background yang baru kamu buat di h1 — kalau <code>&lt;h1&gt;</code> ada di dalam wadah lain, backgroundnya bisa melebar penuh selebar wadah itu, padahal teksnya cuma sedikit. Itu karena <code>&lt;h1&gt;</code> adalah elemen <em>block</em> yang otomatis melebar 100% dari induknya. Kalau mau backgroundnya cuma <strong>sepas teksnya saja</strong>, tambahkan <code>display: inline-block;</code> pada aturan yang sama.</p><p><strong>⚠️ Efek samping yang sering bikin bingung:</strong> begitu h1 diberi <code>display: inline-block</code>, kotaknya MENGECIL pas sebesar teksnya sendiri. Kalau sebelumnya kamu sudah punya <code>text-align: center</code> DI DALAM aturan h1 itu, efeknya jadi \"hilang\" — bukan beneran hilang, tapi karena kotaknya sudah pas sebesar teks, tidak ada lagi ruang kosong di kiri-kanan untuk digeser ke tengah, jadi hasilnya h1 malah nempel ke KIRI halaman. Solusinya: pindahkan <code>text-align: center</code> ke elemen PEMBUNGKUSNYA (misalnya <code>body</code>), bukan di h1 itu sendiri — supaya h1 yang sudah mengecil tadi tetap diposisikan di tengah oleh induknya.</p>",
      "contoh_kode": "<style>\n  body {\n    text-align: center;\n  }\n\n  h1 {\n    background-color: #4f46e5;\n    display: inline-block;\n  }\n</style>\n\n<h1>Latar Pas Teks, Tetap di Tengah Halaman</h1>",
      "starter_code": {
        "html": "<h1>Judulku</h1>",
        "css": "h1 {\n  text-align: center;\n  font-family: Georgia, serif;\n  font-size: 40px;\n  color: #4f46e5;\n  background-color: #eef0ff;\n}",
        "js": ""
      },
      "tantangan": "Pindahkan text-align: center; dari aturan h1 ke aturan body yang baru (buat body { text-align: center; } terpisah). Setelah itu, baru tambahkan display: inline-block; di aturan h1 supaya backgroundnya cuma sepanjang teksnya — dan karena text-align sudah dipindah ke body, h1-nya akan tetap di tengah halaman meski kotaknya mengecil."
    },
    {
      "id": "html-dasar-10",
      "judul": "Animasi Teks Sederhana (CSS)",
      "penjelasan": "CSS bisa membuat teks bergerak/berubah otomatis lewat <code>@keyframes</code> (mendefinisikan tahapan animasi, dari <code>from</code> ke <code>to</code>) dan properti <code>animation</code> (memanggil animasi itu pada sebuah elemen). Formatnya: <code>animation: nama-animasi durasi jenis-perulangan;</code> — misalnya <code>2s infinite alternate</code> berarti 2 detik, diulang terus-menerus, bolak-balik.",
      "contoh_kode": "<style>\n  h1 {\n    animation: warnaBerubah 2s infinite alternate;\n  }\n\n  @keyframes warnaBerubah {\n    from {\n      color: #4f46e5;\n    }\n    to {\n      color: #f59e0b;\n    }\n  }\n</style>\n\n<h1>Judul yang Berubah Warna</h1>",
      "starter_code": {
        "html": "<h1>Judulku</h1>",
        "css": "body {\n  text-align: center;\n}\n\nh1 {\n  font-family: Georgia, serif;\n  font-size: 40px;\n  color: #4f46e5;\n  background-color: #eef0ff;\n  display: inline-block;\n}",
        "js": ""
      },
      "tantangan": "Tambahkan animation: namaAnimasi 2s infinite alternate; di dalam aturan h1 yang sama, lalu buat @keyframes baru (di luar aturan h1, sejajar dengannya) dengan nama yang sama, isi from dan to dengan dua warna berbeda supaya judulmu berubah warna pelan-pelan secara terus-menerus."
    },
    {
      "id": "html-dasar-11",
      "judul": "Menampilkan Gambar",
      "penjelasan": "<p><strong>Bagian ini sering bikin bingung pemula — pelan-pelan ya.</strong> Menampilkan gambar butuh SATU tag saja: <code>&lt;img&gt;</code> (singkatan dari <em>Image</em>). Tag ini istimewa karena <strong>tidak punya tag penutup</strong> — tidak ada <code>&lt;/img&gt;</code>, cukup satu tag saja lalu ditutup dengan atribut di dalamnya.</p><p>Tag <code>&lt;img&gt;</code> wajib punya 2 atribut penting:</p><ol><li><code>src</code> (singkatan <em>source</em> = sumber) — diisi alamat/lokasi file gambarnya. Bisa berupa: <strong>link dari internet</strong> (contoh: <code>https://...</code>) atau <strong>file gambar di komputermu sendiri</strong> yang naskahnya taruh di folder yang sama dengan file HTML (contoh: <code>src=\"foto.jpg\"</code>).</li><li><code>alt</code> (singkatan <em>alternative text</em> = teks alternatif) — deskripsi singkat gambar. Ini akan tampil kalau gambarnya GAGAL dimuat (link mati/typo), dan juga dibacakan oleh pembaca layar untuk pengguna tunanetra.</li></ol><p><strong>Kesalahan paling umum:</strong> lupa mengisi <code>src</code>, salah ketik nama file (huruf besar/kecil berpengaruh!), atau lupa ekstensi file (<code>.jpg</code>/<code>.png</code>). Kalau gambar tidak muncul dan malah muncul ikon gambar rusak, cek dulu 3 hal itu.</p>",
      "contoh_kode": "<!-- Gambar dari internet (pakai link URL) -->\n<img src=\"https://via.placeholder.com/150\" alt=\"Gambar contoh ukuran 150x150 piksel\">\n\n<!-- Gambar dari file di komputer sendiri (kalau ada file foto.jpg di folder yang sama) -->\n<!-- <img src=\"foto.jpg\" alt=\"Foto saya\"> -->",
      "starter_code": {
        "html": "<img src=\"https://via.placeholder.com/150\" alt=\"Gambar contoh\">",
        "css": "",
        "js": ""
      },
      "tantangan": "Tambahkan satu <img> (boleh pakai https://via.placeholder.com/200, atau ganti angka 200 dengan ukuran lain untuk lihat efeknya), isi alt dengan deskripsi singkat gambarnya."
    },
    {
      "id": "html-dasar-12",
      "judul": "Tabel",
      "penjelasan": "Tabel dibuat dengan <code>&lt;table&gt;</code>, baris dengan <code>&lt;tr&gt;</code>, sel header dengan <code>&lt;th&gt;</code>, dan sel data biasa dengan <code>&lt;td&gt;</code>.",
      "contoh_kode": "<table border=\"1\">\n  <tr>\n    <th>Nama</th>\n    <th>Nilai</th>\n  </tr>\n  <tr>\n    <td>Andi</td>\n    <td>90</td>\n  </tr>\n  <tr>\n    <td>Budi</td>\n    <td>85</td>\n  </tr>\n</table>",
      "starter_code": {
        "html": "<table border=\"1\">\n  <tr>\n    <th>Nama</th>\n    <th>Nilai</th>\n  </tr>\n  <tr>\n    <td>Andi</td>\n    <td>90</td>\n  </tr>\n</table>",
        "css": "",
        "js": ""
      },
      "tantangan": "Buat <table border=\"1\"> berisi minimal 2 baris data (misal daftar barang dan harga, atau daftar nilai teman sekelas)."
    },
    {
      "id": "html-dasar-13",
      "judul": "Tabel Lanjutan",
      "penjelasan": "Sel tabel bisa digabung dengan <code>colspan</code> (gabung kolom) atau <code>rowspan</code> (gabung baris). Tabel yang lebih rapi juga membagi struktur jadi <code>&lt;thead&gt;</code> (header), <code>&lt;tbody&gt;</code> (isi), dan <code>&lt;tfoot&gt;</code> (footer, misalnya total).",
      "contoh_kode": "<table border=\"1\">\n  <thead>\n    <tr>\n      <th>Nama</th>\n      <th colspan=\"2\">Nilai</th>\n    </tr>\n    <tr>\n      <th></th>\n      <th>UTS</th>\n      <th>UAS</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Andi</td>\n      <td>80</td>\n      <td>90</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td colspan=\"3\">Total 1 siswa</td>\n    </tr>\n  </tfoot>\n</table>",
      "starter_code": {
        "html": "<table border=\"1\">\n  <thead>\n    <tr>\n      <th>Nama</th>\n      <th colspan=\"2\">Nilai</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Andi</td>\n      <td>80</td>\n      <td>90</td>\n    </tr>\n  </tbody>\n</table>",
        "css": "",
        "js": ""
      },
      "tantangan": "Upgrade tabel yang kamu buat di lesson sebelumnya: bungkus baris judul dengan <thead>, isi datanya dengan <tbody>, lalu coba tambahkan <tfoot> berisi ringkasan singkat."
    },
    {
      "id": "html-dasar-14",
      "judul": "List (Daftar)",
      "penjelasan": "Ada dua jenis daftar utama: <code>&lt;ul&gt;</code> untuk daftar tanpa urutan (bullet) dan <code>&lt;ol&gt;</code> untuk daftar berurutan (nomor). Setiap item ditulis dengan <code>&lt;li&gt;</code>.",
      "contoh_kode": "<h3>Belanja</h3>\n<ul>\n  <li>Telur</li>\n  <li>Susu</li>\n  <li>Roti</li>\n</ul>\n\n<h3>Langkah Memasak</h3>\n<ol>\n  <li>Panaskan minyak</li>\n  <li>Masukkan bumbu</li>\n  <li>Aduk rata</li>\n</ol>",
      "starter_code": {
        "html": "<h3>Belanja</h3>\n<ul>\n  <li>Telur</li>\n  <li>Susu</li>\n</ul>",
        "css": "",
        "js": ""
      },
      "tantangan": "Buat satu <ul> berisi minimal 3 item (bebas: hobi, makanan favorit, mapel, dll) dan satu <ol> berisi minimal 3 langkah dari sebuah kegiatan."
    },
    {
      "id": "html-dasar-15",
      "judul": "Link (Tautan)",
      "penjelasan": "Tag <code>&lt;a href=\"...\"&gt;</code> (singkatan <em>Anchor</em>) dipakai membuat link/tautan ke halaman lain. Isi teks di antara <code>&lt;a&gt;</code> dan <code>&lt;/a&gt;</code> adalah teks yang bisa diklik. Atribut <code>target=\"_blank\"</code> membuat link terbuka di tab baru, dan biasanya dipasangkan dengan <code>rel=\"noopener\"</code> untuk keamanan.",
      "contoh_kode": "<a href=\"https://developer.mozilla.org\">Kunjungi MDN</a>\n<br>\n<a href=\"https://www.google.com\" target=\"_blank\" rel=\"noopener\">Buka Google di tab baru</a>",
      "starter_code": {
        "html": "<a href=\"https://developer.mozilla.org\">Kunjungi MDN</a>",
        "css": "",
        "js": ""
      },
      "tantangan": "Tambahkan satu <a href=\"...\"> menuju situs favoritmu (atau https://www.google.com), buka di tab baru dengan target=\"_blank\" dan tambahkan rel=\"noopener\"."
    },
    {
      "id": "html-dasar-16",
      "judul": "Div dan Span (Elemen Blok vs Inline)",
      "penjelasan": "<code>&lt;div&gt;</code> adalah elemen blok generik (selalu mulai baris baru, biasa dipakai membungkus bagian besar halaman), sedangkan <code>&lt;span&gt;</code> adalah elemen inline generik (tidak memutus baris, biasa dipakai membungkus sebagian kecil teks). Keduanya tidak punya makna khusus, dipakai bersama <code>class</code>/<code>id</code> untuk keperluan styling atau JS.",
      "contoh_kode": "<div class=\"kotak\">\n  <p>Ini di dalam div. Div membuat baris baru.</p>\n  <p>Kata <span class=\"sorot\">penting</span> ini ditandai pakai span, tanpa memutus baris.</p>\n</div>",
      "starter_code": {
        "html": "<div class=\"kotak\">\n  <p>Ini di dalam div.</p>\n  <p>Kata <span class=\"sorot\">penting</span> ditandai pakai span.</p>\n</div>",
        "css": ".kotak {\n  border: 1px solid #999;\n  padding: 10px;\n}\n\n.sorot {\n  background: yellow;\n}",
        "js": ""
      },
      "tantangan": "Bungkus dua paragraf dengan <div class=\"kotak\">, lalu tandai satu kata di dalamnya dengan <span class=\"sorot\">."
    },
    {
      "id": "html-dasar-17",
      "judul": "Elemen Semantik HTML5",
      "penjelasan": "Elemen semantik memberi makna pada struktur halaman, bukan cuma kotak kosong seperti <code>&lt;div&gt;</code>. Yang umum dipakai: <code>&lt;header&gt;</code> (kepala halaman/section), <code>&lt;nav&gt;</code> (navigasi), <code>&lt;main&gt;</code> (konten utama), <code>&lt;section&gt;</code> (bagian topik), <code>&lt;article&gt;</code> (konten mandiri), <code>&lt;aside&gt;</code> (info tambahan), dan <code>&lt;footer&gt;</code> (kaki halaman). Memakainya membantu SEO dan aksesibilitas.",
      "contoh_kode": "<header>\n  <h1>Blog Belajar Ngoding</h1>\n  <nav>\n    <a href=\"#\">Beranda</a> | <a href=\"#\">Artikel</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h2>Kenapa Harus Belajar HTML?</h2>\n    <p>Karena HTML adalah fondasi setiap halaman web.</p>\n  </article>\n  <aside>\n    <p>Tips: latihan tiap hari 15 menit saja cukup.</p>\n  </aside>\n</main>\n<footer>\n  <p>&copy; 2026 Blog Belajar Ngoding</p>\n</footer>",
      "starter_code": {
        "html": "<header>\n  <h1>Blog Belajar Ngoding</h1>\n  <nav>\n    <a href=\"#\">Beranda</a> | <a href=\"#\">Artikel</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h2>Kenapa Harus Belajar HTML?</h2>\n    <p>Karena HTML adalah fondasi setiap halaman web.</p>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 Blog Belajar Ngoding</p>\n</footer>",
        "css": "header, footer {\n  background: #eee;\n  padding: 10px;\n}\n\nnav a {\n  margin-right: 8px;\n}",
        "js": ""
      },
      "tantangan": "Susun ulang salah satu contoh di lesson sebelumnya (atau buat baru) memakai <header>, <main>, dan <footer>."
    },
    {
      "id": "html-dasar-18",
      "judul": "Atribut Umum & Data Attribute",
      "penjelasan": "Selain <code>id</code> dan <code>class</code>, hampir semua elemen bisa punya atribut <code>title</code> (tooltip saat hover) dan atribut custom <code>data-*</code> untuk menyimpan data tambahan yang nanti bisa dibaca lewat JavaScript (<code>element.dataset.namaAtribut</code>).",
      "contoh_kode": "<button id=\"beli-btn\" data-produk-id=\"42\" data-harga=\"15000\" title=\"Klik untuk membeli\">Beli</button>\n\n<script>\n  const btn = document.querySelector(\"#beli-btn\");\n  btn.addEventListener(\"click\", function () {\n    console.log(\"Produk ID:\", btn.dataset.produkId, \"Harga:\", btn.dataset.harga);\n  });\n</script>",
      "starter_code": {
        "html": "<button id=\"beli-btn\" data-produk-id=\"42\" data-harga=\"15000\" title=\"Klik untuk membeli\">Beli</button>",
        "css": "",
        "js": "document.querySelector(\"#beli-btn\").addEventListener(\"click\", function () {\n  const btn = document.querySelector(\"#beli-btn\");\n  console.log(\"Produk ID:\", btn.dataset.produkId, \"Harga:\", btn.dataset.harga);\n});"
      },
      "tantangan": "Tambahkan atribut data-* (bebas namanya) pada sebuah elemen, lalu coba baca nilainya lewat element.dataset di JavaScript seperti pada contoh."
    },
    {
      "id": "html-dasar-19",
      "judul": "Form Dasar",
      "penjelasan": "Form dipakai untuk mengambil input dari pengguna. <code>&lt;input&gt;</code> untuk isian teks/angka/dll, <code>&lt;label&gt;</code> untuk keterangan, dan <code>&lt;button&gt;</code> untuk tombol aksi.",
      "contoh_kode": "<form>\n  <label for=\"nama\">Nama:</label>\n  <input type=\"text\" id=\"nama\" placeholder=\"Masukkan nama\">\n  <br><br>\n  <label for=\"email\">Email:</label>\n  <input type=\"email\" id=\"email\" placeholder=\"nama@email.com\">\n  <br><br>\n  <button type=\"button\">Kirim</button>\n</form>",
      "starter_code": {
        "html": "<form>\n  <label for=\"nama\">Nama:</label>\n  <input type=\"text\" id=\"nama\" placeholder=\"Masukkan nama\">\n  <br><br>\n  <button type=\"button\">Kirim</button>\n</form>",
        "css": "",
        "js": ""
      },
      "tantangan": "Buat form sederhana dengan input nama, input email, dan tombol kirim."
    },
    {
      "id": "html-dasar-20",
      "judul": "Form Lanjutan",
      "penjelasan": "Selain <code>&lt;input&gt;</code>, form punya <code>&lt;textarea&gt;</code> untuk teks panjang, <code>&lt;select&gt;</code> dengan <code>&lt;option&gt;</code> untuk pilihan dropdown, serta <code>&lt;input type=\"checkbox\"&gt;</code> (bisa pilih banyak) dan <code>&lt;input type=\"radio\"&gt;</code> (hanya satu pilihan per grup, dikelompokkan lewat atribut <code>name</code> yang sama).",
      "contoh_kode": "<label for=\"pesan\">Pesan:</label>\n<textarea id=\"pesan\" rows=\"3\"></textarea>\n\n<label for=\"kota\">Kota:</label>\n<select id=\"kota\">\n  <option value=\"jkt\">Jakarta</option>\n  <option value=\"bdg\">Bandung</option>\n</select>\n\n<label><input type=\"checkbox\" name=\"hobi\" value=\"baca\"> Membaca</label>\n<label><input type=\"checkbox\" name=\"hobi\" value=\"olahraga\"> Olahraga</label>\n\n<p>Jenis kelamin:</p>\n<label><input type=\"radio\" name=\"gender\" value=\"pria\"> Pria</label>\n<label><input type=\"radio\" name=\"gender\" value=\"wanita\"> Wanita</label>",
      "starter_code": {
        "html": "<label for=\"pesan\">Pesan:</label>\n<textarea id=\"pesan\" rows=\"3\"></textarea>\n<br>\n<label for=\"kota\">Kota:</label>\n<select id=\"kota\">\n  <option value=\"jkt\">Jakarta</option>\n  <option value=\"bdg\">Bandung</option>\n</select>",
        "css": "",
        "js": ""
      },
      "tantangan": "Tambahkan <textarea>, <select>, dan beberapa <input type=\"checkbox\">/<input type=\"radio\"> ke form yang kamu buat di lesson sebelumnya."
    },
    {
      "id": "html-dasar-21",
      "judul": "Audio, Video, iFrame & Komentar HTML",
      "penjelasan": "Tag <code>&lt;audio&gt;</code> dan <code>&lt;video&gt;</code> (dengan atribut <code>controls</code>) memutar media langsung di halaman. <code>&lt;iframe&gt;</code> menyisipkan halaman/konten dari sumber lain (misal peta atau video YouTube). Komentar HTML ditulis <code>&lt;!-- seperti ini --&gt;</code> dan tidak akan tampil di halaman, berguna untuk catatan bagi diri sendiri.",
      "contoh_kode": "<!-- Ini komentar, tidak tampil di halaman -->\n<video controls width=\"250\">\n  <source src=\"video.mp4\" type=\"video/mp4\">\n  Browser tidak mendukung video.\n</video>\n\n<audio controls>\n  <source src=\"lagu.mp3\" type=\"audio/mpeg\">\n  Browser tidak mendukung audio.\n</audio>",
      "starter_code": {
        "html": "<!-- Komentar contoh -->\n<p>Elemen audio/video butuh file media asli untuk bisa diputar, tapi struktur tag-nya seperti ini:</p>\n<pre>&lt;video controls&gt;\n  &lt;source src=\"video.mp4\" type=\"video/mp4\"&gt;\n&lt;/video&gt;</pre>",
        "css": "",
        "js": ""
      },
      "tantangan": "Tambahkan komentar HTML (misal <!-- Bagian Video -->) di atas kodemu, lalu coba tulis (tidak perlu file asli) struktur <video controls> lengkap dengan tag <source> di dalamnya."
    },
    {
      "id": "html-dasar-tugas-1",
      "judul": "Tugas 1: Judul, Font Unik & Kotak Berisi List",
      "penjelasan": "Saatnya latihan menggabungkan semua yang sudah dipelajari, meniru rencana \"Website Pertama\" berikut: judul nama dengan sub judul di bawahnya, satu baris teks dengan font unik, lalu sebuah \"kotak\" (pakai <div>) berlabel tebal <strong>TEKS BOX 1</strong> yang di dalamnya ada sebuah list. Border/background kotak yang bikin terlihat seperti kotak sungguhan baru akan kamu pelajari di modul CSS Dasar — untuk sekarang cukup strukturnya saja.",
      "contoh_kode": "<h1>HALLO NAMA SAYA WISNU</h1>\n<h2>INI ADALAH WEBSITE PERTAMA SAYA</h2>\n<p style=\"font-family: 'Algerian', fantasy;\">INI FONT ALGERIAN</p>\n\n<div class=\"box box-1\">\n  <p><strong>TEKS BOX 1</strong></p>\n  <p>Kita buat list :</p>\n  <ul>\n    <li>AN-NASS</li>\n    <li>AL-FALAQ</li>\n    <li>AL-IKHLAS</li>\n  </ul>\n</div>",
      "starter_code": {
        "html": "",
        "css": "",
        "js": ""
      },
      "tantangan": "Buat: (1) <h1>HALLO NAMA SAYA [Namamu]</h1> rata tengah; (2) <h2>INI ADALAH WEBSITE PERTAMA SAYA</h2> di bawahnya; (3) satu <p> dengan font unik (misal font-family: \"Algerian\", fantasy;) berisi \"INI FONT ALGERIAN\"; (4) sebuah <div class=\"box box-1\"> berisi <p><strong>TEKS BOX 1</strong></p>, <p>Kita buat list :</p>, dan <ul> minimal 3 item (boleh AN-NASS/AL-FALAQ/AL-IKHLAS atau daftar favoritmu sendiri)."
    },
    {
      "id": "html-dasar-tugas-2",
      "judul": "Tugas 2: Kotak Gambar, Paragraf & Tombol Link",
      "penjelasan": "Lanjutkan halamanmu dengan kotak kedua berisi gambar, sebuah paragraf tentang dirimu, dan tombol yang mengarah ke situs lain.",
      "contoh_kode": "<div class=\"box box-2\">\n  <p><strong>TEKS BOX 2</strong></p>\n  <p>Gambar di dalam box</p>\n  <img src=\"https://via.placeholder.com/280x160\" alt=\"Contoh gambar\">\n</div>\n\n<p>Kami adalah siswa dan siswi MIMU yang sedang belajar CODING HTML/CSS/JS untuk membuat website dan app web.</p>\n\n<a href=\"https://www.google.com\" target=\"_blank\" rel=\"noopener\">TEKAN UNTUK PERGI KE GOOGLE</a>",
      "starter_code": {
        "html": "",
        "css": "",
        "js": ""
      },
      "tantangan": "Di bawah box-1, tambahkan: (1) <div class=\"box box-2\"> berisi <p><strong>TEKS BOX 2</strong></p>, <p>Gambar di dalam box</p>, dan sebuah <img>; (2) satu <p> berisi paragraf singkat tentang dirimu (boleh pakai contoh \"Kami adalah siswa dan siswi MIMU...\" atau tulis versimu sendiri); (3) satu <a href=\"https://www.google.com\">TEKAN UNTUK PERGI KE GOOGLE</a> yang dibuka di tab baru dengan target=\"_blank\"."
    },
    {
      "id": "html-dasar-tugas-3",
      "judul": "Tugas 3: Tabel Nilai & Rapikan Semuanya",
      "penjelasan": "Terakhir untuk modul ini: tambahkan tabel data, lalu rapikan seluruh halaman dengan komentar HTML supaya mudah dibaca ulang. Tampilan visual (kotak bergaris, gambar+teks bertumpuk, teks berjalan) akan kamu tambahkan nanti di modul CSS Dasar — modul ini fokus dulu ke struktur HTML-nya sampai benar.",
      "contoh_kode": "<!-- Tabel Nilai -->\n<table border=\"1\">\n  <thead>\n    <tr><th>NO</th><th>NAMA</th><th>KELAS</th><th>NILAI</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>1</td><td>ALIF</td><td>1A</td><td>75</td></tr>\n    <tr><td>2</td><td>NURMAN</td><td>1B</td><td>85</td></tr>\n    <tr><td>3</td><td>ABDUL</td><td>1C</td><td>95</td></tr>\n  </tbody>\n</table>",
      "starter_code": {
        "html": "",
        "css": "",
        "js": ""
      },
      "tantangan": "Tambahkan di bagian bawah halamanmu sebuah <table> (pakai <thead>/<tbody>) dengan kolom NO, NAMA, KELAS, NILAI dan minimal 3 baris data (boleh contoh ALIF/NURMAN/ABDUL atau data temanmu sendiri). Tutup dengan komentar HTML di atas tiap bagian besar halamanmu (misal <!-- Judul -->, <!-- Box 1 -->, <!-- Box 2 -->, <!-- Tabel -->) untuk menandai strukturnya. Simpan kode ini — di modul CSS Dasar kamu akan mempercantiknya jadi tampilan Website Pertama yang sesungguhnya."
    }
  ]
};
