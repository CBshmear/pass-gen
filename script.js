// Assignment Code
var generateBtn = document.querySelector("#generate");

var specials = "!@#$%^&*()";
var lowerCases = "abcdefghijklmnopqrstuvwxyz";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
  var password = "";
  var passwordLength = window.prompt ("Please enter the number of characters you want. It must be no less than 8 and no greater than 128");
  // checks the length is appropriate
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter an appropriate value for length");
    return;
  }
  window.alert("Your password will be " + passwordLength + " characters long.");
  var charSet = "";
  // asks user to include numbers
  var hasNumbers = window.confirm ("Do you want numbers in your password?");
  if(hasNumbers === true) {
    //adds choice to viable characters list
    charSet += numbers;
    //confirms user choice
    window.alert("Your password will contain numbers.");
   }else{
    window.alert("Your password will not contain numbers.");
   } 
   // asks user to include lowercase
   var hasLowerCases = window.confirm("Do you want lower case letters in your password?");
   if (hasLowerCases === true) {
    charSet += lowerCases;
    //confirms user choice
    window.alert("Your password will contain lowercase letters.");
   }else{
    window.alert("Your password will not contain lowercase letters.");
   }
   // asks user to include uppercase
   var hasUpperCases = window.confirm("Do you wants upper case letters in your password?");
   if (hasUpperCases === true) {
    charSet += upperCases;
    //confirms user choice
    window.alert("Your password will contain uppercase letters");
   }else{
   window.alert("Your password will not contain uppercase letters.");
   }
   // asks user to include special characters
   var hasSpecials = window.confirm("Do you want special characters in your password?");
  if (hasSpecials === true) {
    charSet += specials;
    //confirms user choice
  window.alert("Your password will contain special characters.");
  }else{
  window.alert("Your password will not contain special characters.");
  }
  //randomly generates passwords within chosen parameters
  for (var i = 0; i < passwordLength; i++) {
    var randomChar = Math.floor(Math.random() * charSet.length);
    password += charSet.substring(randomChar, randomChar +1);
  }
  
  return password;

}
