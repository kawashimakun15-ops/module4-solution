(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Выставляем объект в глобальную область видимости
  window.byeSpeaker = byeSpeaker;

})(window);