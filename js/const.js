/* Constants */

var App = null;

//App Namespace
(function (App) {

  //App.Const Namespace
  (function (Const) {

    //Private
    function createConstant(name, val) {
      Object.defineProperty(App.Const, name, {
        value: val,
        writable: false
      });
    }

    //Public
    Const.AUDIO_DIR = createConstant('AUDIO_DIR', '../audio/');
    Const.BEGIN = createConstant('BEGIN', 'begin');
    Const.BTN_RESET = createConstant('BTN_RESET', 'btnReset');
    Const.BTN_RESET = createConstant('BEGIN', 'begin');
    Const.BTN_START = createConstant('BTN_START', 'btnStart');
    Const.BTN_STOP = createConstant('BTN_STOP', 'btnStop');
    Const.DISABLED = createConstant('DISABLED', 'disabled');
    Const.END = createConstant('END', 'end');
    Const.GAME_OVER = createConstant('GAME_OVER', 'gameOver');
    Const.HIDE_CLASS = createConstant('HIDE_CLASS', 'hide');
    Const.HOLE = createConstant('HOLE', 'hole');
    Const.LABEL_SCORE = createConstant('LABEL_SCORE', 'Score: ');
    Const.LABEL_TIME = createConstant('LABEL_TIME', 'Time: ');
    Const.LIFE_MAX = createConstant('LIFE_MAX', 2000);
    Const.LIFE_MIN = createConstant('LIFE_MIN', 250);
    Const.MAX_NUM_OF_MOLES = createConstant('MAX_NUM_OF_MOLES', 9);
    Const.MAX_TIME = createConstant('MAX_TIME', 20);
    Const.MOLE = createConstant('MOLE', 'mole');
    Const.NUM_OF_TAUNTS = createConstant('NUM_OF_TAUNTS', 4);
    Const.RADIX = createConstant('RADIX', 10);
    Const.RESTART = createConstant('RESTART', 'restart');
    Const.SECOND = createConstant('SECOND', 1000);
    Const.SND_BEGIN = createConstant('SND_BEGIN', 'begin.mp3');
    Const.SND_END = createConstant('SND_END', 'end.mp3');
    Const.SND_RESTART = createConstant('SND_RESTART', 'restart.mp3');
    Const.SND_TICK = createConstant('SND_TICK', 'tick.mp3');
    Const.SND_WHACK = createConstant('SND_WHACK', 'whack.mp3');
    Const.START = createConstant('START', 'start');
    Const.STOP = createConstant('STOP', 'stop');
    Const.TAUNT = createConstant('TAUNT', 'taunt');
    Const.TAUNT1 = createConstant('TAUNT1', 'laugh1.mp3');
    Const.TAUNT2 = createConstant('TAUNT2', 'laugh2.mp3');
    Const.TAUNT3 = createConstant('TAUNT3', 'raspberry.mp3');
    Const.TAUNT4 = createConstant('TAUNT4', 'uh-oh.mp3');
    Const.TIME = createConstant('TIME', 'time');

    App.Const = Const;

  })(App.Const || (App.Const = {}));
})(App || (App = {}));
