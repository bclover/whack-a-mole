/* UI Controller */

var ui = (function(){

  /* PUBLIC METHODS ************************************************************************/

  function hide(id) {
    var el = document.getElementById(id);
    if(el) {
      el.classList.add(App.Const.HIDE_CLASS);
    }
  }

  function hideAllMoles() {
      var limit = App.Const.MAX_NUM_OF_MOLES + 1;
      for (var i = 1; i < limit; i++) {
        show('t' + i + '-' + App.Const.HOLE);
        hide('t' + i + '-' + App.Const.MOLE);
      }
  }

  function msg(txt) {
    document.getElementById('msg').innerHTML = txt;
  }

  function reset(totalTime) {
    updateTime(totalTime);
    show(App.Const.TIME);
    msg(App.Text.WHEN_READY);
  }

  function setControls(state) {
    switch(state){

      // game over state
      case App.Const.END:
        disable(App.Const.BTN_START);
        disable(App.Const.BTN_STOP);
        enable(App.Const.BTN_RESET);
        break;

      // game playing state
      case App.Const.START:
        disable(App.Const.BTN_START);
        enable(App.Const.BTN_STOP);
        enable(App.Const.BTN_RESET);
        break;

      // game paused state
      case App.Const.STOP:
        enable(App.Const.BTN_START);
        disable(App.Const.BTN_STOP);
        enable(App.Const.BTN_RESET);
        break;

      // initial game state
      default:
        enable(App.Const.BTN_START);
        disable(App.Const.BTN_STOP);
        disable(App.Const.BTN_RESET);
        break;
    }
  }

  function show(id) {
    var el = document.getElementById(id);
    if(el) {
      el.classList.remove(App.Const.HIDE_CLASS);
    }
  }

  function updateScore(value) {
    document.getElementById('score').innerHTML = App.Const.LABEL_SCORE + formatValue(value);
  }

  function updateTime(value) {
    document.getElementById('time').innerHTML = App.Const.LABEL_TIME + formatValue(value);
  }

  /* PRIVATE METHODS ************************************************************************/

  function disable(element) {
    var el = document.getElementById(element);
    el.setAttribute(App.Const.DISABLED, "");
  }

  function enable(element) {
    var el = document.getElementById(element);
    el.removeAttribute(App.Const.DISABLED);
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