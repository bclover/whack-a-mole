/* Game Controller */
var game = (function(){

  // Constants
  var SECOND = 1000;
  var MAX_TIME = 20;
  var MSG_GAME_OVER = 'Game Over! Click Reset to Replenish the Clock!';
  var MSG_PAUSED = 'Game Paused. Click Start to Continue!';
  var MSG_START = 'Click Start to Begin!';
  var MSG_WHACK = 'CLICK THOSE DANGNABBIT MOLES!';

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
    ui.msg(MSG_START);
  }

  function isNotPaused() {
    return !paused;
  }

  function reset() {
    clearInterval(timer);
    resumeTime = null;
    timeLeft = MAX_TIME;
    mole.reset();
    score.reset();
    ui.reset(timeLeft);
    ui.setControls();
  }

  function start() {
    paused = false;
    timer = setInterval(updateTimer, SECOND);
    mole.add();
    ui.msg(MSG_WHACK);
    ui.setControls('start');
  }

  function stop() {
    paused = true;
    clearInterval(timer);
    mole.reset();
    ui.msg(MSG_PAUSED);
    ui.setControls('stop');
  }

  /* PRIVATE METHODS ************************************************************************/

  function gameOver() {
    paused = true;
    clearInterval(timer);
    ui.msg(MSG_GAME_OVER);
    ui.setControls('end');
  }

  function updateTimer() {
    (resumeTime) ? timeLeft = resumeTime : timeLeft = timeLeft;
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