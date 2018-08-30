/* Text Controller */
var txt = (function() {
  var private = {
    'MSG_GAME_OVER': 'Game Over! Click Restart to Replenish the Clock!',
    'MSG_PAUSED': 'Game Paused. Click Start to Continue!',
    'MSG_START': 'Click Start to Begin!',
    'MSG_WHACK': 'CLICK THOSE DANGNABBIT MOLES!',
    'MSG_WHEN_READY': 'Click Start When You\'re Ready!'
  };

  return {
    get: function(name) { return private[name]; }
  };
})();