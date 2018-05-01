var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  
  makeDancer.call(this,top,left,timeBetweenSteps);
  // this.dance();

};


makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
  
  makeDancer.prototype.step.call(this);

  this.$node.toggle();
  
}

// makeBlinkyDancer.prototype.dance = function(){
//   this.$node.effect("bounce",{times:3}, 300)
// }

// function makeNewPosition() {
//   var h = $(window).height() - 50;
//   var w =

// }

