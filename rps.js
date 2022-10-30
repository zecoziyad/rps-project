let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')
const playerPoint = document.querySelector('.box-player')
const computerPoint = document.querySelector('.box-comp')
const result = document.querySelector('#result')


function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        
        playerPoint.innerHTML = playerScore += 1;
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection)

        if (playerScore === 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelection === computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection)
    }
    else {
        computerPoint.innerHTML = computerScore += 1;
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection)

        if (computerScore === 5) {
            result += '<br><br>I won the game! Reload the page to play again'
            disableButtons()
        }
    }
    

    document.getElementById('result').innerHTML = result
    return
}


buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})