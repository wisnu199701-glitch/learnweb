window.LEARNWEB_LESSONS = window.LEARNWEB_LESSONS || {};
window.LEARNWEB_LESSONS["javascript-dasar"] = {
  "modul": "javascript-dasar",
  "judul": "JavaScript Dasar",
  "lessons": [
    {
      "id": "javascript-dasar-1",
      "judul": "Variabel dan Tipe Data",
      "penjelasan": "Variabel menyimpan nilai memakai <code>let</code> (bisa diubah) atau <code>const</code> (tetap). Tipe data dasar: <code>string</code> (teks), <code>number</code> (angka), <code>boolean</code> (true/false). Gunakan <code>console.log()</code> untuk melihat nilai di console.",
      "contoh_kode": "let nama = \"Budi\";\nconst umur = 20;\nlet sudahLulus = false;\n\nconsole.log(nama, umur, sudahLulus);",
      "starter_code": {
        "html": "<p>Buka console browser untuk lihat hasil (klik kanan > Inspect > Console).</p>",
        "css": "",
        "js": "let nama = \"Budi\";\nconst umur = 20;\nlet sudahLulus = false;\n\nconsole.log(nama, umur, sudahLulus);"
      },
      "tantangan": "Buat beberapa variabel di portofoliomu berisi data dirimu (nama, tahunLahir), lalu gunakan salah satunya untuk menampilkan tahun saat ini secara otomatis di teks footer (petunjuk: new Date().getFullYear())."
    },
    {
      "id": "javascript-dasar-2",
      "judul": "Operator dan Kondisi",
      "penjelasan": "Operator perbandingan (<code>&gt;</code>, <code>&lt;</code>, <code>===</code>) menghasilkan true/false, dipakai dalam <code>if...else</code> untuk mengambil keputusan berbeda tergantung kondisi.",
      "contoh_kode": "let nilai = 75;\n\nif (nilai >= 80) {\n  console.log(\"Nilai A\");\n} else if (nilai >= 60) {\n  console.log(\"Nilai B\");\n} else {\n  console.log(\"Nilai C\");\n}",
      "starter_code": {
        "html": "<p>Buka console untuk melihat hasil.</p>",
        "css": "",
        "js": "let nilai = 75;\n\nif (nilai >= 80) {\n  console.log(\"Nilai A\");\n} else if (nilai >= 60) {\n  console.log(\"Nilai B\");\n} else {\n  console.log(\"Nilai C\");\n}"
      },
      "tantangan": "Buat pesan sapaan otomatis di bagian atas portofoliomu yang berubah tergantung jam saat ini (\"Selamat Pagi\"/\"Selamat Siang\"/\"Selamat Malam\") memakai if...else dan new Date().getHours()."
    },
    {
      "id": "javascript-dasar-3",
      "judul": "Perulangan (Loop)",
      "penjelasan": "Loop mengulang kode beberapa kali tanpa menulis ulang. <code>for</code> loop punya 3 bagian: nilai awal, syarat berhenti, dan perubahan tiap putaran.",
      "contoh_kode": "for (let i = 1; i <= 5; i++) {\n  console.log(\"Perulangan ke-\" + i);\n}",
      "starter_code": {
        "html": "<p>Buka console untuk melihat hasil.</p>",
        "css": "",
        "js": "for (let i = 1; i <= 5; i++) {\n  console.log(\"Perulangan ke-\" + i);\n}"
      },
      "tantangan": "Buat array berisi daftar skill-mu, lalu gunakan for loop untuk menghasilkan elemen <li> secara dinamis dan menampilkannya ke dalam <ul> Keahlian lewat document.querySelector + innerHTML."
    },
    {
      "id": "javascript-dasar-4",
      "judul": "Fungsi",
      "penjelasan": "Fungsi membungkus sekumpulan kode agar bisa dipakai ulang. Fungsi bisa menerima parameter (input) dan mengembalikan nilai dengan <code>return</code>.",
      "contoh_kode": "function sapa(nama) {\n  return \"Halo, \" + nama + \"!\";\n}\n\nconsole.log(sapa(\"Ani\"));\nconsole.log(sapa(\"Rudi\"));",
      "starter_code": {
        "html": "<p>Buka console untuk melihat hasil.</p>",
        "css": "",
        "js": "function sapa(nama) {\n  return \"Halo, \" + nama + \"!\";\n}\n\nconsole.log(sapa(\"Ani\"));\nconsole.log(sapa(\"Rudi\"));"
      },
      "tantangan": "Bungkus logika sapaan otomatis dari lesson sebelumnya ke dalam fungsi bernama getGreeting(), lalu panggil fungsi itu untuk menampilkan hasilnya di halaman."
    },
    {
      "id": "javascript-dasar-5",
      "judul": "Manipulasi DOM",
      "penjelasan": "DOM (Document Object Model) adalah representasi HTML yang bisa diubah lewat JS. <code>document.querySelector()</code> mencari elemen, lalu properti seperti <code>textContent</code> atau <code>style</code> bisa diubah untuk mengubah tampilan.",
      "contoh_kode": "<p id=\"teks\">Teks Awal</p>\n\n<script>\n  const el = document.querySelector(\"#teks\");\n  el.textContent = \"Teks Sudah Diubah!\";\n  el.style.color = \"blue\";\n</script>",
      "starter_code": {
        "html": "<p id=\"teks\">Teks Awal</p>",
        "css": "",
        "js": "const el = document.querySelector(\"#teks\");\nel.textContent = \"Teks Sudah Diubah!\";\nel.style.color = \"blue\";"
      },
      "tantangan": "Tampilkan tahun saat ini secara otomatis di teks copyright <footer> portofoliomu lewat document.querySelector dan textContent."
    },
    {
      "id": "javascript-dasar-6",
      "judul": "Event Handling",
      "penjelasan": "Event membuat kode berjalan saat pengguna melakukan sesuatu, misalnya klik tombol. Gunakan <code>addEventListener(\"click\", fungsi)</code> untuk menjalankan fungsi saat elemen diklik.",
      "contoh_kode": "<button id=\"tombol\">Klik Aku</button>\n<p id=\"hasil\">Belum diklik</p>\n\n<script>\n  document.querySelector(\"#tombol\").addEventListener(\"click\", function () {\n    document.querySelector(\"#hasil\").textContent = \"Tombol sudah diklik!\";\n  });\n</script>",
      "starter_code": {
        "html": "<button id=\"tombol\">Klik Aku</button>\n<p id=\"hasil\">Belum diklik</p>",
        "css": "",
        "js": "document.querySelector(\"#tombol\").addEventListener(\"click\", function () {\n  document.querySelector(\"#hasil\").textContent = \"Tombol sudah diklik!\";\n});"
      },
      "tantangan": "Tambahkan tombol \"Baca Selengkapnya\" di bagian Tentang Saya portofoliomu yang saat diklik menyembunyikan/menampilkan paragraf bio yang lebih panjang."
    },
    {
      "id": "javascript-dasar-7",
      "judul": "Array Dasar",
      "penjelasan": "Array menyimpan banyak nilai dalam satu variabel, ditulis dengan kurung siku <code>[]</code>. Setiap item punya index dimulai dari 0. <code>array.length</code> memberi jumlah item, <code>array.push()</code> menambah item di akhir, dan <code>array.pop()</code> menghapus item terakhir.",
      "contoh_kode": "let buah = [\"Apel\", \"Jeruk\", \"Mangga\"];\n\nconsole.log(buah[0]);\nconsole.log(buah.length);\n\nbuah.push(\"Pisang\");\nconsole.log(buah);\n\nbuah.pop();\nconsole.log(buah);",
      "starter_code": {
        "html": "<p>Buka console untuk melihat hasil.</p>",
        "css": "",
        "js": "let buah = [\"Apel\", \"Jeruk\", \"Mangga\"];\n\nconsole.log(buah[0]);\nconsole.log(buah.length);\n\nbuah.push(\"Pisang\");\nconsole.log(buah);"
      },
      "tantangan": "Simpan daftar skill portofoliomu sebagai array JS, lalu tampilkan jumlah totalnya (misal \"Saya punya 6 skill\") di bagian Keahlian."
    },
    {
      "id": "javascript-dasar-8",
      "judul": "Array Method Lanjutan",
      "penjelasan": "<code>forEach()</code> menjalankan fungsi untuk tiap item array. <code>map()</code> membuat array baru hasil transformasi tiap item. <code>filter()</code> membuat array baru berisi item yang lolos syarat. Ketiganya menerima sebuah fungsi sebagai argumen.",
      "contoh_kode": "let angka = [1, 2, 3, 4, 5];\n\nangka.forEach(function (n) {\n  console.log(\"Item:\", n);\n});\n\nlet dikali2 = angka.map(function (n) {\n  return n * 2;\n});\nconsole.log(dikali2);\n\nlet genap = angka.filter(function (n) {\n  return n % 2 === 0;\n});\nconsole.log(genap);",
      "starter_code": {
        "html": "<p>Buka console untuk melihat hasil.</p>",
        "css": "",
        "js": "let angka = [1, 2, 3, 4, 5];\n\nlet dikali2 = angka.map(function (n) {\n  return n * 2;\n});\nconsole.log(dikali2);\n\nlet genap = angka.filter(function (n) {\n  return n % 2 === 0;\n});\nconsole.log(genap);"
      },
      "tantangan": "Tambahkan properti level pada tiap skill (array of string sederhana dulu, misal awali dengan array level terpisah), lalu gunakan filter() untuk menyorot skill level \"mahir\" di section terpisah."
    },
    {
      "id": "javascript-dasar-9",
      "judul": "Object (Objek)",
      "penjelasan": "Object menyimpan data dalam pasangan <code>key: value</code>, ditulis dengan kurung kurawal <code>{}</code>. Nilai bisa diakses dengan titik (<code>obj.nama</code>) atau kurung siku (<code>obj[\"nama\"]</code>).",
      "contoh_kode": "let siswa = {\n  nama: \"Dewi\",\n  umur: 17,\n  sekolah: \"SMA 1\"\n};\n\nconsole.log(siswa.nama);\nconsole.log(siswa[\"umur\"]);\n\nsiswa.kelas = \"XII\";\nconsole.log(siswa);",
      "starter_code": {
        "html": "<p>Buka console untuk melihat hasil.</p>",
        "css": "",
        "js": "let siswa = {\n  nama: \"Dewi\",\n  umur: 17,\n  sekolah: \"SMA 1\"\n};\n\nconsole.log(siswa.nama);\nconsole.log(siswa.umur);"
      },
      "tantangan": "Ubah array skill portofoliomu menjadi array of object { nama, level }, lalu render ulang daftar Keahlian berdasarkan properti object tersebut."
    },
    {
      "id": "javascript-dasar-10",
      "judul": "Template Literal & Arrow Function",
      "penjelasan": "Template literal (memakai backtick <code>`</code>) memudahkan menyisipkan variabel ke string dengan <code>${variabel}</code>, tanpa perlu tanda plus (+). Arrow function adalah cara ringkas menulis fungsi: <code>(a, b) =&gt; a + b</code> setara dengan function biasa.",
      "contoh_kode": "let nama = \"Sari\";\nlet umur = 22;\n\nconsole.log(`Nama saya ${nama}, umur ${umur} tahun.`);\n\nconst tambah = (a, b) => a + b;\nconsole.log(tambah(5, 3));",
      "starter_code": {
        "html": "<p>Buka console untuk melihat hasil.</p>",
        "css": "",
        "js": "let nama = \"Sari\";\nlet umur = 22;\n\nconsole.log(`Nama saya ${nama}, umur ${umur} tahun.`);\n\nconst tambah = (a, b) => a + b;\nconsole.log(tambah(5, 3));"
      },
      "tantangan": "Refactor kode render daftar Keahlian di portofoliomu memakai arrow function dan template literal untuk membentuk HTML tiap item skill."
    },
    {
      "id": "javascript-dasar-11",
      "judul": "Switch Statement & Ternary Operator",
      "penjelasan": "<code>switch</code> cocok dipakai kalau ada banyak kemungkinan nilai untuk satu variabel, alternatif dari if...else if yang panjang. Ternary operator (<code>kondisi ? nilaiJikaBenar : nilaiJikaSalah</code>) adalah cara ringkas menulis if-else dalam satu baris.",
      "contoh_kode": "let hari = 3;\n\nswitch (hari) {\n  case 1:\n    console.log(\"Senin\");\n    break;\n  case 2:\n    console.log(\"Selasa\");\n    break;\n  case 3:\n    console.log(\"Rabu\");\n    break;\n  default:\n    console.log(\"Hari tidak dikenal\");\n}\n\nlet umur = 20;\nlet status = umur >= 18 ? \"Dewasa\" : \"Anak-anak\";\nconsole.log(status);",
      "starter_code": {
        "html": "<p>Buka console untuk melihat hasil.</p>",
        "css": "",
        "js": "let hari = 3;\n\nswitch (hari) {\n  case 1:\n    console.log(\"Senin\");\n    break;\n  case 2:\n    console.log(\"Selasa\");\n    break;\n  case 3:\n    console.log(\"Rabu\");\n    break;\n  default:\n    console.log(\"Hari tidak dikenal\");\n}"
      },
      "tantangan": "Tentukan warna badge tiap skill di portofoliomu berdasarkan level-nya memakai switch atau ternary (misal mahir = hijau, menengah = kuning, pemula = abu-abu)."
    },
    {
      "id": "javascript-dasar-12",
      "judul": "While Loop & Do-While",
      "penjelasan": "<code>while</code> mengulang kode selama syaratnya masih benar, cocok kalau jumlah perulangan tidak diketahui pasti di awal. <code>do...while</code> mirip, bedanya kode di dalam <code>do</code> pasti dijalankan minimal sekali sebelum syarat dicek.",
      "contoh_kode": "let i = 1;\nwhile (i <= 5) {\n  console.log(\"While ke-\" + i);\n  i++;\n}\n\nlet j = 1;\ndo {\n  console.log(\"Do-while ke-\" + j);\n  j++;\n} while (j <= 3);",
      "starter_code": {
        "html": "<p>Buka console untuk melihat hasil.</p>",
        "css": "",
        "js": "let i = 1;\nwhile (i <= 5) {\n  console.log(\"While ke-\" + i);\n  i++;\n}"
      },
      "tantangan": "Buat variabel penghitung sederhana yang menampilkan pesan \"Memuat portofolio...\" beberapa kali memakai while loop, sebagai simulasi loading singkat sebelum konten utama muncul."
    },
    {
      "id": "javascript-dasar-13",
      "judul": "Error Handling (try...catch)",
      "penjelasan": "<code>try...catch</code> menangkap error supaya program tidak langsung berhenti total saat terjadi kesalahan. Kode yang berpotensi error diletakkan di dalam <code>try</code>, dan penanganannya di dalam <code>catch</code>.",
      "contoh_kode": "function bagi(a, b) {\n  if (b === 0) {\n    throw new Error(\"Tidak bisa membagi dengan nol\");\n  }\n  return a / b;\n}\n\ntry {\n  console.log(bagi(10, 2));\n  console.log(bagi(10, 0));\n} catch (error) {\n  console.log(\"Terjadi error:\", error.message);\n}\nconsole.log(\"Program tetap lanjut jalan.\");",
      "starter_code": {
        "html": "<p>Buka console untuk melihat hasil.</p>",
        "css": "",
        "js": "function bagi(a, b) {\n  if (b === 0) {\n    throw new Error(\"Tidak bisa membagi dengan nol\");\n  }\n  return a / b;\n}\n\ntry {\n  console.log(bagi(10, 0));\n} catch (error) {\n  console.log(\"Terjadi error:\", error.message);\n}"
      },
      "tantangan": "Tambahkan validasi sederhana pada form Kontak portofoliomu: kalau nama masih kosong saat tombol kirim diklik, throw error dan tangkap dengan try/catch untuk menampilkan pesan peringatan ke pengguna."
    },
    {
      "id": "javascript-dasar-14",
      "judul": "Timer: setTimeout & setInterval",
      "penjelasan": "<code>setTimeout(fungsi, ms)</code> menjalankan kode sekali setelah jeda waktu tertentu (dalam milidetik). <code>setInterval(fungsi, ms)</code> mengulang kode terus-menerus tiap jeda waktu, sampai dihentikan dengan <code>clearInterval()</code>.",
      "contoh_kode": "console.log(\"Mulai\");\n\nsetTimeout(function () {\n  console.log(\"Muncul setelah 2 detik\");\n}, 2000);\n\nlet hitung = 0;\nlet interval = setInterval(function () {\n  hitung++;\n  console.log(\"Detik ke-\" + hitung);\n  if (hitung === 3) {\n    clearInterval(interval);\n    console.log(\"Interval dihentikan\");\n  }\n}, 1000);",
      "starter_code": {
        "html": "<p>Buka console dan tunggu beberapa detik untuk melihat hasil.</p>",
        "css": "",
        "js": "console.log(\"Mulai\");\n\nsetTimeout(function () {\n  console.log(\"Muncul setelah 2 detik\");\n}, 2000);"
      },
      "tantangan": "Buat notifikasi kecil \"Terima kasih sudah berkunjung!\" yang muncul otomatis 2 detik setelah portofoliomu dimuat, lalu hilang sendiri beberapa detik kemudian (pakai setTimeout)."
    },
    {
      "id": "javascript-dasar-15",
      "judul": "JSON: stringify & parse",
      "penjelasan": "JSON adalah format teks untuk menyimpan/mengirim data. <code>JSON.stringify(obj)</code> mengubah object/array JS menjadi teks JSON, dan <code>JSON.parse(teks)</code> mengubah teks JSON kembali menjadi object/array JS. Ini yang dipakai di balik layar saat menyimpan data ke <code>localStorage</code>.",
      "contoh_kode": "let siswa = { nama: \"Rian\", nilai: 90 };\n\nlet teksJSON = JSON.stringify(siswa);\nconsole.log(teksJSON, typeof teksJSON);\n\nlet objKembali = JSON.parse(teksJSON);\nconsole.log(objKembali, typeof objKembali);\nconsole.log(objKembali.nama);",
      "starter_code": {
        "html": "<p>Buka console untuk melihat hasil.</p>",
        "css": "",
        "js": "let siswa = { nama: \"Rian\", nilai: 90 };\n\nlet teksJSON = JSON.stringify(siswa);\nconsole.log(teksJSON, typeof teksJSON);\n\nlet objKembali = JSON.parse(teksJSON);\nconsole.log(objKembali, typeof objKembali);"
      },
      "tantangan": "Simpan draft isi form Kontak portofoliomu ke localStorage tiap kali diketik (JSON.stringify), lalu muat kembali otomatis dengan JSON.parse saat halaman dibuka ulang supaya draft tidak hilang."
    }
  ]
};
