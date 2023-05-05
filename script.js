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

// Generate passwords
function generatePassword() {
  var length = prompt(
    "How many characters would you like your password to have?"
  );

  // Validate the user input
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length needs to be number between 8 and 128 characters");
    return "";
  }

  var lowercase = confirm("Would you like to add lowercase letters?");
  var uppercase = confirm("Would you like to add uppercase letters?");
  var numeric = confirm("Would you like to add numeric characters?");
  var special = confirm("Would you like to add special characters?");

  if (!lowercase && !uppercase && !numeric && !special) {
    alert("You must select at least one character type");
    return "";
  }

  // Generate passwords
  var password = "";
  var characters = "";
  if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
  if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numeric) characters += "0123456789";
  if (special) characters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  for (var i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
}

//This entire section above prompts the user to select a passowrd lenght and character preferences.
//It then validades the user input and generates a random password based on the user preference.
//And then the generated password is returned by the function.
