$(document).ready(() => {
  const toggleClassOptions = {
    duration: 1000,
    easing: "linear",
    complete: () => {
      console.log("class toggled");
    },
    children: false,
    queue: true,
  };

  $("#toggle-class").on("click", function () {
    $(this).toggleClass("effect-1", toggleClassOptions);
  });

  $("#switch-class").on("click", function () {
    $(this).switchClass("effect-1", "effect-2", 1000, "easeOutBounce", () => {
      console.log("classes switched");
    });
  });
});
