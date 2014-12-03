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
    imgRatio;

    function placeImg() {
        var side,
        actHeight,
        imgHeight;
        imgHeight = imgRatio*($(document).width()/2);
        side = (imgHeight-$mainImg.parent().parent().outerHeight());
        actHeight = $mainImg.parent().parent().outerHeight() + side/2;
        if(imgHeight >= $mainImg.parent().parent().outerHeight() && !window.matchMedia('(max-width: 40.063em)').matches) {
          if(side === 0) {
            side = 1;
          }
          console.log('-'+side/2+'px'+$mainImg.width());
          $mainImg.css({
            'height': 'auto',
            'width': '50vw',
            'top': '-'+side/2+'px',
            'clip': 'rect('+side/2+'px'+', 2000px,'+actHeight+'px'+', 0px)'
          });
        } else {
          $mainImg.css({
            'height': '',
            'width': '',
            'clip': '',
            'top': ''
            });
        }
    }

    $mainImg.on('load', function () {
      imgRatio = $mainImg.height()/$mainImg.width();
      placeImg();
      $(window).resize(function () {
        placeImg();
      });
    });

  }
);
