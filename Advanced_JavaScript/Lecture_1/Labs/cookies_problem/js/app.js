import cookie from "./cookie.js";

const usernameUI = document.getElementById("username");

const redirectToRegisterPage = () => {
  location.assign("register.html");
};

document.addEventListener("DOMContentLoaded", () => {
  const username = cookie.getItem("username");
  if (!username) return redirectToRegisterPage();
  usernameUI.textContent = username;
  cookie.setItem("counter", `${parseInt(cookie.getItem("counter")) + 1 || 1}`);
});
