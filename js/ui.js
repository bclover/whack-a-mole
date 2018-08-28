/* UI Controller */

var ui = (function(document){

  function disable(element) {
    var el = document.getElementById(element);
    el.setAttribute('disabled', "");
  }

  function enable(element) {
    var el = document.getElementById(element);
    el.removeAttribute('disabled');
  }

  function msg(txt) {
    document.getElementById('msg').innerHTML = txt;
  }

  function hide(id) {
    console.log('ui hide() ', id);
    var el = document.getElementById(id);
    if(el) {
      el.classList.add('hide');
    }
  }

  function score(value) {
    document.getElementById('score').innerHTML = 'Score: ' + value;
  }

  function show(id) {
    console.log('ui.show() ', id);
    var el = document.getElementById(id);
    if(el) {
      el.classList.remove('hide');
    }
  }

  function time(value) {
    document.getElementById('time').innerHTML = 'Time: ' + value;
  }

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