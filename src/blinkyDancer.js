var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this,top,left,timeBetweenSteps);
  this.$node = $('<span class="blinky"><img class="blinkyMinion" src="/Users/chu/Desktop/hrsf96-subclass-dance-party/images/blinkyMinion.png"</span>');
  this.setPosition(top,left);
};


makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){

  makeDancer.prototype.step.call(this);
  // this.$node.animate({width: [ "toggle", "swing" ],
  //   height: [ "toggle", "swing" ],
  //   opacity: "toggle"
  // }, 1000, "linear"
  // );

  // this.$node.shake()


}

// makeBlinkyDancer.prototype.setPosition = function(top,left){
//   var styleSettings = {
//       top: top,
//       left: left
//     };
//     this.$node.css(styleSettings);
// };
