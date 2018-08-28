/* Game Controller */
var game = (function(){

  var MSG_GAME_OVER = 'Game Over! Click Reset to Replenish the Clock!';
  var MSG_PAUSED = 'Game Paused. Click Start to Continue!';
  var MSG_WHACK = 'CLICK THOSE DAGNABBIT MOLES!';
  var MSG_WHEN_READY = 'Click Start When You\'re Ready!';

  var resumeTime;
  var timer;
  var timeLeft = 5;

  function reset() {
    clearInterval(timer);
    resumeTime = null;
    timeLeft = 5;
    score.reset();
    ui.time(timeLeft);
    ui.show('time');
    ui.msg(MSG_WHEN_READY);
    ui.disable('btnReset');
    ui.enable('btnStart');
    ui.disable('btnStop');
  }

  function start() {
    timer = setInterval(updateTimer, 1000);
    ui.msg(MSG_WHACK);
    ui.show('m5-mole');
    ui.hide('m5-hole');
    ui.enable('btnReset');
    ui.disable('btnStart');
    ui.enable('btnStop');
  }

  function stop() {
    clearInterval(timer);
    ui.msg(MSG_PAUSED);
    ui.enable('btnReset');
    ui.enable('btnStart');
    ui.disable('btnStop');
  }

  function timerEnded() {
    clearInterval(timer);
    ui.msg(MSG_GAME_OVER);
    ui.enable('btnReset');
    ui.disable('btnStart');
    ui.disable('btnStop');
  }

  function updateTimer() {
    (resumeTime) ? timeLeft = resumeTime : timeLeft = timeLeft;
    ui.time(--timeLeft);
    if (timeLeft === 0) {
      timerEnded();
    }
  }

  return { reset: reset, start: start, stop: stop };

})();