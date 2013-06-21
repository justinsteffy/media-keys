/*
 * Use inject to put some common functions into global scope
 * so they can be used in the player function
 *
 * May God have mercy on my soul
 */
inject(function() {
  clickDataId = function(data_id) {
    var buttons = document.getElementsByClassName("player-middle")[0].children;
    for (var i=0; i<buttons.length; i++) {
      var elem = buttons[i];
      if(elem.getAttribute("data-id") === data_id) {
        elem.click();
        return;
      }
    }
  };
});

var previous = function () {
  clickDataId('rewind');
}
var playPause = function () {
  clickDataId('play-pause');
}
var next = function () {
  clickDataId('forward');
}

