const btns = document.querySelectorAll(".btn");
const alerts = document.querySelectorAll(".alert");

const clickHandler = (e) => {
  const alertSelector = e.currentTarget.getAttribute("data-alert");
  const alert = document.getElementById(alertSelector);
  const alertSiblings = document.querySelectorAll(
    `.alert:not(#${alertSelector})`
  );
  hideAlerts(alertSiblings);
  showAlert(alert);
};

btns.forEach((btn) => {
  btn.addEventListener("click", clickHandler);
});

const hideAlerts = (alerts) =>
  alerts.forEach((alert) => alert.classList.remove("show"));
const showAlert = (alert) => alert.classList.add("show");
