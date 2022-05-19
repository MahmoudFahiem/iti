$(document).ready(() => {
  $("img").mousemove((e) => {
    const pageWidth = innerWidth;
    const pageHeight = innerHeight;
    const leftVal = e.pageX + 25;
    const topVal = e.pageY + 25;
    const $newImg = $(
      `<img class="new-img" src="${$(e.currentTarget).attr("src")}" />`
    );
    $(".new-img").remove();
    $("body").append($newImg);
    $newImg.css({
      left:
        leftVal > pageWidth - $newImg.innerWidth()
          ? leftVal - $newImg.innerWidth()
          : leftVal,
      top:
        topVal > pageHeight + $newImg.innerHeight()
          ? topVal + $newImg.innerHeight()
          : topVal,
    });
  });
  $("img").mouseout(() => {
    $(".new-img").remove();
  });
});
