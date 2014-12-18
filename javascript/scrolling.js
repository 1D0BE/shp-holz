$(
  function(){
    var $showNow = $(".wrapper:first-of-type"),
    hash = window.location.hash,
    overflow = isOverflow($showNow);

    if(!overflow) {
      $("body").addClass("scrolling");
      $(".wrapper").css("display", "none");
      $showNow.css("display", "inline");
      centerWrappers();
      if ($(hash).length) {
        scrollTo($showNow, $(hash));
        $showNow = $(hash);
      }
    }

    $(document).keydown(function(e) {
      if(!overflow && $("aside").is(":hover")) {
        switch(e.which) {
            case 37: // left
            showSidebar();
            break;

            case 38: // up
            goUp($showNow);
            $showNow = $showNow.prev(".wrapper").length === 0 ? $showNow : $showNow.prev();
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
      }
    });

    $(window).on("resize", function() {
      if(overflow !== isOverflow($showNow)) {
        window.location.reload();
      } else if (!overflow) {
        centerWrappers();
      }
    });

    $(window).on("mousewheel", function(event){
      if(!overflow && !$("aside").is(":hover")) {
        if (event.deltaY>0){
          goUp($showNow);
          $showNow = $showNow.prev(".wrapper").length === 0 ? $showNow : $showNow.prev();
        } else {
          goDown($showNow);
          $showNow = $showNow.next(".wrapper").length === 0 ? $showNow : $showNow.next();
        }
      }
    });

    $(".container a").click(function() {
      if(!$showNow.is($($(this).attr('href'))) && !overflow) {
          scrollTo($showNow, $($(this).attr('href')));
          $showNow = $($(this).attr('href'));
      }
    });

  }
);

function centerWrappers() {
  $(".scrolling .wrapper").css("top", $(window).height()/2 - $(".wrapper").find(".main-section").height()/2);
  $(".scrolling .wrapper").css({"padding-top": "0", "padding-bottom": "0"});
}

function isOverflow($showNow) {
  var overflow = $showNow.find(".main-section").offset().top + $showNow.find(".main-section").height() - $(window).height() + 50;
  return (overflow > 0);
}

function goDown($elem) {
  var $next = $elem.next(".wrapper"),
  height=$elem.offset().top + $elem.find(".main-section").height();
  if($next.length !== 0 && !window.matchMedia('(max-width: 40.063em)').matches) {
    $next.css("display", "inline");
    TweenLite.to($elem.find("img"), 0.8, {y:height*2 , ease:Sine.easeOut});
    TweenLite.fromTo($next.find("img"), 0.8, {y:-height*2}, {y:0 , ease:Sine.easeOut});
    TweenLite.to($elem.find(".main-section"), 0.8, {y:-height , ease:Sine.easeOut});
    TweenLite.fromTo($next.find(".main-section"), 0.8, {y:height}, {y:0 , ease:Sine.easeOut});
  }
}

function goUp($elem) {
  var $previous = $elem.prev(".wrapper"),
  height=$elem.offset().top + $elem.find(".main-section").height();
  if($previous.length !== 0 && !window.matchMedia('(max-width: 40.063em)').matches) {
    $previous.css("display", "inline");
    TweenLite.to($elem.find("img"), 0.8, {y:-height*2 , ease:Sine.easeOut});
    TweenLite.fromTo($previous.find("img"), 0.8, {y:height*2}, {y:0 , ease:Sine.easeOut});
    TweenLite.to($elem.find(".main-section"), 0.8, {y:height , ease:Sine.easeOut});
    TweenLite.fromTo($previous.find(".main-section"), 0.8, {y:-height}, {y:0 , ease:Sine.easeOut});
  }
}

function scrollTo($elem, $next) {
  var height=$elem.offset().top + $elem.find(".main-section").height(),
  temp;
  if($next.length !== 0 && !window.matchMedia('(max-width: 40.063em)').matches) {
    $next.css("display", "inline");
    TweenLite.to($elem.find("img"), 0.8, {y:height*2 , ease:Sine.easeOut});
    TweenLite.fromTo($next.find("img"), 0.8, {y:-height*2}, {y:0 , ease:Sine.easeOut});
    TweenLite.to($elem.find(".main-section"), 0.8, {y:-height , ease:Sine.easeOut});
    TweenLite.fromTo($next.find(".main-section"), 0.8, {y:height}, {y:0 , ease:Sine.easeOut});
  }
}
