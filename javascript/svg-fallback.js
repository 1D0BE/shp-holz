$(
  function () {
    if (!Modernizr.svg) {
      $("img[src$='.svg']").each(
        function () {
          var fallback = $(this).prop('src').replace('svg', 'png');
          $(this).prop('src', fallback);
        }
      );
    }
  }
);
