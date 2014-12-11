$(
  function(){
    var firstTime = true,
    topPosition,
    $main = $(".main-section"),
    lastScrollTop = 0,
    fontSize=$main.css("font-size");

    $("body").addClass("scrolling");
    $(".wrapper:first-of-type").addClass("show");

    $(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
          showSidebar();
          break;

          case 38: // up
          goUp();
          break;

          case 39: // right
          hideSidebar();
          break;

          case 40: // down
          break;

          default: return;
      }
      e.preventDefault();
    });

    $(window).on("mousewheel", function(event){
      var st = $(this).scrollTop();
      if (event.deltaY<0){
        TweenLite.to($main, 1, {top:$main.offset().top-(32*fontSize.replace("px","")+$main.height())});
      } else {
        TweenLite.to($main, 1, {top:$main.offset().top+(32*fontSize.replace("px",""))});
      }
      lastScrollTop = st;
    });
  }
);

function goUp($elem) {
  TweenLite.to($elem, 1, {bottom:"100%"});
}

function goDown($elem) {
  TweenLite.to($elem, 1, {top:"100%"});
}
