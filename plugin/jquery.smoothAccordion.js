(function(){!function(i){return i.fn.autoHightAccordion=function(n){var t,s,r,c;return r=function(n){var t,s,r,c,e;for(r=[],t=i(n).children("div:last-child"),t.css({height:"auto"}),c=0,e=t.length;e>c;c++)s=t[c],r.push(s.offsetHeight);return r},s=function(n){return i(n).children("div:last-child").css({height:0}),i(n).removeClass("js-isAccordionOpen")},c=function(n){return i(n).children("div:first-child").click(function(){var n,s,r;return s=i(this).parent(),n=i(this).next(),r=s.index()-1,s.toggleClass("js-isAccordionOpen"),s.hasClass("js-isAccordionOpen")?n.css({height:t[r]+"px"}):n.css({height:0})})},t=r(this),s(this),this.each(function(){return c(this)}),i(window).resize(function(){return this.each(function(){return c(this)})}),this}}(jQuery)}).call(this);