/* Mole Controller */
var mole = (function(){

  var HOLE = 'hole';
  var MAX_NUM_OF_MOLES = 9;
  var LIFE_MAX = 2000;
  var LIFE_MIN = 250;
  var MOLE = 'mole';
  var RADIX = 10;

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
    if(game.isNotPaused()) {
      sound.playSound('whack');
      score.increment(event);
      var id = event.target.id.charAt(1);
      destroyMole(id);
    }
  }

  function escaped() {
    sound.playSound('taunt', getRandomInt(1, sound.TAUNTS.length));
  }

  function reset() {
    ui.hideAllMoles();
    clearArrays();
  }

  /* PRIVATE METHODS ************************************************************************/

  function clearArrays() {
    emptyHoles = [1,2,3,4,5,6,7,8,9];
    visibleMoles = [];
  }

  function createMole(int) {
    var tileNum = parseInt(int, RADIX);
    show(tileNum, MOLE);
    hide(tileNum, HOLE);
    visibleMoles.push(tileNum);
    emptyHoles.splice(emptyHoles.indexOf(tileNum), 1);
    startMoleLife();
  }

  function destroyMole(int) {
    if(int !== undefined) {
      var tileNum = parseInt(int, RADIX);
      show(tileNum, HOLE);
      hide(tileNum, MOLE);
      emptyHoles.push(tileNum);
      var moleToRemove = visibleMoles.indexOf(tileNum);
      visibleMoles.splice(moleToRemove, 1);
    }
  }

  function endMoleLife() {
    destroyMole(visibleMoles[0]);
    clearInterval(moleLifeTimer);
    if(game.getTimeLeft() > 0 && game.isNotPaused()){
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

  function holeIsEmpty(int) {
    var holeNum = parseInt(int, RADIX);
    var index = emptyHoles.indexOf(holeNum);
    return (index > -1);
  }

  function show(int, obj) {
    var id = 't' + int + '-' + obj;
    ui.show(id);
  }

  function startMoleLife() {
    var lifeTime = getRandomInt(LIFE_MIN, LIFE_MAX);
    moleLifeTimer = setInterval(function() { endMoleLife(); }, lifeTime);
  }

  function tauntUser(taunt) {
    var taunt = new Audio(AUDIO_DIR + taunt);
    taunt.play();
  }

  function tryAnotherHole() {
    if(emptyHoles.length === 1) {
      createMole(emptyHoles[0]);
    } else if(emptyHoles.length > 1) {
      mole.add();
    }
  }

  /* EXPOSE METHODS ************************************************************************/
  return { add: add, clicked: clicked, escaped: escaped, reset: reset };

})();