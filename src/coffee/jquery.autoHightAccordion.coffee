(($) ->

  $.fn.smoothAccordion = (speed = 0.5) ->

    getBlockHeight = (elems) ->
      height = []
      $accordions = $(elems).children("div:last-child")
      $accordions.css
        height: "auto"
      for $elem in $accordions
        height.push $elem.offsetHeight
      return height

    closeAccordion = (elems) ->
      $(elems).children("div:last-child").css
        height: 0
      $(elems).removeClass "js-isAccordionOpen"

    toggleAccordion = (elems) ->
      $(elems).children("div:first-child").click ->
        $parent = $(this).parent()
        $content = $(this).next()
        index = $parent.index()
        $parent.toggleClass "js-isAccordionOpen"

        if $parent.hasClass "js-isAccordionOpen"
          $content.css
            height: (accordionHeight[index])+"px"
        else
          $content.css
            height: 0

    accordionHeight = getBlockHeight this
    closeAccordion this
    this.children("div:last-child").css
      overflow: 'hidden'
      transition: "#{speed}s"

    @each ->
      toggleAccordion this
    $(window).resize ->
      @each ->
        toggleAccordion this

    return this
)(jQuery)