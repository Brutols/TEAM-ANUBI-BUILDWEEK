
const button = document.querySelector(".checkButton");
const checkIcon = document.querySelector(".checkButton ion-icon");
const buttonProceed = document.querySelector(".button a");

let customCheck = true;
const proceedCheck = function () {
  checkIcon.classList.toggle("visibility");
  customCheck = checkIcon.classList.value.includes("visibility");

  return customCheck;
};
button.onclick = proceedCheck;
let proceed = function () {
  customCheck
    ? (buttonProceed.href = "./index1.html")
    : (buttonProceed.href = "./index2.html");
};
buttonProceed.onclick = proceed;

