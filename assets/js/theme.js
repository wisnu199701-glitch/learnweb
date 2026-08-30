(function () {
  var STORAGE_KEY = "learnweb_theme";

  function getTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY) || "light";
    } catch (e) {
      return "light";
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  function setTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // localStorage tidak tersedia (mis. origin file:// yang dianggap opaque) -> tema tetap diterapkan, hanya tidak tersimpan.
    }
    applyTheme(theme);
    updateToggleButtons();
  }

  function toggleTheme() {
    setTheme(getTheme() === "dark" ? "light" : "dark");
  }

  function updateToggleButtons() {
    var buttons = document.querySelectorAll("[data-theme-toggle]");
    var isDark = getTheme() === "dark";
    buttons.forEach(function (btn) {
      btn.textContent = isDark ? "☀️ Light" : "🌙 Dark";
    });
  }

  // Terapkan tema secepat mungkin supaya tidak ada flash warna salah.
  applyTheme(getTheme());

  document.addEventListener("DOMContentLoaded", function () {
    updateToggleButtons();
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.addEventListener("click", toggleTheme);
    });
  });

  window.LearnWebTheme = {
    getTheme: getTheme,
    setTheme: setTheme,
    toggleTheme: toggleTheme
  };
})();
