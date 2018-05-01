var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="blinky"><img class="blinkyMinion" src="/Users/student/Desktop/hrsf96-subclass-dance-party/images/blinkyMinion.gif"</span>');
  this.setPosition(top, left);
};


makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {

  //requires an extra clock tick:
  // setTimeout(this.step.bind(this), this._timeBetweenSteps);

  // doesn't require an extra clock tick:
  // var context = this;
  //setTimout(function() {
  //  context.step()
  // }, this._timeBetweenSteps);

  // makeDancer.prototype.step.call(this);
  // this.$node.toggle();
};


