
const button = document.querySelector(".checkButton");
const checkIcon = document.querySelector(".checkButton ion-icon");
const buttonProceed = document.querySelector(".button a");

let customCheck = true;
const proceedCheck = function () {
  checkIcon.classList.toggle("visibility");
  customCheck = checkIcon.classList.value.includes("visibility");
  console.log(customCheck);
  return customCheck;
};
button.onclick = proceedCheck;
let proceed = function () {
  console.log(customCheck);
  customCheck
    ? (buttonProceed.href = "./index1.html")
    : (buttonProceed.href = "./index2.html");
};
buttonProceed.onclick = proceed;

