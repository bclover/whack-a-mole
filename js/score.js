/* Score Controller */
var score = (function(){

  var value = 0;

  /* PUBLIC METHODS ************************************************************************/

  function increment(event) {
      ++value;
      ui.updateScore(value);
      ui.hide(event.target.id);
      var holeElement = event.target.id.slice(0,3) + App.Const.HOLE;
      ui.show(holeElement);
  }

  function reset() {
    value = 0;
    ui.updateScore(value);
  }

  /* EXPOSE METHODS ************************************************************************/
  return { increment: increment, reset: reset };

})();