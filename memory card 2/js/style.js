var img = ["image/hk.jpg", "image/hulk.jpg", "image/bw.jpg", 
"image/im.jpg", "image/dp.jpg", "image/thor.jpg", "image/ca.jpg", 
"image/sw.jpg", "image/spider.jpg", "image/am.jpg", "image/bp.jpg", 
"image/vision.jpg"];
var current = null;

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
      setTimeout(function() {
        //Giong nhau
        $(card).css('opacity', '0');
        current.css('opacity', '0'); 
        current = null;
      }, 300);
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