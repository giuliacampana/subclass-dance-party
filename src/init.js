var count = 10;
$(document).ready(function() {
  window.dancers = [];

  $('.addBlinkyDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    console.log("pass");
    var blinky= new dancerMakerFunction(
      500,
      // $("section").width() * Math.random(),
      count += 20,
      1000 )

    $('section').append(blinky.$node);


});

$('.addPopDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var pop = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 2000
);

    $('body').append(pop.$node);

  });

});
