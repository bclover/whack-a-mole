/* Score Controller */
var score = (function(){

  const HOLE = 'hole';
  var value = 0;

  /* PUBLIC METHODS ************************************************************************/

  function increment(event) {
      ++value;
      ui.updateScore(value);
      ui.hide(event.target.id);
      var hole = event.target.id.slice(0,3) + HOLE;
      ui.show(hole);
  }

  function reset() {
    value = 0;
    ui.updateScore(value);
  }

  /* EXPOSE METHODS ************************************************************************/
  return { increment: increment, reset: reset };

})();