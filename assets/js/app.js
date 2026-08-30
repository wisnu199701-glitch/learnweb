(function () {
  // Modul lanjutan (JS Dasar, HTML/CSS/JS Lanjutan, Proyek Gabungan) sengaja
  // dinonaktifkan sementara -- fokus jalur belajar sekarang cuma HTML+CSS Dasar.
  // File datanya masih ada di data/lessons/, tinggal tambahkan baris ke array
  // ini lagi kalau mau diaktifkan ulang.
  var MODULES = [
    { id: "html-dasar", judul: "HTML Dasar", order: 1 },
    { id: "css-dasar", judul: "CSS Dasar", order: 2 }
  ];

  // Data lesson dimuat lewat <script> (assets/js/../data/lessons/*.js -> window.LEARNWEB_LESSONS)
  // supaya halaman tetap bisa dibuka langsung lewat file:// tanpa server lokal
  // (fetch() ke file JSON lokal diblokir kebijakan CORS browser untuk file://).
  function loadModule(modId) {
    var store = window.LEARNWEB_LESSONS || {};
    var data = store[modId];
    if (!data) return Promise.reject(new Error("Data lesson untuk modul '" + modId + "' tidak ditemukan."));
    return Promise.resolve(data);
  }

  function loadAllModules() {
    return Promise.all(MODULES.map(function (m) { return loadModule(m.id); }));
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // ===================== ROADMAP (index.html) =====================

  function findContinueTarget(modulesData) {
    for (var i = 0; i < modulesData.length; i++) {
      var mod = modulesData[i];
      var ids = mod.lessons.map(function (l) { return l.id; });
      var progress = LearnWebProgress.getModuleProgress(ids);
      if (progress.done < progress.total) {
        var nextLesson = mod.lessons.filter(function (l) {
          return !LearnWebProgress.isComplete(l.id);
        })[0];
        return { modul: mod.modul, id: nextLesson.id, isFresh: progress.done === 0 && i === 0 };
      }
    }
    // Semua selesai -> arahkan ke lesson pertama modul terakhir.
    var last = modulesData[modulesData.length - 1];
    return { modul: last.modul, id: last.lessons[0].id, allDone: true };
  }

  function renderRoadmap() {
    var container = document.getElementById("roadmap");
    var continueBtn = document.getElementById("continue-btn");
    if (!container) return;

    loadAllModules()
      .then(function (modulesData) {
        container.innerHTML = "";
        modulesData.forEach(function (mod, index) {
          var ids = mod.lessons.map(function (l) { return l.id; });
          var progress = LearnWebProgress.getModuleProgress(ids);
          var pct = progress.total ? Math.round((progress.done / progress.total) * 100) : 0;
          var firstIncomplete = mod.lessons.filter(function (l) {
            return !LearnWebProgress.isComplete(l.id);
          })[0];
          var targetId = firstIncomplete ? firstIncomplete.id : mod.lessons[0].id;

          var card = document.createElement("a");
          card.className = "module-card";
          card.href = "app.html#/modul/" + mod.modul + "/" + targetId;
          card.innerHTML =
            '<span class="module-step">Modul ' + (index + 1) + "</span>" +
            "<h3>" + escapeHtml(mod.judul) + "</h3>" +
            "<p>" + mod.lessons.length + " lesson</p>" +
            '<div class="progress-bar"><div class="progress-bar-fill" style="width:' + pct + '%"></div></div>' +
            '<span class="progress-label">' + progress.done + " dari " + progress.total + " selesai</span>";
          container.appendChild(card);
        });

        if (continueBtn) {
          var target = findContinueTarget(modulesData);
          continueBtn.href = "app.html#/modul/" + target.modul + "/" + target.id;
          continueBtn.textContent = target.allDone
            ? "Ulas Lagi Materi"
            : target.isFresh
            ? "Mulai Belajar"
            : "Lanjutkan Belajar";
        }
      })
      .catch(function (err) {
        container.innerHTML = '<p style="color:var(--danger)">Gagal memuat data modul: ' + escapeHtml(err.message) + "</p>";
      });
  }

  // ===================== LESSON APP (app.html) =====================

  function playgroundTemplate(continuous) {
    return (
      '<div class="playground">' +
      '<div class="playground-header">' +
      "<h4>Live Playground" +
      (continuous ? ' <span class="pg-badge" title="Kode di sini otomatis tersimpan dan menyambung ke lesson berikutnya">🔗 Project Berkelanjutan</span>' : "") +
      "</h4>" +
      '<div class="playground-buttons">' +
      '<button class="pg-btn" data-pg-action="reset" type="button">' + (continuous ? "🗑 Reset Total" : "Reset") + "</button>" +
      '<button class="pg-btn" data-pg-action="save" type="button">💾 Simpan HTML</button>' +
      '<button class="pg-btn pg-run" data-pg-action="run" type="button">▶ Jalankan</button>' +
      "</div></div>" +
      '<div class="playground-body">' +
      '<div class="pg-editors">' +
      '<div class="pg-tabs">' +
      '<button class="pg-tab active" data-pg-tab="html" type="button">HTML</button>' +
      '<button class="pg-tab" data-pg-tab="css" type="button">CSS</button>' +
      '<button class="pg-tab" data-pg-tab="js" type="button">JS</button>' +
      "</div>" +
      '<div class="pg-panels">' +
      '<div class="pg-panel active" data-pg-panel="html"><textarea data-pg="html" spellcheck="false"></textarea></div>' +
      '<div class="pg-panel" data-pg-panel="css"><textarea data-pg="css" spellcheck="false"></textarea></div>' +
      '<div class="pg-panel" data-pg-panel="js"><textarea data-pg="js" spellcheck="false"></textarea></div>' +
      "</div></div>" +
      '<iframe class="pg-preview" sandbox="allow-scripts" title="Preview"></iframe>' +
      "</div></div>"
    );
  }

  function parseHash() {
    // Format: #/modul/{modul}/{lessonId}
    var hash = location.hash.replace(/^#\/?/, "");
    var parts = hash.split("/").filter(Boolean);
    if (parts[0] === "modul" && parts[1]) {
      return { modul: parts[1], lessonId: parts[2] || null };
    }
    return null;
  }

  function renderSidebar(mod, currentLessonId) {
    var items = mod.lessons
      .map(function (l) {
        var done = LearnWebProgress.isComplete(l.id);
        var activeClass = l.id === currentLessonId ? " active" : "";
        return (
          '<li><a class="' + activeClass.trim() + '" href="#/modul/' + mod.modul + "/" + l.id + '">' +
          '<span class="check' + (done ? " done" : "") + '">' + (done ? "✓" : "") + "</span>" +
          escapeHtml(l.judul) +
          "</a></li>"
        );
      })
      .join("");
    return (
      '<div class="lesson-sidebar"><h4>' + escapeHtml(mod.judul) + "</h4><ul>" + items + "</ul></div>"
    );
  }

  function findLessonPosition(modulesData, modId, lessonId) {
    for (var i = 0; i < modulesData.length; i++) {
      if (modulesData[i].modul !== modId) continue;
      var idx = modulesData[i].lessons.findIndex(function (l) { return l.id === lessonId; });
      if (idx === -1) return null;
      return { modIndex: i, lessonIndex: idx };
    }
    return null;
  }

  function getAdjacentLesson(modulesData, modId, lessonId, dir) {
    var pos = findLessonPosition(modulesData, modId, lessonId);
    if (!pos) return null;
    var mod = modulesData[pos.modIndex];
    var targetLessonIndex = pos.lessonIndex + dir;

    if (targetLessonIndex >= 0 && targetLessonIndex < mod.lessons.length) {
      return { modul: mod.modul, lessonId: mod.lessons[targetLessonIndex].id };
    }

    var targetModIndex = pos.modIndex + dir;
    if (targetModIndex < 0 || targetModIndex >= modulesData.length) return null;
    var targetMod = modulesData[targetModIndex];
    var lessonInTarget = dir > 0 ? targetMod.lessons[0] : targetMod.lessons[targetMod.lessons.length - 1];
    return { modul: targetMod.modul, lessonId: lessonInTarget.id };
  }

  function renderLessonApp() {
    var appRoot = document.getElementById("lesson-app");
    if (!appRoot) return;

    function render() {
      var route = parseHash();

      loadAllModules()
        .then(function (modulesData) {
          if (!route) {
            var first = modulesData[0];
            location.hash = "#/modul/" + first.modul + "/" + first.lessons[0].id;
            return;
          }

          var mod = modulesData.filter(function (m) { return m.modul === route.modul; })[0];
          if (!mod) {
            appRoot.innerHTML = '<p style="color:var(--danger)">Modul tidak ditemukan.</p>';
            return;
          }

          var lessonId = route.lessonId || mod.lessons[0].id;
          var lesson = mod.lessons.filter(function (l) { return l.id === lessonId; })[0];
          if (!lesson) {
            appRoot.innerHTML = '<p style="color:var(--danger)">Lesson tidak ditemukan.</p>';
            return;
          }

          var prev = getAdjacentLesson(modulesData, mod.modul, lesson.id, -1);
          var next = getAdjacentLesson(modulesData, mod.modul, lesson.id, 1);
          var isDone = LearnWebProgress.isComplete(lesson.id);

          appRoot.innerHTML =
            '<div class="lesson-layout">' +
            renderSidebar(mod, lesson.id) +
            '<div class="lesson-content">' +
            "<h2>" + escapeHtml(lesson.judul) + "</h2>" +
            '<div class="lesson-explanation">' + lesson.penjelasan + "</div>" +
            (lesson.contoh_kode
              ? '<pre class="code-block"><code>' + escapeHtml(lesson.contoh_kode) + "</code></pre>"
              : "") +
            (window.LearnWebTagGlossary ? window.LearnWebTagGlossary.renderGlossary(lesson) : "") +
            (lesson.tantangan
              ? '<div class="tantangan-box"><strong>🎯 Tantangan</strong>' + escapeHtml(lesson.tantangan) + "</div>"
              : "") +
            playgroundTemplate(true) +
            '<div class="lesson-actions">' +
            '<div class="lesson-nav">' +
            (prev
              ? '<a class="btn btn-secondary" href="#/modul/' + prev.modul + "/" + prev.lessonId + '">← Sebelumnya</a>'
              : "") +
            (next
              ? '<a class="btn btn-secondary" href="#/modul/' + next.modul + "/" + next.lessonId + '">Selanjutnya →</a>'
              : "") +
            "</div>" +
            '<button class="mark-complete-btn' + (isDone ? " is-done" : "") + '" id="mark-complete-btn" type="button">' +
            (isDone ? "Selesai" : "Tandai Selesai") +
            "</button>" +
            "</div></div></div>";

          var playgroundRoot = appRoot.querySelector(".playground");
          LearnWebPlayground.initPlayground(playgroundRoot, lesson.starter_code || {}, {
            continuous: true,
            downloadName: "portofolio-saya.html"
          });

          document.getElementById("mark-complete-btn").addEventListener("click", function () {
            var nowDone = LearnWebProgress.toggleComplete(lesson.id);
            this.classList.toggle("is-done", nowDone);
            this.textContent = nowDone ? "Selesai" : "Tandai Selesai";
            var sidebarLink = appRoot.querySelector('.lesson-sidebar a[href="#/modul/' + mod.modul + "/" + lesson.id + '"] .check');
            if (sidebarLink) {
              sidebarLink.classList.toggle("done", nowDone);
              sidebarLink.textContent = nowDone ? "✓" : "";
            }
          });
        })
        .catch(function (err) {
          appRoot.innerHTML = '<p style="color:var(--danger)">Gagal memuat lesson: ' + escapeHtml(err.message) + "</p>";
        });
    }

    window.addEventListener("hashchange", render);
    render();
  }

  // ===================== SANDBOX (sandbox.html) =====================

  function renderSandbox() {
    var root = document.getElementById("sandbox-app");
    if (!root) return;
    root.innerHTML = playgroundTemplate();
    var playgroundRoot = root.querySelector(".playground");
    LearnWebPlayground.initPlayground(
      playgroundRoot,
      {
        html: "<h1>Halo, Sandbox!</h1>\n<p>Tulis kodemu di sini.</p>",
        css: "body {\n  font-family: sans-serif;\n  padding: 1rem;\n}",
        js: "console.log('Sandbox siap dipakai');"
      },
      { downloadName: "sandbox-kode.html" }
    );
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderRoadmap();
    renderLessonApp();
    renderSandbox();
  });

  window.LearnWebApp = { MODULES: MODULES, loadModule: loadModule, loadAllModules: loadAllModules };
})();
