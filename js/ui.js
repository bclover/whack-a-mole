/* UI Controller */

var ui = (function(){

  /* PUBLIC METHODS ************************************************************************/

  function hide(id) {
    var el = document.getElementById(id);
    if(el) {
      el.classList.add(cnst.get('HIDE_CLASS'));
    }
  }

  function hideAllMoles() {
      var limit = cnst.get('MAX_NUM_OF_MOLES') + 1;
      for (var i = 1; i < limit; i++) {
        show('t' + i + '-' + cnst.get('HOLE'));
        hide('t' + i + '-' + cnst.get('MOLE'));
      }
  }

  function msg(txt) {
    document.getElementById('msg').innerHTML = txt;
  }

  function reset(totalTime) {
    updateTime(totalTime);
    show(cnst.get('TIME'));
    msg(txt.get('MSG_WHEN_READY'));
  }

  function setControls(state) {
    switch(state){

      // game over state
      case cnst.get('END'):
        disable(cnst.get('BTN_START'));
        disable(cnst.get('BTN_STOP'));
        enable(cnst.get('BTN_RESET'));
        break;

      // game playing state
      case cnst.get('START'):
        disable(cnst.get('BTN_START'));
        enable(cnst.get('BTN_STOP'));
        enable(cnst.get('BTN_RESET'));
        break;

      // game paused state
      case cnst.get('STOP'):
        enable(cnst.get('BTN_START'));
        disable(cnst.get('BTN_STOP'));
        enable(cnst.get('BTN_RESET'));
        break;

      // initial game state
      default:
        enable(cnst.get('BTN_START'));
        disable(cnst.get('BTN_STOP'));
        disable(cnst.get('BTN_RESET'));
        break;
    }
  }

  function show(id) {
    var el = document.getElementById(id);
    if(el) {
      el.classList.remove(cnst.get('HIDE_CLASS'));
    }
  }

  function updateScore(value) {
    document.getElementById('score').innerHTML = cnst.get('LABEL_SCORE') + formatValue(value);
  }

  function updateTime(value) {
    document.getElementById('time').innerHTML = cnst.get('LABEL_TIME') + formatValue(value);
  }

  /* PRIVATE METHODS ************************************************************************/

  function disable(element) {
    var el = document.getElementById(element);
    el.setAttribute(cnst.get('DISABLED'), "");
  }

  function enable(element) {
    var el = document.getElementById(element);
    el.removeAttribute(cnst.get('DISABLED'));
  }

  function formatValue(value) {
    if (value < 10) {
      return '0' + value;
    } else {
      return value;
    }
  }

  /* EXPOSE METHODS ************************************************************************/
  return {
    hide: hide,
    hideAllMoles: hideAllMoles,
    msg: msg,
    reset: reset,
    setControls: setControls,
    show: show,
    updateScore: updateScore,
    updateTime: updateTime
  };

})();