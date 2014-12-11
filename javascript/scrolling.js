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
          $showNow = $showNow.next();
          break;

          case 39: // right
          hideSidebar();
          break;

          case 40: // down
          goDown($showNow);
          $showNow = $showNow.prev();
          break;

          default: return;
      }
      e.preventDefault();
    });

    $(window).on("mousewheel", function(event){
      if (event.deltaY<0){

      } else {

      }
    });

  }
);

function goUp($elem) {
  var $next = $elem.next(),
  height=$(document).height();
  $next.addClass("show");
  TweenLite.to($elem.find("img"), 1.5, {y:height*2, ease:Back.easeInOut});
  TweenLite.fromTo($next.find("img"), 1.5, {y:-height*2}, {y:0, ease:Back.easeInOut});
  TweenLite.to($elem.find(".main-section"), 1.5, {y:-height, ease:Back.easeInOut});
  TweenLite.fromTo($next.find(".main-section"), 1.5, {y:height}, {y:0, ease:Back.easeInOut});
}

function goDown($elem) {
  var $previous = $elem.prev(),
  height=$(document).height();
  $previous.addClass("show");
  TweenLite.to($elem.find("img"), 1.5, {y:-height*2, ease:Back.easeInOut});
  TweenLite.fromTo($previous.find("img"), 1.5, {y:height*2}, {y:0, ease:Back.easeInOut});
  TweenLite.to($elem.find(".main-section"), 1.5, {y:height, ease:Back.easeInOut});
  TweenLite.fromTo($previous.find(".main-section"), 1.5, {y:-height}, {y:0, ease:Back.easeInOut});
}
