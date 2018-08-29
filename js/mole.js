/* Mole Controller */
var mole = (function(){

  var HOLE = 'hole';
  var MAX_NUM_OF_MOLES = 9;
  var LIFE_MAX = 2000;
  var LIFE_MIN = 250;
  var MOLE = 'mole';

  var emptyHoles = [1,2,3,4,5,6,7,8,9];
  var moleLifeTimer = [];
  var visibleMoles = [];

  /* PUBLIC METHODS ************************************************************************/

  function add() {
    var int = getRandomInt(1, MAX_NUM_OF_MOLES);
    if (holeIsEmpty(int)) {
      createMole(int);
    } else {
      tryAnotherHole();
    }
  }

  function clicked(event) {
    if(!game.isPaused()) {
      score.increment(event);
      var id = event.target.id.charAt(1);
      destroyMole(id);
    }
  }

  function reset() {
    hideAllMoles();
    clearArrays();
  }

  /* PRIVATE METHODS ************************************************************************/

  function clearArrays() {
    emptyHoles = [1,2,3,4,5,6,7,8,9];
    visibleMoles = [];
  }

  function createMole(int) {
    show(int, MOLE);
    hide(int, HOLE);
    visibleMoles.push(int);
    emptyHoles.splice(emptyHoles.indexOf(int), 1);
    startMoleLife();
  }

  function destroyMole(int) {
    show(int, HOLE);
    hide(int, MOLE);
    emptyHoles.push(int);
    var moleToRemove = visibleMoles.indexOf(parseInt(int));
    visibleMoles.splice(moleToRemove, 1);
  }

  function endMoleLife(int) {
    destroyMole(visibleMoles[0]);
    clearInterval(moleLifeTimer);
    if(game.getTimeLeft() > 0 && !game.isPaused()){
      add();
    }
  }

  function getRandomInt(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

  function hide(int, obj) {
    var id = 't' + int + '-' + obj;
    ui.hide(id);
  }

  function hideAllMoles() {
    if (visibleMoles.length > 0) {
      var limit = MAX_NUM_OF_MOLES+1;
      for (var i = 0; i < limit; i++) {
        show(visibleMoles[ i ], HOLE);
        hide(visibleMoles[ i ], MOLE);
      }
    }
  }

  function holeIsEmpty(num) {
    var index = emptyHoles.indexOf(num);
    if (index > -1) {
      return true;
    } else {
      return false;
    }
  }

  function show(int, obj) {
    var id = 't' + int + '-' + obj;
    ui.show(id);
  }

  function startMoleLife() {
    var lifeTime = getRandomInt(LIFE_MIN, LIFE_MAX);
    moleLifeTimer = setInterval(function() { endMoleLife(); }, lifeTime);
  }

  function tryAnotherHole() {
    if(emptyHoles.length === 1) {
      createMole(emptyHoles[0]);
    }

    if(emptyHoles.length > 1) {
      mole.add();
    }
  }

  /* EXPOSE METHODS ************************************************************************/
  return { add: add, clicked: clicked, reset: reset };

})();