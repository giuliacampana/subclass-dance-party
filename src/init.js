
$(document).ready(function() {
  window.dancers = [];

  // console.log(window.dancers);

  var blinkyCount = 10;
  $('.addBlinkyDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var blinky = new dancerMakerFunction(
      600,
      blinkyCount += 70,
      1000 );

    $('section').append(blinky.$node);

    window.dancers.push(blinky.$node);

  });

  var popCount = 1000;
  $('.addPopDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var pop = new dancerMakerFunction(
      400,
      popCount -= 50,
      1000
    );

    $('section').append(pop.$node);

    window.dancers.push(pop.$node);

  });

  var salsaCount = 50;
  $('.addSalsaDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var salsa = new dancerMakerFunction(
      500,
      salsaCount += 80,
      1000
    );

    $('section').append(salsa.$node);

    window.dancers.push(salsa.$node);
    console.log(window.dancers);

  });

  $('.lineUpDancer').on('click', function(event) {
    
    $('.salsa').css('top', 500);
    $('.pop').css('top', 500);
    $('.blinky').css('top', 500);
   
  });

  $('div.pop').on('mouseover', function(event) {
    $(this).css('cursor', 'pointer');
    // $().animate({width: '50%', height: '50%'}, 'slow');
  });

  // $('.pop').mouseover(function() {
  //   $(this).css('cursor', 'pointer');
  //   $(this).animate({width: '500px'}, 'slow');
  // });

  // $('.pop').hover(function() {
  //   $(this).css('cursor', 'pointer');
  //   $(this).toggle('scale', {
  //     effect: 'scale',
  //     percent: '90%'
  //   }, 200);

});



