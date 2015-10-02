(function() {
  (function($) {
    return $.fn.smoothAccordion = function(speed) {
      var $elements, accordionHeight, closeAccordion, getBlockHeight, toggleAccordion;
      if (speed == null) {
        speed = 0.5;
      }
      $elements = this;
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
        return $(elems).removeClass("js-is-accordion-open");
      };
      toggleAccordion = function(elems) {
        return $(elems).children("div:first-child").click(function() {
          var $content, $parent, index;
          $parent = $(this).parent();
          $content = $(this).next();
          index = $parent.index();
          $parent.toggleClass("js-is-accordion-open");
          if ($parent.hasClass("js-is-accordion-open")) {
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
      accordionHeight = getBlockHeight($elements);
      closeAccordion($elements);
      $elements.children("div:last-child").css({
        overflow: 'hidden',
        transition: speed + "s"
      });
      $elements.each(function() {
        return toggleAccordion(this);
      });
      $(window).resize(function() {
        accordionHeight = getBlockHeight($elements);
        return closeAccordion($elements);
      });
      return this;
    };
  })(jQuery);

}).call(this);
