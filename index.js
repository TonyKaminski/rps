let choices = ['rock', 'paper', 'scissors'];
let computerSelection

function getComputerChoice(){
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
}

getComputerChoice(choices);

let rawUserSelection = prompt('Choose Your Weapon')
let userSelection = rawUserSelection.toLowerCase()
if (userSelection == 'scissor') userSelection = 'scissors'

function evaluate(computerSelection, userSelection){
    if (userSelection == 'rock'){
        if (computerSelection == 'rock'){
            alert('Computer picks rock \n \nLet\'s Call it a Draw')
        }
        else if (computerSelection == 'paper'){
            alert('Computer picks paper \n \nLol get rekt')
        }
        else alert('Computer picks scissors \n \nFucking Legend')
    }
    
    else if (userSelection == 'paper'){
        if (computerSelection == 'rock'){
            alert('Computer picks rock \n \nFucking Legend')
        }
        else if (computerSelection == 'paper'){
            alert('Computer picks paper \n \nLet\'s Call it a Draw')
        }
        else alert('Computer picks scissors \n \nLol get rekt')
    }

    else if (userSelection == 'scissors'){
        if (computerSelection == 'rock'){
            alert('Computer picks rock \n \nLol get rekt')
        }
        else if (computerSelection == 'paper'){
            alert('Computer picks paper \n \nFucking Legend')
        }
        else alert('Computer picks scissors \n \nLet\'s Call it a Draw')
    }

    else {
        alert('Invalid weapon \nYou\'re already dead')
    }
}
    

evaluate(computerSelection, userSelection)