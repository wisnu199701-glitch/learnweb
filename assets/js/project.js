(function () {
  var STORAGE_KEY = "learnweb_project";

  function getProject() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function saveProject(code) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(code));
    } catch (e) {
      // localStorage tidak tersedia -> progress project tidak tersimpan di sesi ini.
    }
  }

  function resetProject() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }

  function hasProject() {
    return getProject() !== null;
  }

  window.LearnWebProject = {
    getProject: getProject,
    saveProject: saveProject,
    resetProject: resetProject,
    hasProject: hasProject
  };
})();
