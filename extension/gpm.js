/*
 * Use inject to put some common functions into global scope
 * so they can be used in the player function
 *
 * May God have mercy on my soul
 */
inject(function() {
  dispatchMouseEvent = function(target, var_args) {
    var e = document.createEvent("MouseEvents");
    // if you need clientX, clientY, etc., you can call
    // initMouseEvent instead of initEvent
    e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
    target.dispatchEvent(e);
  };
});


inject(function() { 
  clickElem = function(elem_id) {
    element = document.getElementById(elem_id);
    dispatchMouseEvent(element, 'mouseover', true, true);
    dispatchMouseEvent(element, 'mousedown', true, true);
    dispatchMouseEvent(element, 'mouseup', true, true);
  };
});

var previous = function () {
  clickElem('rew');
}
var playPause = function () {
  clickElem('playPause');
}
var next = function () {
  clickElem('ff');
}

