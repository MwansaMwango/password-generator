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
  if (pwdLowercase){
    charTypes.push("Lowercase");
  }
  if (pwdUppercase){
    charTypes.push("Uppercase");
  }
  if (pwdNumber){
    charTypes.push("Number");
  }
  if (pwdSpecialChar){
    charTypes.push("Special");
  }
  
  // Data arrays for password characters
  var passwordChars = [];
  var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberDigits = ["0","1","2","3","4","5","6","7","8","9"];
  var specialCharsList = " !\"#$%\&\'()*+,-./:;<=>?@[\\]^_`{|}~";
  var specialChars = []
  specialChars = specialCharsList.split("");

  console.log(specialChars);
  //Validate inputs
  if (pwdCharLength >= 8 && pwdCharLength <= 128){ //Check if password character length is between (7-129)
        
    if (pwdLowercase || pwdUppercase || pwdNumber || pwdSpecialChar) { // Check if at least one checkbox is checked/true
      alert("Ready to generate password. Please ensure you have privacy!");
      //Code to generate password here
      for (var i = 0; i < pwdCharLength; i++) { //Iterate for each passowrd character
        var randomCharTypeIndex = Math.floor(Math.random()*charTypes.length); //Randomize type of charater to be generated
        console.log(charTypes[randomCharTypeIndex]);
        if (charTypes[randomCharTypeIndex] === "Lowercase") { //Generate Lowercase character
          
          var randomLowercaseCharIndex = Math.floor(Math.random()*lowercaseChars.length);
          var randomLowercaseChar = lowercaseChars[randomLowercaseCharIndex];
          passwordChars.push(randomLowercaseChar);
        }
        
        else if  (charTypes[randomCharTypeIndex] === "Uppercase") { //Generate Uppecase character
          
          var randomUppercaseCharIndex = Math.floor(Math.random()*uppercaseChars.length);
          var randomUppercaseChar = uppercaseChars[randomUppercaseCharIndex];
          passwordChars.push(randomUppercaseChar);
        }

        else if (charTypes[randomCharTypeIndex] === "Number") { //Generate Number character
          
          var randomNumCharIndex = Math.floor(Math.random()*numberDigits.length);
          var randomNumChar = numberDigits[randomNumCharIndex];
          passwordChars.push(randomNumChar);
        }

        else if (charTypes[randomCharTypeIndex] === "Special") { //Generate Special character
          
          var randomSpecialCharIndex = Math.floor(Math.random()*specialChars.length);
          var randomSpecialChar = specialChars[randomSpecialCharIndex];
          passwordChars.push(randomSpecialChar);
        }
      } // End of for loop


    } else {
        alert("MUST select at least ONE character type for your password!");
    }
  } else {
    alert("MUST be a whole number between 8 and 128 characters");
  }
  password = passwordChars.join('');
  return password;
 
} // returns password