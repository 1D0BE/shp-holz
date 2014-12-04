$(
  function(){
    var firstTime = true,
    topPosition,
    $main = $(".main-section");

    $(window).on("mousewheel", function(){
      if(firstTime) {
          $(".main-section").css({
            "width": "50%",
            "float": "right"
          });
          $(".main-section p").css({
            "left": "0",
            "width": "100%"
          });
          $(".main-section img:not(.icon):not(.profile-image)").css({
            "left": "-50vw"
          });
          firstTime = false;
      }
      TweenLite.to($main, 1, {top:$main.offset().top-500});
    });
  }
);
