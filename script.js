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
  var uppercaseChars = [
    //List of Uppercase alphabet. Regex can be used as alternative
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  var lowercaseChars = [
    // List of lowercase alphabet. Regex can be used as alternative
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  var numberDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; // List of possible digits. Regex can be used as alternative
  var specialCharsList = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; //Special character list string
  var specialChars = [];
  specialChars = specialCharsList.split(""); //Convert special character string to array

  //Validate inputs
  if (pwdCharLength >= 8 && pwdCharLength <= 128) {
    //Check if password character length is between (7-129)

    if (pwdLowercase || pwdUppercase || pwdNumber || pwdSpecialChar) {
      // Check if at least one checkbox is checked/true/1
      console.log(
        "Ready to generate password. Please ensure you have privacy!"
      );

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
              Math.random() * lowercaseChars.length
            );
            var randomLowercaseChar = lowercaseChars[randomLowercaseCharIndex];
            passwordChars.push(randomLowercaseChar);
            var lowerCaseUsed = true; // Flag that lowercase character type criteria has been satisfied
          } else if (charTypes[randomCharTypeIndex] === "Uppercase") {
            // Generate Random Uppecase character

            var randomUppercaseCharIndex = Math.floor(
              Math.random() * uppercaseChars.length
            );
            var randomUppercaseChar = uppercaseChars[randomUppercaseCharIndex];
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

        // Validate password against criteria
        var pwdInvalid =
          pwdLowercase ^ lowerCaseUsed ||
          pwdUppercase ^ upperCaseUsed ||
          pwdNumber ^ numUsed ||
          pwdSpecialChar ^ specialUsed; // XOR returns "1" only when operands are different i.e. 1 OR 0. If invalid resolves to "1"
        console.log(
          pwdLowercase ^ lowerCaseUsed ||
            pwdUppercase ^ upperCaseUsed ||
            pwdNumber ^ numUsed ||
            pwdSpecialChar ^ specialUsed
        ); //Test output in console

        if (pwdInvalid) {
          passwordChars = []; // Clear password characters
        }
      } while (pwdInvalid); // If password password is NOT valid i.e. ==="1" then re-execute do loop or re-generate password
    } else {
      alert("MUST select at least ONE character type for your password!");
    }
  } else {
    alert("MUST be a whole number between 8 and 128 characters");
  }
  password = passwordChars.join(""); // Cconvert array of password characters into string
  return password;
} // Returns password
