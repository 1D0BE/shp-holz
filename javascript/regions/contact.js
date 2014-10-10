"use strict";
$(
  function () {
      $('.profile-image').click(
        function () {
          $('.profile-info').parent().removeClass('selected');
          console.log($(this).nextUntil('.profile-info'));
          $(this).parent().addClass('selected');
        }
      );
  }
);
