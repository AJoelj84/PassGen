// Tells the javascript to create an event for when the Generate button is clicked
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Prompt for user to enter the desired length
  function generatePassword() {
    var length = prompt('Enter a password length from 8 to 128 Characters.');
        length = parseInt(length);
    while (length < 8 || length > 128 || isNaN(length)) {
        length = prompt(' Please Re-Enter the desired password length from 8 to 128 Characters.');
        length = parseInt(length);
    }
// Prompts for Upper and Lower Case letters as well as Special and Numbers
    var includeUpper = confirm('Include Uppercase letters in your password?');
    var includeLower = confirm('Include Lowercase letters in your password?');
    var includeSpecial = confirm('Include Special Characters in your password?');
    var includeNumbers = confirm('Include Numbers in your password?');

      var chars = '';
        if (includeUpper) {
          chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (includeLower) {
          chars += 'abcdefghijklmnopqrstuvwxyz';
        }
        if (includeNumbers) {
          chars += '0123456789';
        }
        if (includeSpecial) {
          chars += '!#$%&@?[]^*)(+,.:;=><\_`~}{';
        }
        if (chars === '') {
          alert('At least one type must be chosen!');
      return '';
    }
// Uses input for length to determine number of characters in password
    var password = '';
    for (var i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }
// Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
  }

