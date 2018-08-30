/* Game Controller */
var game = (function(){

  // private members
  var paused = true;
  var resumeTime;
  var timer;
  var timeLeft = cnst.get('MAX_TIME');

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
    sound.playSound(cnst.get('SND_RESTART'));
    clearInterval(timer);
    resumeTime = null;
    timeLeft = cnst.get('MAX_TIME');
    mole.reset();
    score.reset();
    ui.reset(timeLeft);
    ui.setControls();
  }

  function start() {
    sound.playSound(cnst.get('SND_BEGIN'));
    paused = false;
    timer = setInterval(updateTimer, cnst.get('SECOND'));
    mole.add();
    ui.msg(txt.get('MSG_WHACK'));
    ui.setControls(cnst.get('START'));
  }

  function stop() {
    paused = true;
    clearInterval(timer);
    mole.reset();
    ui.msg(txt.get('MSG_PAUSED'));
    ui.setControls(cnst.get('STOP'));
  }

  /* PRIVATE METHODS ************************************************************************/

  function gameOver() {
    paused = true;
    clearInterval(timer);
    ui.msg(txt.get('MSG_GAME_OVER'));
    ui.setControls(cnst.get('END'));
    sound.playSound(cnst.get('SND_END'));
  }

  function updateTimer() {
    (resumeTime) ? timeLeft = resumeTime : timeLeft = timeLeft;
    sound.playSound(cnst.get('SND_TICK'));
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