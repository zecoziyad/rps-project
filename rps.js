let playerScore = 0;
  let computerScore = 0;

function getComputerChoice(){
    let randomChoice = ['rock','paper','scissors'];
    return randomChoice[Math.floor(Math.random() *randomChoice.length)]
        
}
function playerChoice(userInput){
   if(userInput==='rock'){
    return 'rock'
   }else if(userInput==='paper'){
    return  'paper'
   }else if(userInput==='scissors'){
    return 'scissors'
   }else {
    return 'EROOOR' 
   }
    
}
let result = '';
function playRound(playerSelection, computerSelection) {
    // your code here!
    let result = "";
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
            
        }
    } return result
}
    
  
  
  

   
  const playerSelection = playerChoice('rock');
  const computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));

 

 

