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
    side,
    actHeight;
    $mainImg.css({
      'height': 'auto',
      'width': '50%',
      'opacity': '0'
      });
      setTimeout(function () {
        side = ($mainImg.height()-$mainImg.parent().parent().outerHeight());
        actHeight = $mainImg.parent().parent().outerHeight() + side/2;
        $mainImg.css({
          'top': '-'+side/2+'px',
          'clip': 'rect('+side/2+'px'+', 2000px,'+actHeight+'px'+', 0px)',
          'opacity': '1'
        });
      }, 1);
  }
);
