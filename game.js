let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 0;

// Prompt user for a number between 1 and 10, or type 999 to exit.
while (userGuess !== 999) {
  userGuess = parseInt(prompt("Guess a number between 1 and 10, or type 999 to exit:"), 10);

  if (userGuess === 999) {
    break;
  }
  attempts++;

  // Check if the input is a valid number
  if (isNaN(userGuess)) {
    alert("Invalid input. Enter a number.");
  } else if (userGuess < randomNumber) {
    alert("Number is too low!");
  } else if (userGuess > randomNumber) {
    alert("Number is too high!");
  } else {
    alert(`Congratulations! You've guessed the correct number: ${randomNumber}. It took you ${attempts} attempts.`);
    break;
  }
}

// Create while loop that continues for as long as the user guesses are incorrect.
// Loop should count the number of guesses.
// Loop should exit if user enters 999 and not display "Too high!"
// If the guess is too low, the user should be promped "Too low!" and be able to guess again.
// If the guess is too high, the user should be promped 'Too high!" and be able to guess again.
// If anything else is entered, the user should be prompted that their input is invalid and 
// to guess again.

// If the guess is correct, the user should be alerted of their win and 
// be told the number of guesses they made.
