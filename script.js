//options for the game
let option = ['rock', 'paper', 'scissors'];
//randomly selects and return a option of the game
function getComputerChoice (option){
    return option[Math.floor(Math.random() * option.length)];
}
console.log(getComputerChoice(option));