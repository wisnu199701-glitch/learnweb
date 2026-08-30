window.LEARNWEB_LESSONS = window.LEARNWEB_LESSONS || {};
window.LEARNWEB_LESSONS["html-dasar"] = {
  "modul": "html-dasar",
  "judul": "HTML & CSS Dasar",
  "lessons": [
    {
      "id": "html-dasar-1",
      "judul": "Struktur Dasar HTML",
      "penjelasan": "Setiap halaman HTML punya kerangka wajib: <code>&lt;!DOCTYPE html&gt;</code> menandai jenis dokumen, <code>&lt;html&gt;</code> membungkus semuanya, <code>&lt;head&gt;</code> berisi info halaman (judul, dsb) yang tidak tampil di layar, dan <code>&lt;body&gt;</code> berisi konten yang benar-benar dilihat pengguna. <strong>Mulai lesson ini, kamu akan membangun SATU project nyata: Website Portofolio Pribadi.</strong> Kodenya otomatis tersimpan dan menyambung terus sampai lesson paling akhir — apa pun yang kamu tulis di sini tidak akan hilang saat pindah lesson. <strong>Catatan:</strong> di jalur ini, HTML dan CSS sengaja diselang-seling — begitu ada elemen baru, kamu langsung coba pernak-perniknya (font, warna, ukuran) supaya hasilnya terasa hidup, bukan cuma teks hitam-putih.",
      "contoh_kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Halaman Pertamaku</title>\n</head>\n<body>\n  <h1>Halo, Dunia!</h1>\n  <p>Ini paragraf pertamaku.</p>\n</body>\n</html>",
      "starter_code": {
        "html": "",
        "css": "",
        "js": ""
      },
      "tantangan": "Editor HTML di bawah masih kosong — ini titik awal project portofoliomu. Tulis struktur lengkap dari <!DOCTYPE html> sampai </html>, isi <title> dengan \"Portofolio - Namamu\", lalu di <body> buat <h1> berisi namamu dan satu <p> berisi tagline singkat (misal \"Calon Web Developer\"). Klik Jalankan, lalu lanjut ke lesson berikutnya — semua ini akan otomatis terbawa."
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
      "tantangan": "Di portofoliomu, tambahkan <h2>Tentang Saya</h2> diikuti 1-2 <p> berisi cerita singkat tentang dirimu."
    },
    {
      "id": "html-dasar-3",
      "judul": "Font Tulisan Langsung di Tag (Inline CSS)",
      "penjelasan": "<p>Sekarang jeda sebentar dari HTML murni — waktunya sentuhan pertama <strong>CSS</strong> (Cascading Style Sheets), bahasa untuk mengatur TAMPILAN. Cara paling sederhana menulis CSS (cocok untuk pemula): langsung di DALAM tag itu sendiri, pakai atribut <code>style</code>. Ini disebut <strong>inline CSS</strong> — tidak perlu blok terpisah, tidak perlu selector, cukup satu atribut di tag yang mau diubah.</p><p>Formatnya: <code>style=\"properti: nilai;\"</code>. Properti <code>font-family</code> mengganti jenis huruf.</p>",
      "contoh_kode": "<p style=\"font-family: Georgia, serif;\">Paragraf dengan font berbeda.</p>",
      "starter_code": {
        "html": "<p>Ini paragraf contoh.</p>",
        "css": "",
        "js": ""
      },
      "tantangan": "Pilih satu <p> di portofoliomu (misalnya paragraf tagline di bawah namamu), lalu tambahkan atribut style=\"font-family: ...;\" LANGSUNG di tag <p> itu — tidak perlu kotak CSS terpisah, cukup di dalam tag HTML-nya saja. Contoh: font-family: Georgia, serif; atau \"Courier New\", monospace;"
    },
    {
      "id": "html-dasar-4",
      "judul": "Menambah Warna, Tetap di Baris yang Sama",
      "penjelasan": "Mau tambah properti CSS lain? Tidak perlu bikin atribut style baru — cukup tambahkan di DALAM atribut style yang sama, dipisah titik koma (<code>;</code>). Properti <code>color</code> mengubah warna teks. Nilainya bisa nama warna (<code>red</code>), kode hex (<code>#4f46e5</code>), atau <code>rgb(79, 70, 229)</code>.",
      "contoh_kode": "<p style=\"font-family: Georgia, serif; color: #4f46e5;\">Paragraf dengan font dan warna, masih satu baris.</p>",
      "starter_code": {
        "html": "<p style=\"font-family: Georgia, serif;\">Ini paragraf contoh.</p>",
        "css": "",
        "js": ""
      },
      "tantangan": "Buka lagi <p> yang tadi kamu kasih style. JANGAN buat atribut style baru — tambahkan color: ...; di DALAM atribut style yang sudah ada, setelah font-family, dipisah titik koma. Semua tetap satu baris, satu tag."
    },
    {
      "id": "html-dasar-5",
      "judul": "Menambah Ukuran, Masih Satu Baris",
      "penjelasan": "Sama seperti sebelumnya: tambahkan <code>font-size: nilai;</code> di dalam atribut style yang sama, setelah properti-properti yang sudah ada. Untuk pemula, satuan paling gampang dipahami adalah <code>px</code> (piksel) — angka lebih besar berarti teks lebih besar.",
      "contoh_kode": "<p style=\"font-family: Georgia, serif; color: #4f46e5; font-size: 20px;\">Paragraf dengan font, warna, dan ukuran, masih satu baris.</p>",
      "starter_code": {
        "html": "<p style=\"font-family: Georgia, serif; color: #4f46e5;\">Ini paragraf contoh.</p>",
        "css": "",
        "js": ""
      },
      "tantangan": "Tambahkan font-size: ...; di dalam atribut style yang sama pada <p> tadi (misalnya font-size: 18px; atau 20px;) — masih di baris yang sama, tidak dipindah ke tempat lain."
    },
    {
      "id": "html-dasar-6",
      "judul": "Menambah Background, Tetap Satu Baris",
      "penjelasan": "<code>background-color</code> mengatur warna LATAR di belakang teks — beda dengan <code>color</code> yang mengubah warna tulisannya. Tambahkan lagi ke atribut style yang sama, seperti properti-properti sebelumnya. Hati-hati memilih kombinasi warna teks dan background supaya tetap kontras/mudah dibaca. <strong>Setelah ini kamu sudah paham 4 properti CSS dasar hanya lewat SATU atribut style</strong> — nanti di modul CSS Dasar kita belajar cara yang lebih rapi (pakai selector) supaya tidak perlu menulis ulang style yang sama di tiap tag satu-satu.",
      "contoh_kode": "<p style=\"font-family: Georgia, serif; color: #4f46e5; font-size: 20px; background-color: #eef0ff;\">Paragraf lengkap dengan 4 gaya, tetap satu baris.</p>",
      "starter_code": {
        "html": "<p style=\"font-family: Georgia, serif; color: #4f46e5; font-size: 20px;\">Ini paragraf contoh.</p>",
        "css": "",
        "js": ""
      },
      "tantangan": "Tambahkan background-color: ...; di atribut style yang sama pada <p> tadi. Pastikan warna teks dan background-nya tetap kontras (mudah dibaca). Boleh dicoba juga pada nama (h1) dan tagline portofoliomu, masing-masing di atribut style tag-nya sendiri."
    },
    {
      "id": "html-dasar-7",
      "judul": "Tabel",
      "penjelasan": "Tabel dibuat dengan <code>&lt;table&gt;</code>, baris dengan <code>&lt;tr&gt;</code>, sel header dengan <code>&lt;th&gt;</code>, dan sel data biasa dengan <code>&lt;td&gt;</code>.",
      "contoh_kode": "<table border=\"1\">\n  <tr>\n    <th>Nama</th>\n    <th>Nilai</th>\n  </tr>\n  <tr>\n    <td>Andi</td>\n    <td>90</td>\n  </tr>\n  <tr>\n    <td>Budi</td>\n    <td>85</td>\n  </tr>\n</table>",
      "starter_code": {
        "html": "<table border=\"1\">\n  <tr>\n    <th>Nama</th>\n    <th>Nilai</th>\n  </tr>\n  <tr>\n    <td>Andi</td>\n    <td>90</td>\n  </tr>\n</table>",
        "css": "",
        "js": ""
      },
      "tantangan": "Tambahkan <h2>Riwayat Pendidikan</h2> diikuti <table> berisi minimal 2 baris (nama sekolah/kampus dan tahun)."
    },
    {
      "id": "html-dasar-8",
      "judul": "Link dan Gambar",
      "penjelasan": "<p><strong>Bagian gambar ini sering bikin bingung pemula — pelan-pelan ya.</strong> Menampilkan gambar butuh SATU tag saja: <code>&lt;img&gt;</code> (singkatan dari <em>Image</em>). Tag ini istimewa karena <strong>tidak punya tag penutup</strong> — tidak ada <code>&lt;/img&gt;</code>, cukup satu tag saja lalu ditutup dengan atribut di dalamnya.</p><p>Tag <code>&lt;img&gt;</code> wajib punya 2 atribut penting:</p><ol><li><code>src</code> (singkatan <em>source</em> = sumber) — diisi alamat/lokasi file gambarnya. Bisa berupa: <strong>link dari internet</strong> (contoh: <code>https://...</code>) atau <strong>file gambar di komputermu sendiri</strong> yang naskahnya taruh di folder yang sama dengan file HTML (contoh: <code>src=\"foto.jpg\"</code>).</li><li><code>alt</code> (singkatan <em>alternative text</em> = teks alternatif) — deskripsi singkat gambar. Ini akan tampil kalau gambarnya GAGAL dimuat (link mati/typo), dan juga dibacakan oleh pembaca layar untuk pengguna tunanetra.</li></ol><p><strong>Kesalahan paling umum:</strong> lupa mengisi <code>src</code>, salah ketik nama file (huruf besar/kecil berpengaruh!), atau lupa ekstensi file (<code>.jpg</code>/<code>.png</code>). Kalau gambar tidak muncul dan malah muncul ikon gambar rusak, cek dulu 3 hal itu.</p><p>Selain gambar, tag <code>&lt;a href=\"...\"&gt;</code> (singkatan <em>Anchor</em>) dipakai membuat link/tautan ke halaman lain. Isi teks di antara <code>&lt;a&gt;</code> dan <code>&lt;/a&gt;</code> adalah teks yang bisa diklik.</p>",
      "contoh_kode": "<!-- Gambar dari internet (pakai link URL) -->\n<img src=\"https://via.placeholder.com/150\" alt=\"Gambar contoh ukuran 150x150 piksel\">\n\n<!-- Gambar dari file di komputer sendiri (kalau ada file foto.jpg di folder yang sama) -->\n<!-- <img src=\"foto.jpg\" alt=\"Foto saya\"> -->\n\n<br>\n<a href=\"https://developer.mozilla.org\">Kunjungi MDN</a>",
      "starter_code": {
        "html": "<img src=\"https://via.placeholder.com/150\" alt=\"Gambar contoh\">\n<br>\n<a href=\"https://developer.mozilla.org\">Kunjungi MDN</a>",
        "css": "",
        "js": ""
      },
      "tantangan": "Tambahkan <img> untuk foto profil (boleh pakai https://via.placeholder.com/150, atau ganti angka 150 dengan ukuran lain untuk lihat efeknya) di dekat nama, isi alt dengan deskripsi singkat. Lalu tambahkan satu <a> menuju akun GitHub/media sosialmu yang dibuka di tab baru dengan target=\"_blank\"."
    },
    {
      "id": "html-dasar-9",
      "judul": "List (Daftar)",
      "penjelasan": "Ada dua jenis daftar utama: <code>&lt;ul&gt;</code> untuk daftar tanpa urutan (bullet) dan <code>&lt;ol&gt;</code> untuk daftar berurutan (nomor). Setiap item ditulis dengan <code>&lt;li&gt;</code>.",
      "contoh_kode": "<h3>Belanja</h3>\n<ul>\n  <li>Telur</li>\n  <li>Susu</li>\n  <li>Roti</li>\n</ul>\n\n<h3>Langkah Memasak</h3>\n<ol>\n  <li>Panaskan minyak</li>\n  <li>Masukkan bumbu</li>\n  <li>Aduk rata</li>\n</ol>",
      "starter_code": {
        "html": "<h3>Belanja</h3>\n<ul>\n  <li>Telur</li>\n  <li>Susu</li>\n</ul>",
        "css": "",
        "js": ""
      },
      "tantangan": "Tambahkan <h2>Keahlian</h2> diikuti <ul> berisi minimal 4 skill (teknis atau non-teknis) yang kamu punya atau sedang dipelajari."
    },
    {
      "id": "html-dasar-10",
      "judul": "Form Dasar",
      "penjelasan": "Form dipakai untuk mengambil input dari pengguna. <code>&lt;input&gt;</code> untuk isian teks/angka/dll, <code>&lt;label&gt;</code> untuk keterangan, dan <code>&lt;button&gt;</code> untuk tombol aksi.",
      "contoh_kode": "<form>\n  <label for=\"nama\">Nama:</label>\n  <input type=\"text\" id=\"nama\" placeholder=\"Masukkan nama\">\n  <br><br>\n  <label for=\"email\">Email:</label>\n  <input type=\"email\" id=\"email\" placeholder=\"nama@email.com\">\n  <br><br>\n  <button type=\"button\">Kirim</button>\n</form>",
      "starter_code": {
        "html": "<form>\n  <label for=\"nama\">Nama:</label>\n  <input type=\"text\" id=\"nama\" placeholder=\"Masukkan nama\">\n  <br><br>\n  <button type=\"button\">Kirim</button>\n</form>",
        "css": "",
        "js": ""
      },
      "tantangan": "Tambahkan <h2>Hubungi Saya</h2> diikuti form sederhana dengan input nama dan email plus tombol kirim, sebagai bagian kontak di portofoliomu."
    },
    {
      "id": "html-dasar-11",
      "judul": "Div dan Span (Elemen Blok vs Inline)",
      "penjelasan": "<code>&lt;div&gt;</code> adalah elemen blok generik (selalu mulai baris baru, biasa dipakai membungkus bagian besar halaman), sedangkan <code>&lt;span&gt;</code> adalah elemen inline generik (tidak memutus baris, biasa dipakai membungkus sebagian kecil teks). Keduanya tidak punya makna khusus, dipakai bersama <code>class</code>/<code>id</code> untuk keperluan styling atau JS.",
      "contoh_kode": "<div class=\"kotak\">\n  <p>Ini di dalam div. Div membuat baris baru.</p>\n  <p>Kata <span class=\"sorot\">penting</span> ini ditandai pakai span, tanpa memutus baris.</p>\n</div>",
      "starter_code": {
        "html": "<div class=\"kotak\">\n  <p>Ini di dalam div.</p>\n  <p>Kata <span class=\"sorot\">penting</span> ditandai pakai span.</p>\n</div>",
        "css": ".kotak {\n  border: 1px solid #999;\n  padding: 10px;\n}\n\n.sorot {\n  background: yellow;\n}",
        "js": ""
      },
      "tantangan": "Bungkus tiap bagian portofoliomu (Tentang Saya, Keahlian, Riwayat Pendidikan, Hubungi Saya) dengan <div class=\"section\">, lalu beri <span class=\"sorot\"> pada satu skill favoritmu di daftar Keahlian."
    },
    {
      "id": "html-dasar-12",
      "judul": "Format Teks Inline",
      "penjelasan": "HTML punya banyak tag kecil untuk menekankan teks: <code>&lt;strong&gt;</code> (tebal, penting), <code>&lt;em&gt;</code> (miring, penekanan), <code>&lt;mark&gt;</code> (highlight), <code>&lt;small&gt;</code> (teks kecil), <code>&lt;del&gt;</code> (dicoret, dihapus), <code>&lt;sub&gt;</code>/<code>&lt;sup&gt;</code> (subskrip/superskrip), dan <code>&lt;blockquote&gt;</code> untuk kutipan panjang.",
      "contoh_kode": "<p><strong>Penting:</strong> promo berakhir <em>hari ini</em>!</p>\n<p>Harga <del>Rp100.000</del> <mark>Rp75.000</mark></p>\n<p>Rumus air: H<sub>2</sub>O, dan 5<sup>2</sup> = 25</p>\n<blockquote>Belajar sedikit tiap hari lebih baik daripada banyak sekali-sekali.</blockquote>\n<p><small>Syarat dan ketentuan berlaku.</small></p>",
      "starter_code": {
        "html": "<p><strong>Penting:</strong> promo berakhir <em>hari ini</em>!</p>\n<p>Harga <del>Rp100.000</del> <mark>Rp75.000</mark></p>\n<blockquote>Belajar sedikit tiap hari lebih baik daripada banyak sekali-sekali.</blockquote>",
        "css": "",
        "js": ""
      },
      "tantangan": "Di bagian Tentang Saya portofoliomu: buat satu kata jadi <strong>, satu frasa jadi <em>, dan tambahkan <blockquote> berisi motto atau prinsip hidupmu."
    },
    {
      "id": "html-dasar-13",
      "judul": "Elemen Semantik HTML5",
      "penjelasan": "Elemen semantik memberi makna pada struktur halaman, bukan cuma kotak kosong seperti <code>&lt;div&gt;</code>. Yang umum dipakai: <code>&lt;header&gt;</code> (kepala halaman/section), <code>&lt;nav&gt;</code> (navigasi), <code>&lt;main&gt;</code> (konten utama), <code>&lt;section&gt;</code> (bagian topik), <code>&lt;article&gt;</code> (konten mandiri), <code>&lt;aside&gt;</code> (info tambahan), dan <code>&lt;footer&gt;</code> (kaki halaman). Memakainya membantu SEO dan aksesibilitas.",
      "contoh_kode": "<header>\n  <h1>Blog Belajar Ngoding</h1>\n  <nav>\n    <a href=\"#\">Beranda</a> | <a href=\"#\">Artikel</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h2>Kenapa Harus Belajar HTML?</h2>\n    <p>Karena HTML adalah fondasi setiap halaman web.</p>\n  </article>\n  <aside>\n    <p>Tips: latihan tiap hari 15 menit saja cukup.</p>\n  </aside>\n</main>\n<footer>\n  <p>&copy; 2026 Blog Belajar Ngoding</p>\n</footer>",
      "starter_code": {
        "html": "<header>\n  <h1>Blog Belajar Ngoding</h1>\n  <nav>\n    <a href=\"#\">Beranda</a> | <a href=\"#\">Artikel</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h2>Kenapa Harus Belajar HTML?</h2>\n    <p>Karena HTML adalah fondasi setiap halaman web.</p>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 Blog Belajar Ngoding</p>\n</footer>",
        "css": "header, footer {\n  background: #eee;\n  padding: 10px;\n}\n\nnav a {\n  margin-right: 8px;\n}",
        "js": ""
      },
      "tantangan": "Rapikan struktur portofoliomu: bungkus nama/tagline dengan <header>, seluruh section (Tentang Saya, Keahlian, Riwayat Pendidikan, Hubungi Saya) dengan <main>, dan tambahkan <footer> berisi teks copyright di akhir halaman."
    },
    {
      "id": "html-dasar-14",
      "judul": "Atribut Umum & Data Attribute",
      "penjelasan": "Selain <code>id</code> dan <code>class</code>, hampir semua elemen bisa punya atribut <code>title</code> (tooltip saat hover) dan atribut custom <code>data-*</code> untuk menyimpan data tambahan yang nanti bisa dibaca lewat JavaScript (<code>element.dataset.namaAtribut</code>).",
      "contoh_kode": "<button id=\"beli-btn\" data-produk-id=\"42\" data-harga=\"15000\" title=\"Klik untuk membeli\">Beli</button>\n\n<script>\n  const btn = document.querySelector(\"#beli-btn\");\n  btn.addEventListener(\"click\", function () {\n    console.log(\"Produk ID:\", btn.dataset.produkId, \"Harga:\", btn.dataset.harga);\n  });\n</script>",
      "starter_code": {
        "html": "<button id=\"beli-btn\" data-produk-id=\"42\" data-harga=\"15000\" title=\"Klik untuk membeli\">Beli</button>",
        "css": "",
        "js": "document.querySelector(\"#beli-btn\").addEventListener(\"click\", function () {\n  const btn = document.querySelector(\"#beli-btn\");\n  console.log(\"Produk ID:\", btn.dataset.produkId, \"Harga:\", btn.dataset.harga);\n});"
      },
      "tantangan": "Tambahkan atribut data-level (isi \"pemula\", \"menengah\", atau \"mahir\") pada tiap <li> di daftar Keahlian portofoliomu — ini akan dipakai lagi nanti di lesson JavaScript."
    },
    {
      "id": "html-dasar-15",
      "judul": "Form Lanjutan",
      "penjelasan": "Selain <code>&lt;input&gt;</code>, form punya <code>&lt;textarea&gt;</code> untuk teks panjang, <code>&lt;select&gt;</code> dengan <code>&lt;option&gt;</code> untuk pilihan dropdown, serta <code>&lt;input type=\"checkbox\"&gt;</code> (bisa pilih banyak) dan <code>&lt;input type=\"radio\"&gt;</code> (hanya satu pilihan per grup, dikelompokkan lewat atribut <code>name</code> yang sama).",
      "contoh_kode": "<label for=\"pesan\">Pesan:</label>\n<textarea id=\"pesan\" rows=\"3\"></textarea>\n\n<label for=\"kota\">Kota:</label>\n<select id=\"kota\">\n  <option value=\"jkt\">Jakarta</option>\n  <option value=\"bdg\">Bandung</option>\n</select>\n\n<label><input type=\"checkbox\" name=\"hobi\" value=\"baca\"> Membaca</label>\n<label><input type=\"checkbox\" name=\"hobi\" value=\"olahraga\"> Olahraga</label>\n\n<p>Jenis kelamin:</p>\n<label><input type=\"radio\" name=\"gender\" value=\"pria\"> Pria</label>\n<label><input type=\"radio\" name=\"gender\" value=\"wanita\"> Wanita</label>",
      "starter_code": {
        "html": "<label for=\"pesan\">Pesan:</label>\n<textarea id=\"pesan\" rows=\"3\"></textarea>\n<br>\n<label for=\"kota\">Kota:</label>\n<select id=\"kota\">\n  <option value=\"jkt\">Jakarta</option>\n  <option value=\"bdg\">Bandung</option>\n</select>",
        "css": "",
        "js": ""
      },
      "tantangan": "Upgrade form Kontak di portofoliomu: tambahkan <textarea> untuk pesan dan <select> untuk memilih topik pesan (misal \"Kerja Sama\", \"Pertanyaan\", \"Lainnya\")."
    },
    {
      "id": "html-dasar-16",
      "judul": "Tabel Lanjutan",
      "penjelasan": "Sel tabel bisa digabung dengan <code>colspan</code> (gabung kolom) atau <code>rowspan</code> (gabung baris). Tabel yang lebih rapi juga membagi struktur jadi <code>&lt;thead&gt;</code> (header), <code>&lt;tbody&gt;</code> (isi), dan <code>&lt;tfoot&gt;</code> (footer, misalnya total).",
      "contoh_kode": "<table border=\"1\">\n  <thead>\n    <tr>\n      <th>Nama</th>\n      <th colspan=\"2\">Nilai</th>\n    </tr>\n    <tr>\n      <th></th>\n      <th>UTS</th>\n      <th>UAS</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Andi</td>\n      <td>80</td>\n      <td>90</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td colspan=\"3\">Total 1 siswa</td>\n    </tr>\n  </tfoot>\n</table>",
      "starter_code": {
        "html": "<table border=\"1\">\n  <thead>\n    <tr>\n      <th>Nama</th>\n      <th colspan=\"2\">Nilai</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Andi</td>\n      <td>80</td>\n      <td>90</td>\n    </tr>\n  </tbody>\n</table>",
        "css": "",
        "js": ""
      },
      "tantangan": "Upgrade tabel Pendidikan di portofoliomu: bungkus baris judul dengan <thead>, isi datanya dengan <tbody>, lalu tambahkan <tfoot> berisi ringkasan singkat."
    },
    {
      "id": "html-dasar-17",
      "judul": "Audio, Video, iFrame & Komentar HTML",
      "penjelasan": "Tag <code>&lt;audio&gt;</code> dan <code>&lt;video&gt;</code> (dengan atribut <code>controls</code>) memutar media langsung di halaman. <code>&lt;iframe&gt;</code> menyisipkan halaman/konten dari sumber lain (misal peta atau video YouTube). Komentar HTML ditulis <code>&lt;!-- seperti ini --&gt;</code> dan tidak akan tampil di halaman, berguna untuk catatan bagi diri sendiri.",
      "contoh_kode": "<!-- Ini komentar, tidak tampil di halaman -->\n<video controls width=\"250\">\n  <source src=\"video.mp4\" type=\"video/mp4\">\n  Browser tidak mendukung video.\n</video>\n\n<audio controls>\n  <source src=\"lagu.mp3\" type=\"audio/mpeg\">\n  Browser tidak mendukung audio.\n</audio>",
      "starter_code": {
        "html": "<!-- Komentar contoh -->\n<p>Elemen audio/video butuh file media asli untuk bisa diputar, tapi struktur tag-nya seperti ini:</p>\n<pre>&lt;video controls&gt;\n  &lt;source src=\"video.mp4\" type=\"video/mp4\"&gt;\n&lt;/video&gt;</pre>",
        "css": "",
        "js": ""
      },
      "tantangan": "Tambahkan komentar HTML (mis. <!-- Section: Kontak -->) di atas tiap section besar portofoliomu untuk menandai bagiannya — dokumentasi ini akan memudahkanmu sendiri saat kodenya makin panjang."
    }
  ]
};
