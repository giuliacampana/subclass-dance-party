var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this,top,left,timeBetweenSteps);
  this.$node = $('<span class="blinky"><img class="blinkyMinion" src="/Users/student/Desktop/hrsf96-subclass-dance-party/images/blinkyMinion.gif"</span>');
  this.setPosition(top,left);
};


makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){

  // makeDancer.prototype.step.call(this);
  // this.$node.animate({width: [ "toggle", "swing" ],
  //   height: [ "toggle", "swing" ],
  //   opacity: "toggle"
  // }, 1000, "linear"
  // );
}

makeBlinkyDancer.prototype.lineUp = function (top, left) {
  setPosition(top, left);
};

