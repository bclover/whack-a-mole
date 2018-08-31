/* Sound Controller */
var sound = (function(){

  /* PUBLIC METHODS ************************************************************************/

  function playSound(type, int) {

    var dir = cnst.get('AUDIO_DIR');
    var sound;
    var file;

    if(type === cnst.get('TAUNT')) {
      file = chooseTaunt(int);
    } else {
      file = type;
    }
    sound = new Audio(dir + file);
    sound.play();
  }

  /* PRIVATE METHODS ************************************************************************/

  function chooseTaunt(int) {
    var taunts = [cnst.get('TAUNT1'), cnst.get('TAUNT2'), cnst.get('TAUNT3'), cnst.get('TAUNT4')];
    var selectedTaunt = taunts[int-1];
    return selectedTaunt;
  }

  /* EXPOSE METHODS & MEMBERS ****************************************************************/
  return { playSound: playSound };

})();