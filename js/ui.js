/* UI Controller */

var ui = (function(document){

  var BTN_RESET = 'btnReset';
  var BTN_START = 'btnStart';
  var BTN_STOP = 'btnStop';
  var HOLE = 'hole';
  var LABEL_SCORE = 'Score: ';
  var LABEL_TIME = 'Time: ';
  var MAX_NUM_OF_MOLES = 9;
  var MOLE = 'mole';
  var TIME = 'time';

  /* PUBLIC METHODS ************************************************************************/

  function hide(id) {
    var el = document.getElementById(id);
    if(el) {
      el.classList.add('hide');
    }
  }

  function hideAllMoles() {
      var limit = MAX_NUM_OF_MOLES+1;
      for (var i = 1; i < limit; i++) {
        show('t' + i + '-' + HOLE);
        hide('t' + i + '-' + MOLE);
      }
  }

  function msg(txt) {
    document.getElementById('msg').innerHTML = txt;
  }

  function reset(totalTime) {
    updateTime(totalTime);
    show(TIME);
    msg(txt.get('MSG_WHEN_READY'));
  }

  function setControls(state) {
    switch(state){

      case 'end':
        disable(BTN_START);
        disable(BTN_STOP);
        enable(BTN_RESET);
        break;

      case 'start':
        disable(BTN_START);
        enable(BTN_STOP);
        enable(BTN_RESET);
        break;

      case 'stop':
        enable(BTN_START);
        disable(BTN_STOP);
        enable(BTN_RESET);
        break;

      default:
        enable(BTN_START);
        disable(BTN_STOP);
        disable(BTN_RESET);
        break;
    }
  }

  function show(id) {
    var el = document.getElementById(id);
    if(el) {
      el.classList.remove('hide');
    }
  }

  function updateScore(value) {
    document.getElementById('score').innerHTML = LABEL_SCORE + formatValue(value);
  }

  function updateTime(value) {
    document.getElementById('time').innerHTML = LABEL_TIME + formatValue(value);
  }

  /* PRIVATE METHODS ************************************************************************/

  function disable(element) {
    var el = document.getElementById(element);
    el.setAttribute('disabled', "");
  }

  function enable(element) {
    var el = document.getElementById(element);
    el.removeAttribute('disabled');
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

})(document);