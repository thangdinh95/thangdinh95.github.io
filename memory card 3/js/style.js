var img = ["image/hk.jpg", "image/hulk.jpg", "image/bw.jpg", 
"image/im.jpg", "image/dp.jpg", "image/thor.jpg", "image/ca.jpg", 
"image/sw.jpg", "image/spider.jpg", "image/am.jpg", "image/bp.jpg", 
"image/vision.jpg"];
var current = null;
var count = 0;


//suffle the imange in arr img
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var remainingTime = null;
var run = setInterval(function() {
  remainingTime--;

  $('.progress').html('00 : ' + remainingTime);

  //Time's up
  if (remainingTime == 0) {
    clearInterval(run);
    $('.loser').css('display', 'block');
    document.getElementById('theme').pause();
    document.getElementById('losereffect').play();
  }
}, 1000);

function easy () {
  document.getElementById('button').play();
  document.getElementById('theme').play();
  $('.mode').css('display', 'none');

  remainingTime = 61;
}

function medium () {
  document.getElementById('button').play();
  document.getElementById('theme').play();
  $('.mode').css('display', 'none');

  remainingTime = 51;
}

function hard () {
  document.getElementById('button').play();
  document.getElementById('theme').play();
  $('.mode').css('display', 'none');

  remainingTime = 41;
}

function playagain(){
  window.location.href = 'index.html';
}

function flip (card) {
  $(card).toggleClass('flip');

  if (!current) {
    current = $(card);
    $(card).css('pointer-events', 'none');
  } else {
    $('.card').css('pointer-events', 'auto');
    if (current.attr('data-name') != $(card).attr('data-name')) {
      document.getElementById('wrong').play();
      setTimeout(function() {
        //Khac nhau
        current.toggleClass('flip');       
        $(card).toggleClass('flip');
        current = null;
      }, 400);
    } else {
      document.getElementById('win').play();
      $(card).css('pointer-events', 'none');
      current.css('pointer-events', 'none');


      setTimeout(function() {
        //Giong nhau
        $(card).css('visibility', 'hidden');
        current.css('visibility', 'hidden'); 

        current = null;

        count ++;
        if (count == 12){
          $('.winner').css('display', 'block');
          document.getElementById('theme').pause();
          document.getElementById('winnereffect').play();
          clearInterval(run);
        };
      }, 90);
    }
  }
}

$(function() {
  img = shuffle(img);
// duplicate the arr
  img = img.concat(img);

//insert content to html
var html = '';
for (var i = 0; i < img.length; i++) {
  html += '<div class ="card" data-name="' + img[i] + '" onclick="flip(this)">'+
'<div class="front"><img src ="image/front.jpg"></div>' +
'<div class="back"><img src="' + img[i] + '"></div>' + 
'</div>';
};

$('.grid').html(html);


}); 