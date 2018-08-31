/* Mole Controller */
var mole = (function(){

  var emptyHoles = [1,2,3,4,5,6,7,8,9];
  var moleLifeTimer = [];
  var visibleMoles = [];

  /* PUBLIC METHODS ************************************************************************/

  function add() {
    var int = getRandomInt(1, cnst.get('MAX_NUM_OF_MOLES'));
    if (holeIsEmpty(int)) {
      createMole(int);
    } else {
      tryAnotherHole();
    }
  }

  function clicked(event) {
    if(game.isNotPaused()) {
      sound.playSound(cnst.get('SND_WHACK'));
      score.increment(event);
      var id = event.target.id.charAt(1);
      destroyMole(id);
    }
  }

  function escaped() {
    if(game.isNotPaused()){
      sound.playSound(cnst.get('TAUNT'), getRandomInt(1, cnst.get('NUM_OF_TAUNTS')));
    }
  }

  function reset() {
    ui.hideAllMoles();
    emptyHoles = [1,2,3,4,5,6,7,8,9];
    visibleMoles = [];
  }

  /* PRIVATE METHODS ************************************************************************/

  function createMole(int) {
    var tileNum = parseInt(int, cnst.get('RADIX'));
    ui.show(createId(tileNum, cnst.get('MOLE')));
    ui.hide(createId(tileNum, cnst.get('HOLE')));
    visibleMoles.push(tileNum);
    emptyHoles.splice(emptyHoles.indexOf(tileNum), 1);
    startMoleLife();
  }

  function createId(int, obj) {
    return 't' + int + '-' + obj;
  }

  function destroyMole(int) {
    if(int !== undefined) {
      var tileNum = parseInt(int, cnst.get('RADIX'));
      ui.show(createId(tileNum, cnst.get('HOLE')));
      ui.hide(createId(tileNum, cnst.get('MOLE')));
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

  function holeIsEmpty(int) {
    var holeNum = parseInt(int, cnst.get('RADIX'));
    var index = emptyHoles.indexOf(holeNum);
    return (index > -1);
  }

  function startMoleLife() {
    var lifeTime = getRandomInt(cnst.get('LIFE_MIN'), cnst.get('LIFE_MAX'));
    moleLifeTimer = setInterval(function() { endMoleLife(); }, lifeTime);
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