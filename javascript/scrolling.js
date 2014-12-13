$(
  function(){
    var $showNow = $(".wrapper:first-of-type");

    $("body").addClass("scrolling");
    $showNow.addClass("show");

    $(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
          showSidebar();
          break;

          case 38: // up
          goUp($showNow);
          $showNow = $showNow.prev(".wrapper").length == 0 ? $showNow : $showNow.prev();
          break;

          case 39: // right
          hideSidebar();
          break;

          case 40: // down
          goDown($showNow);
          $showNow = $showNow.next(".wrapper").length == 0 ? $showNow : $showNow.next();
          break;

          default: return;
      }
      e.preventDefault();
    });

    $(window).on("mousewheel", function(event){
      if (event.deltaY<0){
        goUp($showNow);
        $showNow = $showNow.next(".wrapper").length == 0 ? $showNow : $showNow.next();
      } else {
        goDown($showNow);
        $showNow = $showNow.prev(".wrapper").length == 0 ? $showNow : $showNow.prev();
      }
    });

  }
);

function goDown($elem) {
  var $next = $elem.next(".wrapper"),
  height=$(document).height();
  if($next.length != 0) {
    $next.addClass("show");
    TweenLite.to($elem.find("img"), 1.5, {y:height*2, ease:Back.easeInOut});
    TweenLite.fromTo($next.find("img"), 1.5, {y:-height*2}, {y:0, ease:Back.easeInOut});
    TweenLite.to($elem.find(".main-section"), 1.5, {y:-height, ease:Back.easeInOut});
    TweenLite.fromTo($next.find(".main-section"), 1.5, {y:height}, {y:0, ease:Back.easeInOut});
  }
}

function goUp($elem) {
  var $previous = $elem.prev(".wrapper"),
  height=$(document).height();
  if($previous.length != 0) {
    $previous.addClass("show");
    TweenLite.to($elem.find("img"), 1.5, {y:-height*2, ease:Back.easeInOut});
    TweenLite.fromTo($previous.find("img"), 1.5, {y:height*2}, {y:0, ease:Back.easeInOut});
    TweenLite.to($elem.find(".main-section"), 1.5, {y:height, ease:Back.easeInOut});
    TweenLite.fromTo($previous.find(".main-section"), 1.5, {y:-height}, {y:0, ease:Back.easeInOut});
  }
}
