(function () {
  // Kamus kepanjangan & arti singkat tiap tag HTML yang dipakai di seluruh lesson.
  var TAG_DICTIONARY = {
    a: { panjang: "Anchor", arti: "jangkar — dulu dipakai untuk \"menambatkan\" halaman, sekarang jadi tag untuk membuat link/tautan" },
    article: { panjang: "Article", arti: "artikel — konten mandiri yang bisa berdiri sendiri, misal satu postingan blog" },
    aside: { panjang: "Aside", arti: "sampingan — konten tambahan di luar isi utama, misal sidebar" },
    audio: { panjang: "Audio", arti: "memutar file suara" },
    blockquote: { panjang: "Block Quote", arti: "kutipan blok — menampilkan kutipan panjang dari sumber lain" },
    body: { panjang: "Body", arti: "badan/isi — bagian halaman yang benar-benar tampil ke pengguna" },
    br: { panjang: "Break", arti: "baris baru — pindah baris tanpa membuat paragraf baru" },
    button: { panjang: "Button", arti: "tombol yang bisa diklik" },
    circle: { panjang: "Circle", arti: "lingkaran — bagian dari SVG untuk menggambar lingkaran" },
    code: { panjang: "Code", arti: "menandai teks sebagai kode program" },
    datalist: { panjang: "Data List", arti: "daftar saran/autocomplete untuk sebuah input" },
    del: { panjang: "Delete", arti: "menampilkan teks yang dicoret/dihapus" },
    details: { panjang: "Details", arti: "detail/rincian — kotak konten yang bisa dibuka-tutup" },
    div: { panjang: "Division", arti: "pembagian — kotak pembungkus generik untuk membagi halaman jadi bagian-bagian" },
    em: { panjang: "Emphasis", arti: "penekanan — menekankan teks, biasanya tampil miring" },
    fieldset: { panjang: "Field Set", arti: "kumpulan bidang — mengelompokkan beberapa input form" },
    footer: { panjang: "Footer", arti: "kaki halaman — bagian bawah halaman/section" },
    form: { panjang: "Form", arti: "formulir — membungkus input untuk mengambil data dari pengguna" },
    h1: { panjang: "Heading 1", arti: "judul level 1 — paling besar/paling penting" },
    h2: { panjang: "Heading 2", arti: "judul level 2 — sub judul" },
    h3: { panjang: "Heading 3", arti: "judul level 3" },
    h4: { panjang: "Heading 4", arti: "judul level 4" },
    h5: { panjang: "Heading 5", arti: "judul level 5" },
    h6: { panjang: "Heading 6", arti: "judul level 6 — paling kecil" },
    head: { panjang: "Head", arti: "kepala — bagian info halaman yang tidak tampil di layar" },
    header: { panjang: "Header", arti: "kepala bagian — bagian atas halaman/section, biasa berisi judul/navigasi" },
    html: { panjang: "HyperText Markup Language", arti: "bahasa markup penyusun halaman web, sekaligus tag pembungkus seluruh dokumen" },
    iframe: { panjang: "Inline Frame", arti: "bingkai sebaris — menyisipkan halaman/konten dari sumber lain" },
    img: { panjang: "Image", arti: "gambar — menampilkan gambar di halaman" },
    input: { panjang: "Input", arti: "masukan — kotak isian untuk menerima data dari pengguna" },
    label: { panjang: "Label", arti: "teks keterangan untuk sebuah input" },
    legend: { panjang: "Legend", arti: "keterangan/judul untuk sekumpulan input (fieldset)" },
    li: { panjang: "List Item", arti: "item daftar — satu butir dalam daftar (ul/ol)" },
    line: { panjang: "Line", arti: "garis — bagian dari SVG untuk menggambar garis lurus" },
    link: { panjang: "Link", arti: "menghubungkan halaman ke file eksternal, misalnya CSS" },
    main: { panjang: "Main", arti: "konten utama halaman" },
    mark: { panjang: "Mark", arti: "tanda — menyorot/highlight teks" },
    meta: { panjang: "Metadata", arti: "info tambahan tentang halaman yang tidak tampil, misal deskripsi/viewport" },
    meter: { panjang: "Meter", arti: "alat ukur — menampilkan nilai dalam suatu rentang" },
    nav: { panjang: "Navigation", arti: "navigasi — kumpulan link navigasi" },
    ol: { panjang: "Ordered List", arti: "daftar berurutan — daftar bernomor" },
    option: { panjang: "Option", arti: "satu pilihan di dalam <select> atau <datalist>" },
    p: { panjang: "Paragraph", arti: "paragraf — teks paragraf biasa" },
    pre: { panjang: "Preformatted Text", arti: "teks terformat — ditampilkan apa adanya, termasuk spasi/baris" },
    progress: { panjang: "Progress", arti: "progress bar/indikator kemajuan" },
    rect: { panjang: "Rectangle", arti: "persegi panjang — bagian dari SVG untuk menggambar kotak" },
    script: { panjang: "Script", arti: "menyisipkan kode JavaScript" },
    section: { panjang: "Section", arti: "satu bagian/topik dalam halaman" },
    select: { panjang: "Select", arti: "pilih — dropdown pilihan" },
    small: { panjang: "Small", arti: "teks berukuran kecil, biasa untuk keterangan tambahan" },
    source: { panjang: "Source", arti: "menentukan file sumber untuk audio/video" },
    span: { panjang: "Span", arti: "rentang — kotak pembungkus generik untuk sebagian kecil teks (inline)" },
    strong: { panjang: "Strong", arti: "kuat/tegas — menandai teks penting, biasa tampil tebal" },
    style: { panjang: "Style", arti: "menyisipkan kode CSS" },
    sub: { panjang: "Subscript", arti: "teks kecil di bawah baris, misal H2O" },
    summary: { panjang: "Summary", arti: "ringkasan — judul yang selalu terlihat pada <details>" },
    sup: { panjang: "Superscript", arti: "teks kecil di atas baris, misal pangkat" },
    svg: { panjang: "Scalable Vector Graphics", arti: "grafik vektor yang bisa diperbesar tanpa pecah" },
    table: { panjang: "Table", arti: "membuat tabel" },
    tbody: { panjang: "Table Body", arti: "isi tabel — bagian data tabel" },
    td: { panjang: "Table Data", arti: "satu sel data dalam tabel" },
    textarea: { panjang: "Text Area", arti: "kotak isian teks panjang/banyak baris" },
    tfoot: { panjang: "Table Foot", arti: "kaki tabel — bagian bawah tabel, misal ringkasan" },
    th: { panjang: "Table Header", arti: "sel judul kolom/baris tabel" },
    thead: { panjang: "Table Head", arti: "kepala tabel — bagian judul tabel" },
    title: { panjang: "Title", arti: "judul halaman yang tampil di tab browser" },
    tr: { panjang: "Table Row", arti: "satu baris dalam tabel" },
    ul: { panjang: "Unordered List", arti: "daftar tanpa urutan — daftar dengan bullet" },
    video: { panjang: "Video", arti: "memutar file video" }
  };

  // Cari semua tag yang disebut di penjelasan (pola &lt;tag&gt;) dan contoh_kode (pola <tag>) sebuah lesson.
  function extractTags(lesson) {
    var found = [];
    var seen = {};

    function scan(text, regex) {
      if (!text) return;
      var m;
      regex.lastIndex = 0;
      while ((m = regex.exec(text))) {
        var tag = m[1].toLowerCase();
        if (!seen[tag] && TAG_DICTIONARY[tag]) {
          seen[tag] = true;
          found.push(tag);
        }
      }
    }

    scan(lesson.penjelasan, /&lt;\/?([a-zA-Z][a-zA-Z0-9]*)/g);
    scan(lesson.contoh_kode, /<\/?([a-zA-Z][a-zA-Z0-9]*)/g);

    return found;
  }

  function renderGlossary(lesson) {
    var tags = extractTags(lesson);
    if (tags.length === 0) return "";

    var items = tags
      .map(function (tag) {
        var entry = TAG_DICTIONARY[tag];
        return (
          '<li><code>&lt;' + tag + "&gt;</code> = <strong>" + entry.panjang + "</strong> (" + entry.arti + ")</li>"
        );
      })
      .join("");

    return (
      '<div class="tag-glossary">' +
      "<h4>📖 Kamus Tag di Lesson Ini</h4>" +
      "<ul>" + items + "</ul>" +
      "</div>"
    );
  }

  window.LearnWebTagGlossary = {
    renderGlossary: renderGlossary,
    TAG_DICTIONARY: TAG_DICTIONARY
  };
})();
