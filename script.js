// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Collect user password criteria details
  var pwdLength = prompt ("Enter password length: (MUST contain between 8 and 128 charaters)");
  var pwdChartype = prompt () // use checkbox

  return (num * 10);
} // returns password