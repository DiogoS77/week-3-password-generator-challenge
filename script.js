// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate password
function generatePassword() {
  var length = prompt("How many characters would you like your password to contain?");
  var lowercase = confirm("Would you like to include lowercase letters?");
  var uppercase = confirm("Would you like to include uppercase letters?");
  var numeric = confirm("Would you like to include numeric characters?");
  var special = confirm("Would you like to include special characters?");

// Generate password
var password = "";
var characters = "";
if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (numeric) characters += "0123456789";
if (special) characters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
for (var i = 0; i < length; i++) {
  password += characters.charAt(Math.floor(Math.random() * characters.length));
}

return password;

}