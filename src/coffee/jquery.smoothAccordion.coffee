(($) ->

  $.fn.autoHightAccordion = (speed = 0.5) ->

    $elements = this

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

    accordionHeight = getBlockHeight $elements
    closeAccordion $elements
    $elements.children("div:last-child").css
      overflow: 'hidden'
      transition: "#{speed}s"

    $elements.each ->
      toggleAccordion this

    $(window).resize ->
      accordionHeight = getBlockHeight $elements
      closeAccordion $elements

    return this
)(jQuery)