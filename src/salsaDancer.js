var makeSalsaDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this,top,left,timeBetweenSteps);
  this.$node = $('<span class="salsa"><img class="salsaMinion" src="/Users/student/Desktop/hrsf96-subclass-dance-party/images/salsaMinion.gif"</span>');
  this.setPosition(top,left);
};


makeSalsaDancer.prototype = Object.create(makeDancer.prototype);

makeSalsaDancer.prototype.constructor = makeSalsaDancer;

makeSalsaDancer.prototype.step = function(){

  // makeDancer.prototype.step.call(this);
  // this.$node.animate({width: [ "toggle", "swing" ],
  //   height: [ "toggle", "swing" ],
  //   opacity: "toggle"
  // }, 1000, "linear"
  // );
}

makeSalsaDancer.prototype.lineUp = function (top, left) {
  setPosition(top, left);
};