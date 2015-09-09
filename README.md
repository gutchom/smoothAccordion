# smoothAccordion
jQuery plug-in for accordion with css3 transition

It realizes use css3 transition for `height: auto` block element.
You can write down any length content in accordion box, and it will expand and close smoothly.

[sample demo: http://gutchom.github.io/smoothAccordion/](http://gutchom.github.io/smoothAccordion/)

# How to use
## HTML
```html
<div>
  <div class="class-name">
    <div>title 1</div> <!-- toggle button -->
    <div>body 1</div> <!-- accordion block -->
  </div>
  <div class="class-name">
    <div>title 2</div> <!-- toggle button -->
    <div>body 2</div> <!-- accordion block -->
  </div>
  <!-- able to repeat many times -->
</div>
```
Click or tap the title, and then accordion block will expand or close.

## Javascript
```javascript
$(".class-name").smoothAccordion(speed);
```
Unit of `Speed` argument is second.

Set number type for argument.

All of accordion block works by writting this JS code only once.

## CSS
Not necessary.
