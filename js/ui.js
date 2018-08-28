/* Render */

var ui = (function(document){

  function disable(element) {
    var el = document.getElementById(element);
    el.setAttribute('disabled', "");
  }

  function enable(element) {
    var el = document.getElementById(element);
    el.removeAttribute('disabled');
  }

  function message(msg) {
    document.getElementById('msg').innerHTML = msg;
  }

  function hide(element) {
    var el = document.getElementById(element);
    el.classList.add('hide');
  }

  function score(value) {
    document.getElementById('score').innerHTML = 'Score: ' + value;
  }

  function show(element) {
    var el = document.getElementById(element);
    el.classList.remove('hide');
  }

  function time(value) {
    document.getElementById('time').innerHTML = 'Time: ' + value;
  }

  return {
    disable: disable,
    enable: enable,
    hide: hide,
    message: message,
    score: score,
    show: show,
    time: time
  };

})(document);