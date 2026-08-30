(function () {
  var STORAGE_KEY = "learnweb_progress";

  function getAll() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveAll(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      // localStorage tidak tersedia (mis. origin file:// yang dianggap opaque) -> progress tidak tersimpan di sesi ini.
    }
  }

  function isComplete(lessonId) {
    return !!getAll()[lessonId];
  }

  function markComplete(lessonId) {
    var data = getAll();
    data[lessonId] = true;
    saveAll(data);
  }

  function markIncomplete(lessonId) {
    var data = getAll();
    delete data[lessonId];
    saveAll(data);
  }

  function toggleComplete(lessonId) {
    if (isComplete(lessonId)) {
      markIncomplete(lessonId);
      return false;
    }
    markComplete(lessonId);
    return true;
  }

  // lessonIds: array of lesson id strings dalam satu modul.
  function getModuleProgress(lessonIds) {
    var data = getAll();
    var done = lessonIds.filter(function (id) {
      return !!data[id];
    }).length;
    return { done: done, total: lessonIds.length };
  }

  window.LearnWebProgress = {
    getAll: getAll,
    isComplete: isComplete,
    markComplete: markComplete,
    markIncomplete: markIncomplete,
    toggleComplete: toggleComplete,
    getModuleProgress: getModuleProgress
  };
})();
