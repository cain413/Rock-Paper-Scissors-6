// Rock destroys scissors
// Scissors cut paper
// Paper covers rock
// Tie game = draw
 // Code broken into 4 parts
   // Get the user's choice
   // Get the computer's choices and determine a winner.
   // Start the program and display the results.

   const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
    return userInput;
  } else {
  console.log('error');
    }
  }
  const getComputerChoice = () => {
    const randomNumber = (Math.floor(Math.random() * 3))
    
  switch (randomNumber) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'    
    }
  };
  const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
    }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Sorry, computer won!';
  } else {
    return 'Congrats, you won!' 
    }   
   }
  if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Sorry, computer won!';
      } else {
        return 'Congrats, you won!';
      }
    }
    if(userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Sorry, computer won!';
      } else {
        return 'Congrats, you won!';
      }
    }
  
    if(userChoice === 'bomb') {
      return 'congrats you won'
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw:' + userChoice);
    // console.log(`you threw ${userChoice}`);
    console.log('The computer threw:' + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice))};
  
  playGame();
  
