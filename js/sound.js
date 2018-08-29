/* Sound Controller */
var sound = (function(){

  // PUBLIC MEMBERS
  var TAUNTS = ['laugh1.mp3', 'laugh2.mp3', 'raspberry.mp3', 'uh-oh.mp3'];

  // PRIVATE MEMBERS
  var AUDIO_DIR = '../audio/';
  var BEGIN = 'begin';
  var GAME_OVER = 'gameOver';
  var RESTART = 'restart';
  var TAUNT = 'taunt';
  var TICK = 'tick';
  var WHACK = 'whack';

  /* PUBLIC METHODS ************************************************************************/

  function playSound(type, int) {
    var file;

    switch(type) {

      case BEGIN:
        file = 'begin.mp3';
        perform(file);
        break;

      case GAME_OVER:
        file = 'end.mp3';
        perform(file);
        break;

      case RESTART:
        file = 'restart.mp3';
        perform(file);
        break;

      case TAUNT:
        if(game.isNotPaused()){
          file = chooseTaunt(int);
          perform(file);
        }
        break;

      case TICK:
        file = 'tick.mp3';
        perform(file);
        break;

      case WHACK:
        file = 'whack.mp3';
        perform(file);
        break;

      default:
        break;
    }
  }

  /* PRIVATED METHODS ************************************************************************/

  function perform(file) {
    var sound = new Audio(AUDIO_DIR + file);
    sound.play();
  }
  function chooseTaunt(int) {
    var selectedTaunt = TAUNTS[int-1];
    return selectedTaunt;
  }

  /* EXPOSE METHODS & MEMBERS ****************************************************************/
  return { playSound: playSound, TAUNTS: TAUNTS};

})();