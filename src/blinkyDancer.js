var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this,top,left,timeBetweenSteps);
  this.$node = $('<span class="blinky"></span>');
  this.setPosition(top,left);
};


makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){

  makeDancer.prototype.step.call(this);
  this.$node.animate({left:"+=50", height:"toggle"},5000);

}

// makeBlinkyDancer.prototype.setPosition = function(top,left){
//   var styleSettings = {
//       top: top,
//       left: left
//     };
//     this.$node.css(styleSettings);
// };
