# smoothAccordion
jQuery plug-in for accordion with css3 transition

# How to use
## HTML markup
```html
<div class="class-name">
  <div>title</div> <!-- toggle button -->
  <div>body</div> <!-- accordion block -->
</div>
```
Click or tap the title, and then accordion block will expand or close.
You can use same class name for every accordion block in your web site.

## Javascript
```javascript
$(".class-name").smoothAccordion(speed);
```
Unit of `Speed` argument is second.
Set number type for argument.
All of accordion block works by writting this JS code only once.

## CSS
Not necessary.
