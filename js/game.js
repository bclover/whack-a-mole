/* Game Controller */
var game = (function(){

  var BTN_RESET = 'btnReset';
  var BTN_START = 'btnStart';
  var BTN_STOP = 'btnStop';
  var SECOND = 1000;
  var MSG_GAME_OVER = 'Game Over! Click Reset to Replenish the Clock!';
  var MSG_PAUSED = 'Game Paused. Click Start to Continue!';
  var MSG_START = 'Click Start to Begin!';
  var MSG_WHACK = 'CLICK THOSE DANGNABBIT MOLES!';
  var MSG_WHEN_READY = 'Click Start When You\'re Ready!';
  var TIME = 'time';

  var paused = true;
  var resumeTime;
  var timer;
  var timeLeft = 5;

  /* PUBLIC METHODS ************************************************************************/

  function getTimeLeft() {
    return timeLeft;
  }

  function init() {
    ui.disable(BTN_RESET);
    ui.enable(BTN_START);
    ui.disable(BTN_STOP);
    ui.msg(MSG_START);
  }

  function isPaused() {
    return paused;
  }

  function reset() {
    clearInterval(timer);
    resumeTime = null;
    timeLeft = 5;
    mole.reset();
    score.reset();
    ui.time(timeLeft);
    ui.show(TIME);
    ui.msg(MSG_WHEN_READY);
    ui.disable(BTN_RESET);
    ui.enable(BTN_START);
    ui.disable(BTN_STOP);
  }

  function start() {
    paused = false;
    timer = setInterval(updateTimer, SECOND);
    ui.msg(MSG_WHACK);
    mole.add();
    ui.enable(BTN_RESET);
    ui.disable(BTN_START);
    ui.enable(BTN_STOP);
  }

  function stop() {
    clearInterval(timer);
    paused = true;
    ui.msg(MSG_PAUSED);
    ui.enable(BTN_RESET);
    ui.enable(BTN_START);
    ui.disable(BTN_STOP);
  }

  /* PRIVATE METHODS ************************************************************************/

  function ended() {
    paused = true;
    clearInterval(timer);
    ui.msg(MSG_GAME_OVER);
    ui.enable(BTN_RESET);
    ui.disable(BTN_START);
    ui.disable(BTN_STOP);
  }

  function updateTimer() {
    (resumeTime) ? timeLeft = resumeTime : timeLeft = timeLeft;
    ui.time(--timeLeft);
    if (timeLeft === 0) {
      ended();
    }
  }

  /* EXPOSE METHODS ************************************************************************/
  return {
    getTimeLeft: getTimeLeft,
    init: init,
    isPaused: isPaused,
    reset: reset,
    start: start,
    stop: stop
  };

})();

game.init();