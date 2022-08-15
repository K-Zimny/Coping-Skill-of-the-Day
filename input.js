const textField = document.querySelector(".input-field");
const submit = document.querySelector(".submit");

submit.addEventListener("click", function () {
  localStorage.input = textField.value;

  console.log(localStorage.input);
});

textField.value = localStorage.input;

// const textField = document.querySelector(".input-field");
// const submit = document.querySelector(".submit");
// let textFieldValue = textField.value;
// let textFieldString = textFieldValue;

// function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//   let name = cname + "=";
//   let ca = document.cookie.split(";");
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// function checkCookie() {
//   let user = getCookie("username");
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//     user = prompt("Please enter your name:", "");
//     if (user != "" && user != null) {
//       setCookie("username", user, 365);
//     }
//   }
// }
// console.log(textField);
// // setCookie("input", textFieldString, 1);
// //   getCookie("input");
// //   checkCookie();
// // setCookie("input", "test", 2);
// // console.log(textFieldString);

// submit.addEventListener("click", function () {
//   setCookie("input", textField, 1);
//   console.log(textFieldString);
// });
