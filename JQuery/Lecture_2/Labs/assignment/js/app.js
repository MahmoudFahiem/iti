$(document).ready(() => {
  $("#sidebar").hover(
    function () {
      $(this).addClass("expand");
    },
    function () {
      $(this).removeClass("expand");
    }
  );

  $("article button").on("click", function () {
    const $collapseEl = $(this).next();
    $collapseEl.slideToggle(500);
    $(".collapse").not($collapseEl).slideUp(500);
  });
});
