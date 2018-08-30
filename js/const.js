/* Constants Controller */
var cnst = (function() {
  var private = {
    'AUDIO_DIR': '../audio/',
    'BEGIN': 'begin',
    'BTN_RESET': 'btnReset',
    'BTN_START': 'btnStart',
    'BTN_STOP': 'btnStop',
    'DISABLED': 'disabled',
    'END': 'end',
    'GAME_OVER': 'gameOver',
    'HIDE_CLASS': 'hide',
    'HOLE': 'hole',
    'LABEL_SCORE': 'Score: ',
    'LABEL_TIME': 'Time: ',
    'LIFE_MAX': 2000,
    'LIFE_MIN': 250,
    'MAX_NUM_OF_MOLES': 9,
    'MAX_TIME': 20,
    'MOLE': 'mole',
    'NUM_OF_TAUNTS': 4,
    'RADIX': 10,
    'RESTART': 'restart',
    'SECOND': 1000,
    'SND_BEGIN': 'begin.mp3',
    'SND_END': 'end.mp3',
    'SND_RESTART': 'restart.mp3',
    'SND_TICK': 'tick.mp3',
    'SND_WHACK': 'whack.mp3',
    'START': 'start',
    'STOP': 'stop',
    'TAUNT': 'taunt',
    'TAUNT1': 'laugh1.mp3',
    'TAUNT2': 'laugh2.mp3',
    'TAUNT3': 'raspberry.mp3',
    'TAUNT4': 'uh-oh.mp3',
    'TIME': 'time'
  };

  return {
    get: function(name) { return private[name]; }
  };
})();