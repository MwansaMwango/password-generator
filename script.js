// Assignment Code
var generateBtnEl = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordTextEl = document.querySelector("#password");
  passwordTextEl.value = password;
  passwordTextEl.addEventListener("click", copyPasswordtoClipboard); // Click in text area to copy password to clipboard
}

function copyPasswordtoClipboard() {
  var el = document.createElement("textarea");
  el.value = password; // set element to password
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  alert("Password Copied to Clipboard");
}

// Add event listener to generate button
generateBtnEl.addEventListener("click", writePassword);

function generatePassword() {
  // Collect password criteria user inputs

  var pwdCharLength = document.getElementById("pwdCharLength").value; // number of characters in password
  var pwdLowercase = document.getElementById("lowercase").checked;
  var pwdUppercase = document.getElementById("uppercase").checked;
  var pwdNumber = document.getElementById("number").checked;
  var pwdSpecialChar = document.getElementById("specialChar").checked;
  var charTypes = [];

  // Create array from user selected character types
  if (pwdLowercase) {
    charTypes.push("Lowercase");
  }
  if (pwdUppercase) {
    charTypes.push("Uppercase");
  }
  if (pwdNumber) {
    charTypes.push("Number");
  }
  if (pwdSpecialChar) {
    charTypes.push("Special");
  }

  // Data arrays for password characters
  var passwordChars = [];
  var numberDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; // List of possible digits. Char codes can be used as alternative
  var specialCharsList = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; //Special character list string. Char codes can be used as alternative
  var specialChars = [];
  specialChars = specialCharsList.split(""); //Convert special character string to array

  //Validate inputs
  if (pwdCharLength >= 8 && pwdCharLength <= 128) {
    //Check if password character length is between (7-129)

    if (pwdLowercase || pwdUppercase || pwdNumber || pwdSpecialChar) {
      // Check if at least one checkbox is checked/true/1
      console.log(
        "Ready to generate password. Please ensure you have privacy!"
      ); // Test output in console

      //Code to generate password here
      do {
        for (var i = 0; i < pwdCharLength; i++) {
          //Iterate for each password character
          var randomCharTypeIndex = Math.floor(
            Math.random() * charTypes.length
          ); //Randomize type of character to be generated based on types checked by user

          if (charTypes[randomCharTypeIndex] === "Lowercase") {
            // Generate Random Lowercase character

            var randomLowercaseCharIndex = Math.floor(
              Math.random() * 26 // Generate random number from 0 to 25 (26 is not included!)
            );

            var randomLowercaseChar = String.fromCharCode(
              randomLowercaseCharIndex + 97
            ); // Character codes: 'a' = 97 to 'z' = 122.
            passwordChars.push(randomLowercaseChar);
            var lowerCaseUsed = true; // Flag that lowercase character type criteria has been satisfied
          } else if (charTypes[randomCharTypeIndex] === "Uppercase") {
            // Generate Random Uppecase character

            var randomUppercaseCharIndex = Math.floor(
              Math.random() * 26 // Generate random number from 0 to 25 (26 is not included!)
            );
            var randomUppercaseChar = String.fromCharCode(
              randomUppercaseCharIndex + 65
            ); // Character codes: 'A' = 65 to 'Z' = 90.
            passwordChars.push(randomUppercaseChar);
            var upperCaseUsed = true; // Flag that uppercase character type criteria has been satisfied
          } else if (charTypes[randomCharTypeIndex] === "Number") {
            // Generate Random Number character

            var randomNumCharIndex = Math.floor(
              Math.random() * numberDigits.length
            );
            var randomNumChar = numberDigits[randomNumCharIndex];
            passwordChars.push(randomNumChar);
            var numUsed = true; // Flag that number character type criteria has been satisfied
          } else if (charTypes[randomCharTypeIndex] === "Special") {
            // Generate Random Special character

            var randomSpecialCharIndex = Math.floor(
              Math.random() * specialChars.length
            );
            var randomSpecialChar = specialChars[randomSpecialCharIndex];
            passwordChars.push(randomSpecialChar);
            var specialUsed = true; // Flag that special character type criteria has been satisfied
          }
        } // End of for loop

        // Validate password against selected criteria
        var pwdInvalid =
          pwdLowercase ^ lowerCaseUsed ||
          pwdUppercase ^ upperCaseUsed ||
          pwdNumber ^ numUsed ||
          pwdSpecialChar ^ specialUsed; // XOR only returns "1" only when operands are different i.e. 1 OR 0. If invalid resolves to "1"
        console.log(
          pwdLowercase ^ lowerCaseUsed ||
            pwdUppercase ^ upperCaseUsed ||
            pwdNumber ^ numUsed ||
            pwdSpecialChar ^ specialUsed
        ); //Test output in console

        if (pwdInvalid) {
          passwordChars = []; // Clear current password characters if invalid
        }
      } while (pwdInvalid); // If password password is NOT valid i.e. ==="1" then re-execute do loop to re-generate new password. Loop until valid.
    } else {
      alert("MUST select at least ONE character type for your password!");
    }
  } else {
    alert("MUST be a whole number between 8 and 128 characters");
  }
  password = passwordChars.join(""); // Convert array of password characters into string
  return password;
} // Returns password string
