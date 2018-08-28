/* Score */
var score = (function(){

  var value = 0;

  function increment() {
    ++value;
    ui.score(value);
  }

  function reset() {
    value = 0;
    ui.score(value);
  }

  return { increment: increment, reset: reset };

})(document);