$(
  function () {
    $('.show-menu').click(
      function () {
        if ($(this).parent().hasClass('expanded')) {
          $(this).parent().removeClass('expanded');
        } else {
          $(this).parent().addClass('expanded');
        }
      }
    );

    var $mainImg = $('.main-section>article>img:not(.no-clip)'),
    imgRatio = $mainImg.height()/$mainImg.width();

    function placeImg() {
        var side,
        actHeight,
        imgHeight;
        imgHeight = imgRatio*($(document).width()/2);
            side = (imgHeight-$mainImg.parent().parent().outerHeight());
            actHeight = $mainImg.parent().parent().outerHeight() + side/2;
            if(imgHeight >= $mainImg.parent().parent().outerHeight()) {
              $mainImg.css({
                'height': 'auto',
                'width': '50vw'
                });
              $mainImg.css({
                'top': '-'+side/2+'px',
                'clip': 'rect('+side/2+'px'+', 2000px,'+actHeight+'px'+', 0px)'
              });
            } else {
              $mainImg.css({
                'height': '100%',
                'width': 'auto',
                'clip': 'auto',
                'top': 0
                });
            }
    }

    $(window).resize(function () {
      placeImg();
    });

  }
);
