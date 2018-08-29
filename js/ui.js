/* UI Controller */

var ui = (function(document){

  var LABEL_SCORE = 'Score: ';
  var LABEL_TIME = 'Time: ';

  /* PUBLIC METHODS ************************************************************************/

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
      return value = '0' + value;
    } else {
      return value;
    }
  }
  function msg(txt) {
    document.getElementById('msg').innerHTML = txt;
  }

  function hide(id) {
    var el = document.getElementById(id);
    if(el) {
      el.classList.add('hide');
    }
  }

  function score(value) {
    document.getElementById('score').innerHTML = LABEL_SCORE + formatValue(value);
  }

  function show(id) {
    var el = document.getElementById(id);
    if(el) {
      el.classList.remove('hide');
    }
  }

  function time(value) {
    document.getElementById('time').innerHTML = LABEL_TIME + formatValue(value);
  }

  /* EXPOSE METHODS ************************************************************************/
  return {
    disable: disable,
    enable: enable,
    hide: hide,
    msg: msg,
    score: score,
    show: show,
    time: time
  };

})(document);