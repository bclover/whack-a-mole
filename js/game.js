/* Game Controller */
var game = (function(){

  // Constants
  var SECOND = 1000;
  var MAX_TIME = 20;

  // private members
  var paused = true;
  var resumeTime;
  var timer;
  var timeLeft = MAX_TIME;

  /* PUBLIC METHODS ************************************************************************/

  function getTimeLeft() {
    return timeLeft;
  }

  function init() {
    ui.setControls();
    ui.msg(txt.get('MSG_START'));
  }

  function isNotPaused() {
    return !paused;
  }

  function reset() {
    paused = true;
    sound.playSound('restart');
    clearInterval(timer);
    resumeTime = null;
    timeLeft = MAX_TIME;
    mole.reset();
    score.reset();
    ui.reset(timeLeft);
    ui.setControls();
  }

  function start() {
    sound.playSound('begin');
    paused = false;
    timer = setInterval(updateTimer, SECOND);
    mole.add();
    ui.msg(txt.get('MSG_WHACK'));
    ui.setControls('start');
  }

  function stop() {
    paused = true;
    clearInterval(timer);
    mole.reset();
    ui.msg(txt.get('MSG_PAUSED'));
    ui.setControls('stop');
  }

  /* PRIVATE METHODS ************************************************************************/

  function gameOver() {
    paused = true;
    clearInterval(timer);
    ui.msg(txt.get('MSG_GAME_OVER'));
    ui.setControls('end');
    sound.playSound('gameOver');
  }

  function updateTimer() {
    (resumeTime) ? timeLeft = resumeTime : timeLeft = timeLeft;
    sound.playSound('tick');
    ui.updateTime(--timeLeft);
    if (timeLeft === 0) {
      gameOver();
    }
  }

  /* EXPOSE METHODS ************************************************************************/
  return {
    getTimeLeft: getTimeLeft,
    init: init,
    isNotPaused: isNotPaused,
    reset: reset,
    start: start,
    stop: stop
  };

})();

// Let's Get It Started!
game.init();