var makePopDancer = function(top, left, timeBetweenSteps){
 
  makeDancer.call(this,top,left,timeBetweenSteps);
  this.$node = $('<span class="pop"><img class="popMinion" src="/Users/student/Desktop/hrsf96-subclass-dance-party/images/popMinion.gif"</span>');
  this.setPosition(top,left);
};

makePopDancer.prototype = Object.create(makeDancer.prototype);

makePopDancer.prototype.constructor = makePopDancer;

makePopDancer.prototype.step = function(){
  
  makeDancer.prototype.step.call(this);

  // this.$node.toggle();
  
}

makePopDancer.prototype.lineUp = function () {
  this.$node.toggle();
};