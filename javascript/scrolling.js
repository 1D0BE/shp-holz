$(
  function(){
    var $showNow = $(".wrapper:first-of-type"),
    hash = window.location.hash;

    $showNow.addClass("show");

    if ($(hash).length) {
      scrollTo($showNow, $(hash));
      setTimeout(function () {
        $showNow.remove("show");
      }, 3);
      $showNow = $(hash);
    }

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
          $showNow = $showNow.next(".wrapper").length === 0 ? $showNow : $showNow.next();
          break;

          default: return;
      }
      e.preventDefault();
    });

    $(window).on("mousewheel", function(event){
      if (event.deltaY>0){
        goUp($showNow);
        $showNow = $showNow.prev(".wrapper").length === 0 ? $showNow : $showNow.prev();
      } else {
        goDown($showNow);
        $showNow = $showNow.next(".wrapper").length === 0 ? $showNow : $showNow.next();
      }
    });

    $(".container a").click(function() {
      if(!$showNow.is($($(this).attr('href')))) {
          scrollTo($showNow, $($(this).attr('href')));
          $showNow = $($(this).attr('href'));
      }
    });

  }
);

function goDown($elem) {
  var $next = $elem.next(".wrapper"),
  height=$(document).height();
  if($next.length !== 0 && !window.matchMedia('(max-width: 40.063em)').matches) {
    $next.addClass("show");
    TweenLite.to($elem.find("img"), 0.8, {y:height*2 , ease:Back.easeOut});
    TweenLite.fromTo($next.find("img"), 0.8, {y:-height*2}, {y:0 , ease:Back.easeOut});
    TweenLite.to($elem.find(".main-section"), 0.8, {y:-height , ease:Back.easeOut});
    TweenLite.fromTo($next.find(".main-section"), 0.8, {y:height}, {y:0 , ease:Back.easeOut, onComplete: hide, onCompleteParams: [$elem]});
  }
}

function goUp($elem) {
  var $previous = $elem.prev(".wrapper"),
  height=$(document).height();
  if($previous.length !== 0 && !window.matchMedia('(max-width: 40.063em)').matches) {
    $previous.addClass("show");
    TweenLite.to($elem.find("img"), 0.8, {y:-height*2 , ease:Back.easeOut});
    TweenLite.fromTo($previous.find("img"), 0.8, {y:height*2}, {y:0 , ease:Back.easeOut});
    TweenLite.to($elem.find(".main-section"), 0.8, {y:height , ease:Back.easeOut});
    TweenLite.fromTo($previous.find(".main-section"), 0.8, {y:-height}, {y:0 , ease:Back.easeOut, onComplete: hide, onCompleteParams: [$elem]});
  }
}

function scrollTo($elem, $next) {
  var height=$(document).height(),
  temp;
  if($next.length !== 0 && !window.matchMedia('(max-width: 40.063em)').matches) {
    $next.addClass("show");
    TweenLite.to($elem.find("img"), 0.8, {y:height*2 , ease:Back.easeOut});
    TweenLite.fromTo($next.find("img"), 0.8, {y:-height*2}, {y:0 , ease:Back.easeOut});
    TweenLite.to($elem.find(".main-section"), 0.8, {y:-height , ease:Back.easeOut});
    TweenLite.fromTo($next.find(".main-section"), 0.8, {y:height}, {y:0 , ease:Back.easeOut, onComplete: hide, onCompleteParams: [$elem]});
  }
}

function show($elem) {
  $elem.addClass("show");
}

function hide($elem) {
  $elem.removeClass("show");
}
