// Assignment Code
var generateBtn = document.querySelector("#generate");
var specials = "!@#$%^&*()";
var lowerCases = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompts obtaining and confirming password specs, after you press generate button
function generatePassword () { 
  var passwordLength = window.prompt ("Please enter the number of characters you want. It must be no less than 8 and no greater than 128");
  window.alert("Your password will be " + passwordLength + " characters long.");

  var numbers = window.confirm ("Do you want numbers in your password?");
  if(numbers === true) {
    window.alert("Your password will contain numbers.");
   }else  {
    window.alert("Your password will not contain numbers.");
   } 

   var lowerCases = window.confirm("Do you want lower case letters in your password?");
   if (lowerCases === true) {
    window.alert("Your password will contain lowercase letters.");
   }else{
    window.alert("Your password will not contain lowercase letters.");
   }

   var upperCases = window.confirm("Do you wants upper case letters in your password?");
   if (upperCases === true) {
    window.alert("Your password will contain uppercase letters");
   }else{
   window.alert("Your password will not contain uppercase letters.");
   }

   var specials = window.confirm("Do you want special characters in your password?");
  if (specials === true) {
  window.alert("Your password will contain special characters.");
  }else{
  window.alert("Your password will not contain special characters.");
  }
}
