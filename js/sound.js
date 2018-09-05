/* Sound Controller */
var sound = (function(){

  /* PUBLIC METHODS ************************************************************************/

  function playSound(type, int) {

    var dir = App.Const.AUDIO_DIR;
    var sound;
    var file;

    if(type === App.Const.TAUNT) {
      file = chooseTaunt(int);
    } else {
      file = type;
    }
    sound = new Audio(dir + file);
    sound.play();
  }

  /* PRIVATE METHODS ************************************************************************/

  function chooseTaunt(int) {
    var taunts = [App.Const.TAUNT1, App.Const.TAUNT2, App.Const.TAUNT3, App.Const.TAUNT4];
    var selectedTaunt = taunts[int-1];
    return selectedTaunt;
  }

  /* EXPOSE METHODS & MEMBERS ****************************************************************/
  return { playSound: playSound };

})();