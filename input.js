// local storage
const textFieldOne = document.querySelector(".input-field-one");
const textFieldTwo = document.querySelector(".input-field-two");
const textFieldThree = document.querySelector(".input-field-three");
const textFieldFour = document.querySelector(".input-field-four");

textFieldOne.addEventListener("change", function () {
  localStorage.inputOne = textFieldOne.value;
});
textFieldTwo.addEventListener("change", function () {
  localStorage.inputTwo = textFieldTwo.value;
});
textFieldThree.addEventListener("change", function () {
  localStorage.inputThree = textFieldThree.value;
});
textFieldFour.addEventListener("change", function () {
  localStorage.inputFour = textFieldFour.value;
});

textFieldOne.value = localStorage.inputOne;
textFieldTwo.value = localStorage.inputTwo;
textFieldThree.value = localStorage.inputThree;
textFieldFour.value = localStorage.inputFour;

// --------------------------------------------------
// Reset Local Storage at midnight
let today = new Date();
var time = today.getHours();

if (time == 24) {
  localStorage.input = "What is a positive quality";
}
