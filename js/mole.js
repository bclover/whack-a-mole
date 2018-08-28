/* Mole Controller */
var moles = (function(){

  var emptyHoles = [1,2,3,4,5,6,7,8,9];
  var visibleMoles = [];

  function add() {
    var int = getRandomInt(1, 9);
    console.log('int:' + int);
    if (isHoleEmpty(int)) {
      show(int, 'mole');
      hide(int, 'hole');
      visibleMoles.push(int);
      console.log('Visible Moles: ', visibleMoles);
      emptyHoles.splice(emptyHoles.indexOf(int), 1);
      console.log('Empty Holes: ', emptyHoles);
    } else {
      if(emptyHoles.length > 1) {
        console.log('MOLE ALREADY VIS TRY AGAIN!');
        add();
      }
    };
  }

  function getRandomInt(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

  function hide(int, obj) {
    var id = 'm' + int + '-' + obj;
    ui.hide(id);
  }

  function isHoleEmpty(num) {
    var index = emptyHoles.indexOf(num);
    if (index > -1) {
      console.log('***** IS EMPTY ****');
      return true;
    } else {
      return false;
    }
  }

  function show(int, obj) {
    var id = 'm' + int + '-' + obj;
    ui.show(id);
  }

  function reset() {
    console.log('visibleMoles:', visibleMoles);
    if (visibleMoles.length > 0) {
      var loopEnd = visibleMoles.length;
      for (var i=0; i<loopEnd; i++) {
        show(visibleMoles[i], 'hole');
        hide(visibleMoles[i], 'mole');
      }
      emptyHoles = [1,2,3,4,5,6,7,8,9];
      visibleMoles = [];
    }

  }

  return { add: add, reset: reset, stop: stop };

})();