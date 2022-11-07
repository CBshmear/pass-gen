// Assignment Code
var generateBtn = document.querySelector("#generate");
var specials = "!@#$%^&*()";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
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

function generatePassword () {
  var passwordLength = window.prompt ("Please enter the number of characters you want. It must be no less than 8 and no greater than 128");
  var numbers = window.confirm ("Do you want numbers in your password?");
  var lowerCases = window.confirm("Do you want lower case letters in your password?");
  var upperCases = window.confirm("Do you wants upper case letters in your password?");
  var specials = window.confirm("Do you want special characters in your password?");
}