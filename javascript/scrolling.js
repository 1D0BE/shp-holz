$(
  function(){
    var firstTime = true,
    topPosition,
    $main = $(".main-section"),
    lastScrollTop = 0,
    fontSize=$main.css("font-size");

    $("body").css({
      "height":"100%",
      "overflow":"hidden"
    });

    $(window).on("mousewheel", function(event){
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
      var st = $(this).scrollTop();
      console.log(16*fontSize.replace("px",""));
      if (event.deltaY<0){
        TweenLite.to($main, 1, {top:$main.offset().top-(32*fontSize.replace("px","")+$main.height())});
      } else {
        TweenLite.to($main, 1, {top:$main.offset().top+(32*fontSize.replace("px",""))});
      }
      lastScrollTop = st;
    });
  }
);
