// Assignment code here

function generatePassword(length, includeNumbers, includeSpecial){
  var chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  if(includeNumbers){
    chars+='0123456789';
  }
  if(includeSpecial){
    chars+='!#$%&@?[]^*)(+,.:;=><\_`~}{'
  }
}







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
