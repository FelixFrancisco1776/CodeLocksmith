const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const specialCharacters = ["!", "#", "$", "%", "&", "*", "?", "@", "^"];

let includeLowercase;
let includeUppercase;
let includeNumbers;
let includeSpecialCharacters;



function generatePassword() {
  const passwordLength = parseInt(prompt("How many characters long would you like your password? (Range: 8-128)"));

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return;
  }

  includeLowercase = confirm("Would you like to include lowercase letters in your password?");
  includeUppercase = confirm("Would you like to include uppercase letters in your password?");
  includeNumbers = confirm("Would you like to include numbers in your password?");
  includeSpecialCharacters = confirm("Would you like to include special characters in your password?");

  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
    alert("You must choose at least one character type for your password.");
    return;
  }

  let characterPool = [];

  if (includeLowercase) {
    characterPool = characterPool.concat(lowercaseLetters);
  }

  if (includeUppercase) {
    characterPool = characterPool.concat(uppercaseLetters);
  }

  if (includeNumbers) {
    characterPool = characterPool.concat(numbers);
  }

  if (includeSpecialCharacters) {
    characterPool = characterPool.concat(specialCharacters);
  }
  let newPassword = "";

  for (let i = 0; i < passwordLength; i++) {
    newPassword += characterPool[Math.floor(Math.random() * characterPool.length)];
  }

  return newPassword;
}

const generateBtn = document.querySelector("#generate");

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);



