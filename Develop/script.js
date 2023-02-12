// function for letter, number, and special character selection
function generatePassword(){
  var length = prompt ('Enter a password length from 8 to 128 Characters.');
  length = parseInt (length);
  while ( length < 8 || length > 128 || isNaN (length)){
    length = prompt (' Please Re-Enter the desired password length from 8 to 128 Characters.');
    length = parseInt (length);
  }
  var chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  if(includeNumbers){
    chars+='0123456789';
  }
  if(includeSpecial){
    chars+='!#$%&@?[]^*)(+,.:;=><\_`~}{'
  }
}
var password ='';
for (var i=0; i < length; i++ ){
  password += chars.charAt (Math.floor ( Math.random() *chars.length));
}
  return password;

// Write password to the #password input
function writePassword(){
  var passwordLength = 128;
  var includeNumbers = true;
  var includeSpecial = true;
  var password = generatePassword(passwordLength, includeNumbers, includeSpecial);
  var passwordText = document.querySelector ( '#password');

  passwordText.value = password;
}

// Add event listener to generate button
var generateBtn.addEventListener("click", writePassword);
