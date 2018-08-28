/* Mole Controller */
var moles = (function(){

  var visibleMoles = [];

  function hide(int, obj) {
    var id = 'm' + int + '-' + obj;
    ui.hide(id);
  }

  function show(int, obj) {
    var id = 'm' + int + '-' + obj;
    visibleMoles.push(id);
    ui.show(id);
  }

  function getRandomInt(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log('NUM:' + num);
    return num;
  }

  function reset() {
    console.log('visibleMoles:', visibleMoles);
    if(visibleMoles.length > 0) {
      var loopEnd = visibleMoles.length - 1;
      for (var i=1; i<loopEnd; i++) {
        show(i, 'hole');
        hide(i, 'mole');
      }
      visibleMoles = [];
    }

  }

  function add() {
    var randomInt = getRandomInt(1, 9);
    show(randomInt, 'mole');
    hide(randomInt, 'hole');
  }

  return { add: add, reset: reset, stop: stop };

})();