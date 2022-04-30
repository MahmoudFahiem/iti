const inputUI = document.querySelector("input");

const openWindow = () => {
  const sentence = (inputUI.value || "This is a default sentence").split("");
  const newWindow = window.open("", "", "width=500, height=300");
  newWindow.focus();
  let currentIndex = 0;
  const clearRef = setInterval(() => {
    newWindow.document.body.textContent += sentence[currentIndex];
    currentIndex === sentence.length - 1
      ? clearInterval(clearRef)
      : currentIndex++;
  }, 100);
};
