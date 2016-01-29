$(document).ready(function(){
   $('.single-item').slick({
      // dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 800,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: true,
      prevArrow:"<img class='a-left control-c prev slick-prev' src='images/arrow-left.png'>",
      nextArrow:"<img class='a-right control-c next slick-next' src='images/arrow-right.png'>",
      onAfterChange : function() {
        player.stopVideo();
      }
    });
});

