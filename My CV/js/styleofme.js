  $(document).ready(function(){  
 $("#small").click(function(event){
    event.preventDefault();
   $(".things").animate({"font-size":"12px"});
   $("li").animate({"font-size":"12px"}); 
   $(".name h1").animate({"font-size":"23px"});
   $("h3").animate({"font-size":"11px"});
   $("img").animate({"font-size":"11px"});     
  });
  
  $("#medium").click(function(event){
    event.preventDefault();
    $(".things").animate({"font-size":"16px"});
    $("li").animate({"font-size":"16px"});
    $(".name h1").animate({"font-size":"25px"});
    $("h3").animate({"font-size":"13px"});  
  });
  
  $("#large").click(function(event){
    event.preventDefault();
    $(".things").animate({"font-size":"20px"});
    $("li").animate({"font-size":"20px"}); 
    $(".name h1").animate({"font-size":"27px"});
    $("h3").animate({"font-size":"15px"});  
  });

$("#classic").click(function(event){
    event.preventDefault();
    $("p").css({"color":"white"});
    $("#content").css({"backgroundColor":"#222"});
    $(".border").css({"backgroundColor":"#58A4B0"});
    $(".border").css({"border":"solid #222"});
    $(".title").css({"color":"#ffffb3"});
    $("#right").css({"background":"#373F51"});
    $("#right").css({"color":"white"});
    $(".bordernav").css({"border-top": "2px dotted #A9BCD0"});
    $(".bordernav").css({"border-bottom": "2px dotted #A9BCD0"});
    $(".job h3").css({"color":"#D8DBE2"});
    $(".rtitle span").css({"color":"#A9BCD0"});
  });

$("#basic").click(function(event){
    event.preventDefault();
    $("p").css({"color":"#333"});
    $("#content").css({"backgroundColor":"#F5F5F5"});
    $(".border").css({"backgroundColor":"#277BB1"});
    $(".border").css({"border":"solid #F5F5F5"});
    $(".title").css({"color":"white"});
    $("#right").css({"background":"#BBD6E2"});
    $("#right").css({"color":"black"});
    $(".bordernav").css({"border-top": "2px dotted #6E3B22"});
    $(".bordernav").css({"border-bottom": "2px dotted #6E3B22"});
    $(".job h3").css({"color":" #1A1018"});
    $(".rtitle span").css({"color":"#6E3B22"});

  });
    
  $( "a" ).click(function() {
   $("a").removeClass("selected");
  $(this).addClass("selected");
  
 });

});