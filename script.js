// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
console.log("generatePaswword")
var randomPassword;

//logic reassgn random password


//get user input


//get length from user
var length = prompt("How long do you want your password 8-128")

//check length to make sure it is between 8-128
if(length <8) {
  alert("make sure password is at least 8 characters")
return ""
}
if(length >128){
alert("make sure password doesnt exceed 128 characters")
} 

//get character types

// Get character types (numbers, uppercase,lowercase,special characters)


// check to see at least one character type has been selected then 

// Generate password

//

//

//
randomPassword="replace this with random password"







return randomPassword
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
