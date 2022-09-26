let computerChoice

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

getComputerChoice()

console.log(getComputerChoice())