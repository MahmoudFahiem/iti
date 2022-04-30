document.body.addEventListener("keyup", (e) => {
  alert(
    `Char is ${e.key} ASCII is ${e.which}${e.altKey ? ", Alt is pressed" : ""}${
      e.shiftKey ? ", Shift is pressed" : ""
    }${e.ctrlKey ? ", Ctrl is pressed" : ""}`
  );
});
