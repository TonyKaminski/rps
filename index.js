let choices = ['rock', 'paper', 'scissors']
let computerSelection
let userSelection
let userScore = 0
let computerScore = 0
let score

function getComputerChoice(){
    computerSelection = choices[Math.floor(Math.random() * choices.length)]
}

function getUserChoice(){
        userSelection = prompt('Choose Your Weapon').toLowerCase()
    if(userSelection == 'scissor') userSelection = 'scissors'
}

function evaluate(){
    if(userSelection == 'rock'){
        if (computerSelection == 'rock'){
            score = 'You - ' + userScore + '; Evil Robot - ' + computerScore
            alert('Computer picks rock \n \nLet\'s Call it a Draw')
        }
        else if(computerSelection == 'paper'){
            ++computerScore
            score = 'You - ' + userScore + '; Evil Robot - ' + computerScore
            alert('Computer picks paper \n \nLol get rekt')
        }
        else{
            ++userScore
            score = 'You - ' + userScore + '; Evil Robot - ' + computerScore
            alert('Computer picks scissors \n \nFucking Legend')
        }
    }
    
    else if(userSelection == 'paper'){
        if(computerSelection == 'rock'){
            ++userScore
            score = 'You - ' + userScore + '; Evil Robot - ' + computerScore
            alert('Computer picks rock \n \nFucking Legend')
        }
        else if(computerSelection == 'paper'){
            score = 'You - ' + userScore + '; Evil Robot - ' + computerScore
            alert('Computer picks paper \n \nLet\'s Call it a Draw')
        }
        else{
            ++computerScore
            score = 'You - ' + userScore + '; Evil Robot - ' + computerScore
            alert('Computer picks scissors \n \nLol get rekt')
        }
    }

    else if(userSelection == 'scissors'){
        if(computerSelection == 'rock'){
            ++computerScore
            score = 'You - ' + userScore + '; Evil Robot - ' + computerScore
            alert('Computer picks rock \n \nLol get rekt')
        }
        else if(computerSelection == 'paper'){
            ++userScore
            score = 'You - ' + userScore + '; Evil Robot - ' + computerScore
            alert('Computer picks paper \n \nFucking Legend')
        }
        else{
            score = 'You - ' + userScore + '; Evil Robot - ' + computerScore
            alert('Computer picks scissors \n \nLet\'s Call it a Draw')
             }
    }

    else alert('Invalid weapon \n \nYou\'re already dead')
    }

function finalScore(){
    if(userScore > computerScore){
        alert('You win! ' + userScore + ' to ' + computerScore)
    }
    else if(userScore < computerScore){
        alert('You Lose! ' + userScore + ' to ' + computerScore)
    }
    else alert('It\'s a draw!')
    }
function playRound(){
    getComputerChoice()
    getUserChoice()
    evaluate()
    alert(score)
}

function playGame(){
    let i = 0
    while (i < 5){
        ++i
        console.log(i)
        playRound()
    }
    finalScore()
}

playGame()

console.log(userScore)
console.log(computerScore)
console.log(score)