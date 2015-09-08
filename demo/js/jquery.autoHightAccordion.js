(function() {
  (function($) {
    return $.fn.autoHightAccordion = function(options) {
      var accordionHeight, closeAccordion, getBlockHeight, toggleAccordion;
      getBlockHeight = function(elems) {
        var $accordions, $elem, height, i, len;
        height = [];
        $accordions = $(elems).children("div:last-child");
        $accordions.css({
          height: "auto"
        });
        for (i = 0, len = $accordions.length; i < len; i++) {
          $elem = $accordions[i];
          height.push($elem.offsetHeight);
        }
        return height;
      };
      closeAccordion = function(elems) {
        $(elems).children("div:last-child").css({
          height: 0
        });
        return $(elems).removeClass("js-isAccordionOpen");
      };
      toggleAccordion = function(elems) {
        return $(elems).children("div:first-child").click(function() {
          var $content, $parent, index;
          $parent = $(this).parent();
          $content = $(this).next();
          index = $parent.index() - 1;
          $parent.toggleClass("js-isAccordionOpen");
          if ($parent.hasClass("js-isAccordionOpen")) {
            return $content.css({
              height: accordionHeight[index] + "px"
            });
          } else {
            return $content.css({
              height: 0
            });
          }
        });
      };
      accordionHeight = getBlockHeight(this);
      closeAccordion(this);
      this.each(function() {
        return toggleAccordion(this);
      });
      $(window).resize(function() {
        return this.each(function() {
          return toggleAccordion(this);
        });
      });
      return this;
    };
  })(jQuery);

}).call(this);
