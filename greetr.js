(function (windowObj, $) {

  const Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  }

  Greetr.prototype = {};

  Greetr.init = function(firstName, lastName, language) {
    const main = this;

    main.firstName = firstName || "blank",
    main.lastName = lastName || "blank",
    main.language = language || "en";
  }

  Greetr.init.prototype = Greetr.prototype;

  windowObj.Greetr = windowObj.G$ = Greetr;

})(window, jQuery);
