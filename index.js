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
    if (userSelection == 'scissor') userSelection = 'scissors'
}

function evaluate(){
    if (userSelection == 'rock'){
        if (computerSelection == 'rock'){
            score = 'You - ' + userScore + '; Evil Robot - ' + computerScore
            alert('Computer picks rock \n \nLet\'s Call it a Draw')
        }
        else if (computerSelection == 'paper'){
            score = 'You - ' + userScore + '; Evil Robot - ' + ++computerScore
            alert('Computer picks paper \n \nLol get rekt')
        }
        else {
            score = 'You - ' + ++userScore + '; Evil Robot - ' + computerScore
            alert('Computer picks scissors \n \nFucking Legend')
        }
    }
    
    else if (userSelection == 'paper'){
        if (computerSelection == 'rock'){
            score = 'You - ' + ++userScore + '; Evil Robot - ' + computerScore
            alert('Computer picks rock \n \nFucking Legend')
        }
        else if (computerSelection == 'paper'){
            score = 'You - ' + userScore + '; Evil Robot - ' + computerScore
            alert('Computer picks paper \n \nLet\'s Call it a Draw')
        }
        else{
            score = 'You - ' + userScore + '; Evil Robot - ' + ++computerScore
            alert('Computer picks scissors \n \nLol get rekt')
        }
    }

    else if (userSelection == 'scissors'){
        if (computerSelection == 'rock'){
            score = 'You - ' + userScore + '; Evil Robot - ' + ++computerScore
            alert('Computer picks rock \n \nLol get rekt')
        }
        else if (computerSelection == 'paper'){
            score = 'You - ' + ++userScore + '; Evil Robot - ' + computerScore
            alert('Computer picks paper \n \nFucking Legend')
        }
        else {
            score = 'You - ' + userScore + '; Evil Robot - ' + computerScore
            alert('Computer picks scissors \n \nLet\'s Call it a Draw')
             }
    }

    else {
        alert('Invalid weapon \n \nYou\'re already dead')
    }
    }

function playRound(){
    getComputerChoice()
    getUserChoice()
    evaluate()
    alert(score)
}

playRound()

console.log(computerScore)
console.log(userScore)
console.log(score)