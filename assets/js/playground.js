(function () {
  function buildSrcDoc(html, css, js) {
    return (
      "<!DOCTYPE html><html><head><meta charset=\"utf-8\">" +
      "<style>" + css + "</style></head><body>" +
      html +
      "<script>\n" + js + "\n<" + "/script>" +
      "</body></html>"
    );
  }

  function debounce(fn, wait) {
    var timer;
    return function () {
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(null, args);
      }, wait);
    };
  }

  // root: elemen yang berisi markup playground (lihat template di app.js)
  // code: { html, css, js } kode default/fallback kalau belum ada project tersimpan.
  // options.continuous: true -> kode dibaca/ditulis dari satu project bersama (LearnWebProject)
  //   yang menyambung di semua lesson, bukan direset tiap lesson dibuka.
  function initPlayground(root, code, options) {
    options = options || {};
    var continuous = !!options.continuous;

    var starter = {
      html: (code && code.html) || "",
      css: (code && code.css) || "",
      js: (code && code.js) || ""
    };

    var htmlInput = root.querySelector('[data-pg="html"]');
    var cssInput = root.querySelector('[data-pg="css"]');
    var jsInput = root.querySelector('[data-pg="js"]');
    var iframe = root.querySelector(".pg-preview");
    var runBtn = root.querySelector('[data-pg-action="run"]');
    var resetBtn = root.querySelector('[data-pg-action="reset"]');
    var saveBtn = root.querySelector('[data-pg-action="save"]');
    var tabs = root.querySelectorAll("[data-pg-tab]");
    var panels = root.querySelectorAll("[data-pg-panel]");

    var saved = continuous && window.LearnWebProject ? window.LearnWebProject.getProject() : null;
    var seed = saved || starter;

    htmlInput.value = seed.html;
    cssInput.value = seed.css;
    jsInput.value = seed.js;

    function persist() {
      if (continuous && window.LearnWebProject) {
        window.LearnWebProject.saveProject({
          html: htmlInput.value,
          css: cssInput.value,
          js: jsInput.value
        });
      }
    }

    function run() {
      iframe.srcdoc = buildSrcDoc(htmlInput.value, cssInput.value, jsInput.value);
      persist();
    }

    function reset() {
      if (continuous) {
        var ok = window.confirm(
          "Ini akan menghapus SEMUA progress project berkelanjutan dari lesson pertama, bukan cuma lesson ini. Yakin ingin reset total?"
        );
        if (!ok) return;
        if (window.LearnWebProject) window.LearnWebProject.resetProject();
        htmlInput.value = "";
        cssInput.value = "";
        jsInput.value = "";
      } else {
        htmlInput.value = starter.html;
        cssInput.value = starter.css;
        jsInput.value = starter.js;
      }
      run();
    }

    function save() {
      var fullDoc = buildSrcDoc(htmlInput.value, cssInput.value, jsInput.value);
      var blob = new Blob([fullDoc], { type: "text/html" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = options.downloadName || "kode-saya.html";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () {
        URL.revokeObjectURL(url);
      }, 1000);
    }

    var debouncedPersist = debounce(persist, 600);
    [htmlInput, cssInput, jsInput].forEach(function (input) {
      input.addEventListener("input", debouncedPersist);
    });

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var target = tab.getAttribute("data-pg-tab");
        tabs.forEach(function (t) {
          t.classList.toggle("active", t === tab);
        });
        panels.forEach(function (p) {
          p.classList.toggle("active", p.getAttribute("data-pg-panel") === target);
        });
      });
    });

    runBtn.addEventListener("click", run);
    if (resetBtn) resetBtn.addEventListener("click", reset);
    if (saveBtn) saveBtn.addEventListener("click", save);

    run();
  }

  window.LearnWebPlayground = {
    initPlayground: initPlayground,
    buildSrcDoc: buildSrcDoc
  };
})();
