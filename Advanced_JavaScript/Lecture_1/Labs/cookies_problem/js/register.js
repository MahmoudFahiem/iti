import cookie from "./cookie.js";

const UI = {
  userNameIn: document.querySelector("#name"),
  passwordIn: document.querySelector("#password"),
  genderIns: document.querySelectorAll("#gender input"),
  favColor: document.querySelector("#fav-color"),
  form: document.querySelector("form"),
};

UI.form.addEventListener("submit", (e) => {
  e.preventDefault();
  cookie.setItem("username", UI.userNameIn.value);
  cookie.setItem("password", UI.passwordIn.value);
  let genderVal;
  UI.genderIns.forEach((input) => {
    if (input.checked) genderVal = input.value;
  });
  const favColorVal = UI.favColor.value;
  cookie.setItem("gender", genderVal);
  cookie.setItem("favColor", favColorVal);
  redirectToMainPage();
});

const redirectToMainPage = () => {
  location.assign("index.html");
};

document.addEventListener("DOMContentLoaded", () => {
  if (cookie.getItem("username")) redirectToMainPage();
});
