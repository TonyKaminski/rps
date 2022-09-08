let choices = ['rock', 'paper', 'scissors'];
let computerSelection

function getComputerChoice(){
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerSelection);
}

getComputerChoice(choices);

let userSelection = prompt('Choose Your Weapon')

console.log(userSelection)

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
        else alert('Computer picks scissor \n \nLol get rekt')
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