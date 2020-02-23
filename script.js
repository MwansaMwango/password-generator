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
  // Collect password criteria user inputs

  
  var pwdCharLength = document.getElementById("pwdCharLength").value; // number of characters in password
  var pwdLowercase = document.getElementById("lowercase").checked;
  var pwdUppercase = document.getElementById("uppercase").checked;
  var pwdNumber = document.getElementById("number").checked;
  var pwdSpecialChar = document.getElementById("specialChar").checked;
  
  //Validate inputs
  if (pwdCharLength >= 8 && pwdCharLength <= 128){ //Check if password character length is between (7-129)
        
    if (pwdLowercase || pwdUppercase || pwdNumber || pwdSpecialChar) { // Check if at least one checkbox is checked/true
      alert("Ready to generate password. Please ensure you have privacy!");
      //Code to generate password here
      
    } else {
        alert("MUST select at least ONE character type for your password!");
    }
  } else {
    alert("MUST be a whole number between 8 and 128 characters");
  }

  return;
 
} // returns password