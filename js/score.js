/* Score Controller */
var score = (function(){

  var value = 0;

  function increment(event) {
    if(!game.isPaused()) {
      ++value;
      ui.score(value);
      ui.hide(event.target.id);
      var hole = event.target.id.slice(0,3) + 'hole';
      ui.show(hole);
    }
  }

  function reset() {
    value = 0;
    ui.score(value);
  }

  return { increment: increment, reset: reset };

})(document);