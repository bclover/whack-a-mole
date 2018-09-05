/* Game Controller */
var game = (function(){

  // private members
  var paused = true;
  var resumeTime;
  var timer;
  var timeLeft = App.Const.MAX_TIME;

  /* PUBLIC METHODS ************************************************************************/

  function getTimeLeft() {
    return timeLeft;
  }

  function init() {
    ui.setControls();
    ui.msg(App.Text.START);
  }

  function isNotPaused() {
    return !paused;
  }

  function reset() {
    paused = true;
    sound.playSound(App.Const.SND_RESTART);
    clearInterval(timer);
    resumeTime = null;
    timeLeft = App.Const.MAX_TIME;
    mole.reset();
    score.reset();
    ui.reset(timeLeft);
    ui.setControls();
  }

  function start() {
    sound.playSound(App.Const.SND_BEGIN);
    paused = false;
    timer = setInterval(updateTimer, App.Const.SECOND);
    mole.add();
    ui.msg(App.Text.WHACK);
    ui.setControls(App.Const.START);
  }

  function stop() {
    paused = true;
    clearInterval(timer);
    mole.reset();
    ui.msg(App.Text.PAUSED);
    ui.setControls(App.Const.STOP);
  }

  /* PRIVATE METHODS ************************************************************************/

  function gameOver() {
    paused = true;
    clearInterval(timer);
    ui.msg(App.Text.GAME_OVER);
    ui.setControls(App.Const.END);
    sound.playSound(App.Const.SND_END);
  }

  function updateTimer() {
    (resumeTime) ? timeLeft = resumeTime : timeLeft = timeLeft;
    sound.playSound(App.Const.SND_TICK);
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