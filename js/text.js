/* Text */

//App Namespace
(function (App) {

  //App.Const Namespace
  (function (Text) {

    //Private
    function setText(name, val) {
      Object.defineProperty(App.Text, name, {
        value: val,
        writable: false
      });
    }

    //Public
    Text.GAME_OVER = setText('GAME_OVER', 'Game Over! Click Restart to Replenish the Clock!');
    Text.PAUSED = setText('PAUSED', 'Game Paused. Click Start to Continue!');
    Text.START = setText('START', 'Click Start to Begin!');
    Text.WHACK = setText('WHACK', 'CLICK THOSE DANGNABBIT MOLES!');
    Text.WHEN_READY = setText('WHEN_READY', 'Click Start When You\'re Ready!');

    App.Text = Text;

  })(App.Text || (App.Text = {}));
})(App || (App = {}));
