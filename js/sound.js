/* Sound Controller */
var sound = (function(){

  // PUBLIC MEMBERS
  var taunts = [cnst.get('TAUNT1'), cnst.get('TAUNT2'), cnst.get('TAUNT3'), cnst.get('TAUNT4')];

  /* PUBLIC METHODS ************************************************************************/

  function playSound(type, int) {

    var dir = cnst.get('AUDIO_DIR');
    var sound;

    if(type === cnst.get('TAUNT') && game.isNotPaused()) {  // make sure the game isn't paused before playing a taunt
      var taunt = chooseTaunt(int);
      sound =  new Audio(dir + taunt);
      sound.play();
    } else {                                                // other sounds should always play
      sound = new Audio(dir + type);
      sound.play();
    }
  }

  /* PRIVATED METHODS ************************************************************************/

  function chooseTaunt(int) {
    var selectedTaunt = taunts[int-1];
    return selectedTaunt;
  }

  /* EXPOSE METHODS & MEMBERS ****************************************************************/
  return { playSound: playSound };

})();