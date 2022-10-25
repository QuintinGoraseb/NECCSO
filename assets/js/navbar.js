$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
        if (scroll > 150) {
            $(".main-header").css("background" , "rgb(91,118,131)");
            //$(".main-header").css("background" , "#af7a9e");
            $(".main-header").css("-webkit-box-shadow" , "0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)");
            $(".main-header").css("box-shadow" , "box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)");
            $("nav a").css("color" , "#fff");
        }
        else{
            $(".main-header").css("background" , "transparent");
            $(".main-header").css("-webkit-box-shadow" , "none");
            $(".main-header").css("box-shadow" , "none");
            $("nav a").css("color" , "#fff");
        }
    })
})