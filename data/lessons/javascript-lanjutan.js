window.LEARNWEB_LESSONS = window.LEARNWEB_LESSONS || {};
window.LEARNWEB_LESSONS["javascript-lanjutan"] = {
  "modul": "javascript-lanjutan",
  "judul": "JavaScript Lanjutan",
  "lessons": [
    {
      "id": "javascript-lanjutan-1",
      "judul": "Destructuring (Array & Object)",
      "penjelasan": "Destructuring adalah cara singkat mengambil nilai dari array atau object langsung ke variabel terpisah, tanpa menulis <code>array[0]</code> atau <code>obj.properti</code> berulang-ulang. Array pakai kurung siku <code>[]</code>, object pakai kurung kurawal <code>{}</code> dengan nama properti yang harus sama persis.",
      "contoh_kode": "let angka = [10, 20, 30];\nlet [a, b, c] = angka;\nconsole.log(a, b, c);\n\nlet siswa = { nama: \"Nadia\", umur: 19 };\nlet { nama, umur } = siswa;\nconsole.log(nama, umur);",
      "starter_code": {
        "html": "<p>Buka console untuk melihat hasil.</p>",
        "css": "",
        "js": "let angka = [10, 20, 30];\nlet [a, b, c] = angka;\nconsole.log(a, b, c);\n\nlet siswa = { nama: \"Nadia\", umur: 19 };\nlet { nama, umur } = siswa;\nconsole.log(nama, umur);"
      },
      "tantangan": "Saat merender daftar skill di portofoliomu, gunakan destructuring untuk mengambil { nama, level } dari tiap object skill, bukan skill.nama/skill.level berulang."
    },
    {
      "id": "javascript-lanjutan-2",
      "judul": "Spread & Rest Operator",
      "penjelasan": "Tanda titik tiga <code>...</code> punya dua peran. Sebagai <strong>spread</strong>, ia \"membentangkan\" isi array/object, berguna untuk menggabungkan atau menyalin (<code>[...arr1, ...arr2]</code>). Sebagai <strong>rest</strong> (di parameter fungsi), ia mengumpulkan sisa argumen jadi satu array.",
      "contoh_kode": "let buah1 = [\"Apel\", \"Jeruk\"];\nlet buah2 = [\"Mangga\", \"Pisang\"];\nlet gabungan = [...buah1, ...buah2];\nconsole.log(gabungan);\n\nlet profil = { nama: \"Eka\" };\nlet profilLengkap = { ...profil, umur: 25 };\nconsole.log(profilLengkap);\n\nfunction jumlahkanSemua(...angka) {\n  return angka.reduce((total, n) => total + n, 0);\n}\nconsole.log(jumlahkanSemua(1, 2, 3, 4));",
      "starter_code": {
        "html": "<p>Buka console untuk melihat hasil.</p>",
        "css": "",
        "js": "let buah1 = [\"Apel\", \"Jeruk\"];\nlet buah2 = [\"Mangga\", \"Pisang\"];\nlet gabungan = [...buah1, ...buah2];\nconsole.log(gabungan);\n\nfunction jumlahkanSemua(...angka) {\n  return angka.reduce((total, n) => total + n, 0);\n}\nconsole.log(jumlahkanSemua(1, 2, 3, 4));"
      },
      "tantangan": "Buat object pengaturan tema default di portofoliomu, misal { warna: \"#4f46e5\", mode: \"terang\" }, lalu gunakan spread operator untuk membuat versi override (misal mode: \"gelap\") tanpa mengubah object aslinya."
    },
    {
      "id": "javascript-lanjutan-3",
      "judul": "Optional Chaining & Nullish Coalescing",
      "penjelasan": "Optional chaining <code>?.</code> mengakses properti object bertingkat dengan aman — kalau salah satu bagian di tengah bernilai <code>undefined</code>/<code>null</code>, hasilnya <code>undefined</code> saja (bukan error). Nullish coalescing <code>??</code> memberi nilai default hanya kalau nilai di kirinya <code>null</code> atau <code>undefined</code> (beda dengan <code>||</code> yang juga menganggap 0 atau string kosong sebagai \"kosong\").",
      "contoh_kode": "let user = {\n  nama: \"Fajar\",\n  alamat: { kota: \"Medan\" }\n};\n\nconsole.log(user.alamat?.kota);\nconsole.log(user.pekerjaan?.gaji);\n\nlet namaTampil = user.nickname ?? \"Tanpa Nama\";\nconsole.log(namaTampil);",
      "starter_code": {
        "html": "<p>Buka console untuk melihat hasil.</p>",
        "css": "",
        "js": "let user = {\n  nama: \"Fajar\",\n  alamat: { kota: \"Medan\" }\n};\n\nconsole.log(user.alamat?.kota);\nconsole.log(user.pekerjaan?.gaji);\n\nlet namaTampil = user.nickname ?? \"Tanpa Nama\";\nconsole.log(namaTampil);"
      },
      "tantangan": "Buat object sosial media untuk portofoliomu (misal { github: \"...\", instagram: undefined }), lalu tampilkan link dengan aman pakai ?. dan beri teks default (\"Belum diisi\") pakai ?? untuk yang belum ada."
    },
    {
      "id": "javascript-lanjutan-4",
      "judul": "Closures & Scope",
      "penjelasan": "Scope menentukan di mana sebuah variabel bisa diakses. Closure terjadi ketika fungsi \"mengingat\" variabel dari lingkungan tempat ia dibuat, meskipun fungsi luar sudah selesai dijalankan — sering dipakai untuk membuat variabel privat, seperti counter yang tidak bisa diubah langsung dari luar.",
      "contoh_kode": "function buatCounter() {\n  let hitung = 0;\n  return function () {\n    hitung++;\n    return hitung;\n  };\n}\n\nconst counterA = buatCounter();\nconsole.log(counterA());\nconsole.log(counterA());\nconsole.log(counterA());\n\nconst counterB = buatCounter();\nconsole.log(counterB());",
      "starter_code": {
        "html": "<p>Buka console untuk melihat hasil.</p>",
        "css": "",
        "js": "function buatCounter() {\n  let hitung = 0;\n  return function () {\n    hitung++;\n    return hitung;\n  };\n}\n\nconst counterA = buatCounter();\nconsole.log(counterA());\nconsole.log(counterA());\nconsole.log(counterA());"
      },
      "tantangan": "Buat penghitung \"jumlah kunjungan\" sederhana di portofoliomu memakai closure, simpan hasilnya ke localStorage supaya angkanya bertambah tiap kali halaman dibuka ulang, lalu tampilkan di footer."
    },
    {
      "id": "javascript-lanjutan-5",
      "judul": "Class (OOP Dasar)",
      "penjelasan": "<code>class</code> adalah cetak biru untuk membuat banyak object dengan struktur sama. <code>constructor</code> dijalankan saat object dibuat dengan <code>new</code>, dan method di dalam class bisa dipanggil dari tiap object hasilnya. <code>this</code> merujuk ke object yang sedang dipakai.",
      "contoh_kode": "class Hewan {\n  constructor(nama, suara) {\n    this.nama = nama;\n    this.suara = suara;\n  }\n\n  bersuara() {\n    return `${this.nama} berkata: ${this.suara}!`;\n  }\n}\n\nconst kucing = new Hewan(\"Kucing\", \"Meong\");\nconst anjing = new Hewan(\"Anjing\", \"Guk\");\n\nconsole.log(kucing.bersuara());\nconsole.log(anjing.bersuara());",
      "starter_code": {
        "html": "<p>Buka console untuk melihat hasil.</p>",
        "css": "",
        "js": "class Hewan {\n  constructor(nama, suara) {\n    this.nama = nama;\n    this.suara = suara;\n  }\n\n  bersuara() {\n    return `${this.nama} berkata: ${this.suara}!`;\n  }\n}\n\nconst kucing = new Hewan(\"Kucing\", \"Meong\");\nconsole.log(kucing.bersuara());"
      },
      "tantangan": "Ubah kartu \"Proyek Saya\" yang tadinya statis (dari lesson CSS Grid Lanjutan) jadi dinamis: buat class Project(judul, deskripsi, link), buat beberapa objeknya dalam array, lalu render otomatis ke section Proyek Saya menggantikan card manual tadi."
    },
    {
      "id": "javascript-lanjutan-6",
      "judul": "Array reduce() & Method Chaining",
      "penjelasan": "<code>reduce()</code> \"meringkas\" seluruh array jadi satu nilai, misalnya total penjumlahan. Fungsinya menerima <code>(akumulator, item)</code> dan nilai awal akumulator. Method array (<code>filter</code>, <code>map</code>, <code>reduce</code>, dst) bisa dirangkai berurutan (method chaining) untuk memproses data dalam beberapa langkah sekaligus.",
      "contoh_kode": "let belanja = [\n  { nama: \"Buku\", harga: 15000, qty: 2 },\n  { nama: \"Pensil\", harga: 3000, qty: 5 },\n  { nama: \"Tas\", harga: 80000, qty: 1 }\n];\n\nlet total = belanja.reduce(function (akumulator, item) {\n  return akumulator + item.harga * item.qty;\n}, 0);\nconsole.log(\"Total belanja:\", total);\n\nlet namaMahal = belanja\n  .filter(item => item.harga > 10000)\n  .map(item => item.nama);\nconsole.log(\"Barang di atas 10rb:\", namaMahal);",
      "starter_code": {
        "html": "<p>Buka console untuk melihat hasil.</p>",
        "css": "",
        "js": "let belanja = [\n  { nama: \"Buku\", harga: 15000, qty: 2 },\n  { nama: \"Pensil\", harga: 3000, qty: 5 },\n  { nama: \"Tas\", harga: 80000, qty: 1 }\n];\n\nlet total = belanja.reduce(function (akumulator, item) {\n  return akumulator + item.harga * item.qty;\n}, 0);\nconsole.log(\"Total belanja:\", total);"
      },
      "tantangan": "Hitung dan tampilkan total jumlah proyek (dari array Project di lesson sebelumnya) atau total skill \"mahir\" di portofoliomu memakai reduce()."
    },
    {
      "id": "javascript-lanjutan-7",
      "judul": "Promise",
      "penjelasan": "Promise mewakili sebuah nilai yang mungkin belum ada sekarang, tapi akan selesai di masa depan (biasanya untuk operasi yang butuh waktu, seperti mengambil data). Promise punya 3 keadaan: pending, fulfilled (berhasil, lewat <code>resolve()</code>), atau rejected (gagal, lewat <code>reject()</code>). Hasilnya ditangkap dengan <code>.then()</code> dan error dengan <code>.catch()</code>.",
      "contoh_kode": "function ambilData(berhasil) {\n  return new Promise(function (resolve, reject) {\n    setTimeout(function () {\n      if (berhasil) {\n        resolve(\"Data berhasil diambil!\");\n      } else {\n        reject(\"Gagal mengambil data.\");\n      }\n    }, 1000);\n  });\n}\n\nambilData(true)\n  .then(function (hasil) {\n    console.log(hasil);\n  })\n  .catch(function (error) {\n    console.log(\"Error:\", error);\n  });",
      "starter_code": {
        "html": "<p>Buka console dan tunggu 1 detik untuk melihat hasil.</p>",
        "css": "",
        "js": "function ambilData(berhasil) {\n  return new Promise(function (resolve, reject) {\n    setTimeout(function () {\n      if (berhasil) {\n        resolve(\"Data berhasil diambil!\");\n      } else {\n        reject(\"Gagal mengambil data.\");\n      }\n    }, 1000);\n  });\n}\n\nambilData(true)\n  .then(function (hasil) {\n    console.log(hasil);\n  })\n  .catch(function (error) {\n    console.log(\"Error:\", error);\n  });"
      },
      "tantangan": "Simulasikan \"memuat data proyek\" di portofoliomu pakai Promise+setTimeout (fake loading 1 detik), tampilkan teks \"Memuat...\" saat menunggu, lalu ganti dengan kartu Proyek setelah Promise selesai."
    },
    {
      "id": "javascript-lanjutan-8",
      "judul": "Async/Await",
      "penjelasan": "<code>async/await</code> adalah cara menulis Promise supaya terbaca seperti kode biasa (sinkron), lebih mudah dibaca daripada rantai <code>.then()</code>. Fungsi yang memakai <code>await</code> harus ditandai <code>async</code>. Gunakan <code>try...catch</code> untuk menangani error dari <code>await</code>.",
      "contoh_kode": "function ambilData(berhasil) {\n  return new Promise(function (resolve, reject) {\n    setTimeout(function () {\n      berhasil ? resolve(\"Data berhasil diambil!\") : reject(\"Gagal mengambil data.\");\n    }, 1000);\n  });\n}\n\nasync function prosesData() {\n  try {\n    const hasil = await ambilData(true);\n    console.log(hasil);\n  } catch (error) {\n    console.log(\"Error:\", error);\n  }\n}\n\nprosesData();",
      "starter_code": {
        "html": "<p>Buka console dan tunggu 1 detik untuk melihat hasil.</p>",
        "css": "",
        "js": "function ambilData(berhasil) {\n  return new Promise(function (resolve, reject) {\n    setTimeout(function () {\n      berhasil ? resolve(\"Data berhasil diambil!\") : reject(\"Gagal mengambil data.\");\n    }, 1000);\n  });\n}\n\nasync function prosesData() {\n  try {\n    const hasil = await ambilData(true);\n    console.log(hasil);\n  } catch (error) {\n    console.log(\"Error:\", error);\n  }\n}\n\nprosesData();"
      },
      "tantangan": "Refactor simulasi loading proyek dari lesson sebelumnya memakai async/await supaya kodenya lebih mudah dibaca dibanding rantai .then()."
    },
    {
      "id": "javascript-lanjutan-9",
      "judul": "Fetch API",
      "penjelasan": "<code>fetch(url)</code> mengambil data dari server lewat internet dan mengembalikan Promise. Biasanya dipakai bersama <code>async/await</code>: pertama tunggu response, lalu panggil <code>.json()</code> untuk mengubah body response jadi object JS. Lesson ini butuh koneksi internet aktif karena benar-benar memanggil API sungguhan.",
      "contoh_kode": "async function ambilUser() {\n  try {\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/users/1\");\n    const data = await response.json();\n    console.log(\"Nama:\", data.name);\n    console.log(\"Email:\", data.email);\n  } catch (error) {\n    console.log(\"Gagal mengambil data:\", error);\n  }\n}\n\nambilUser();",
      "starter_code": {
        "html": "<p>Buka console untuk melihat hasil (butuh koneksi internet).</p>",
        "css": "",
        "js": "async function ambilUser() {\n  try {\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/users/1\");\n    const data = await response.json();\n    console.log(\"Nama:\", data.name);\n    console.log(\"Email:\", data.email);\n  } catch (error) {\n    console.log(\"Gagal mengambil data:\", error);\n  }\n}\n\nambilUser();"
      },
      "tantangan": "Tambahkan widget kecil \"Quote of the Day\" di portofoliomu (misal di footer) yang mengambil kutipan dari API publik lewat fetch() setiap kali halaman dibuka."
    }
  ]
};
