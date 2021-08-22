// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate password
var generatePassword = function() {
    // Generate Password variable values
    symbols= " !#$%&'\"()*+,-./:;<=>?@[\\]^_`{|}~";
    numbers= "0123456789";
    lowerLetters= "abcdefghijklmnopqrstuvwxyz";
    upperLetters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    // User input variables: 
    var numberCharacters;
    var type = "";
    var showPassword = "";

    // Prompt to get user input
    numberCharacters = parseInt(prompt("How many characters in your password? Choose between 8 and 128"));
    // First if statement for user validation 
    if (!numberCharacters) {
        alert("The generator requires a value");
    } else if (numberCharacters < 8 || numberCharacters > 128) {
        // Validates user input
        // Start user input prompts
        numberCharacters = parseInt(prompt("value must be between 8 and 128"));
    } else {
        // Prompts for each character option
        containNumbers = confirm("Will this contain numbers?");
        containSymbols = confirm("Will this contain special characters?");
        containLower = confirm("Will this contain upper case letters?");
        containUpper = confirm("Will this contain lower case letters?");
    };
    // If and alert in case user doesn't select any characters options
    if (!containNumbers && !containSymbols && !containUpper && !containLower) {
        type = alert("You must choose a criteria!");
    }
    
    // "Else if" in case user chooses all four variables types
    else if (containSymbols && containNumbers && containUpper && containLower) {
        type = symbols.concat(numbers, lowerLetters, upperLetters);
    }
    // "Else if" in case user chooses three out of four character types; all scenarios below
    else if (containSymbols && containNumbers && containUpper) {
        type = symbols.concat(numbers, upperLetters);
    }
    else if (containSymbols && containNumbers && containLower) {
        type = symbols.concat(numbers, upperLetters);
    }
    else if (containSymbols && containLower && containUpper) {
        type = symbols.concat(lowerLetters, upperLetters);
    }
    else if (containNumbers && containLower && containUpper) {
        type = numbers.concat(lowerLetters, upperLetters);
    }
    // "Else if" in case user chooses two character types; all scenarios below
    else if (containSymbols && containNumbers) {
        type = symbols.concat(numbers);

    } else if (containSymbols && containLower) {
        type = symbols.concat(lowerLetters);

    } else if (containSymbols && containUpper) {
        type = symbols.concat(upperLetters);
    }
    else if (containLower && containNumbers) {
        type = lowerLetters.concat(numbers);

    } else if (containLower && containUpper) {
        type = lowerLetters.concat(upperLetters);

    } else if (containNumbers && containUpper) {
        type = numbers.concat(upperLetters);
    }
    // "Else if" in case user chooses one character type; all scenarios below
    else if (containSymbols) {
        type = symbols;
    }
    else if (containNumbers) {
        type = numbers;
    }
    else if (containLower) {
        type = lowerLetters;
    }
    else if (containUpper) {
        type = upperLetters;
    };

    // Random selection for all variables: 
    for (let i = 0; i < numberCharacters; i++) {
        showPassword += type[Math.floor(Math.random() * type.length)];
    }

    return showPassword;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);