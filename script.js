// Assignment Code
var generateBtn = document.querySelector("#generate");

var specials = "!@#$%^&*()";
var lowerCases = "abcdefghijklmnopqrstuvwxyz";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
/*
var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"*/
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
  if (passwordLength < 8 || passwordLength > 128) {
    return;
  }
  window.alert("Your password will be " + passwordLength + " characters long.");
  var charSet = "";
  var hasNumbers = window.confirm ("Do you want numbers in your password?");
  if(hasNumbers === true) {
    charSet += numbers;
    window.alert("Your password will contain numbers.");
   }else  {
    window.alert("Your password will not contain numbers.");
   } 

   var hasLowerCases = window.confirm("Do you want lower case letters in your password?");
   if (hasLowerCases === true) {
    charSet += lowerCases;
    window.alert("Your password will contain lowercase letters.");
   }else{
    window.alert("Your password will not contain lowercase letters.");
   }

   var hasUpperCases = window.confirm("Do you wants upper case letters in your password?");
   if (hasUpperCases === true) {
    charSet += upperCases;
    window.alert("Your password will contain uppercase letters");
   }else{
   window.alert("Your password will not contain uppercase letters.");
   }

   var hasSpecials = window.confirm("Do you want special characters in your password?");
  if (hasSpecials === true) {
    charSet += specials;
  window.alert("Your password will contain special characters.");
  }else{
  window.alert("Your password will not contain special characters.");
  }

  for (var i = 0; i <= passwordLength; i++) {
    var randomChar = Math.floor(Math.random() * charSet.length);
    password += charSet.substring(randomChar, randomChar + 1);
  }
  return password;

}
