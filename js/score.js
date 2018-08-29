/* Score Controller */
var score = (function(){

  var value = 0;

  /* PUBLIC METHODS ************************************************************************/

  function increment(event) {
      ++value;
      ui.score(value);
      ui.hide(event.target.id);
      var hole = event.target.id.slice(0,3) + 'hole';
      ui.show(hole);
  }

  function reset() {
    value = 0;
    ui.score(value);
  }

  /* EXPOSE METHODS ************************************************************************/
  return { increment: increment, reset: reset };

})(document);