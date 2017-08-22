$(function () {

var img = ["image/hk.jpg", "image/hulk.jpg", "image/bw.jpg", 
"image/im.jpg", "image/dp.jpg", "image/thor.jpg", "image/ca.jpg", 
"image/sw.jpg", "image/spider.jpg", "image/am.jpg", "image/bp.jpg", 
"image/vision.jpg"];

img = shuffle(img);


var html = '';
for (var i = 0; i < img.length; i++) {
	html += '<div class ="card">'+
'<div class="front"><img src ="image/front.jpg"></div>' +
'<div class="back"><img src="' + img[i] + '"></div>' + 
'</div>';
};

$('.grid').html(html);


$('.card').click(function (){
	$(this).children().css("transform", "rotateY(180deg)");
	$(this).children().css("transform", "rotateY(0deg)");
});

});


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