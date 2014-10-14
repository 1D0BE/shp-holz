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
    $(window).resize(
      function () {
          $('header').css('width', $(window).width());
          $('header:before').css('width', $(window).width());
      }
    );
  }
);
