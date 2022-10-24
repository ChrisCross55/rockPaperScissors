  //randomize computer choice to rock, paper, or scissors
function getComputerChoice() {    
let number= Math.floor(Math.random()*100)+1;
if (number <= 33) {return 'rock'}
else if (number <= 66) {return 'paper'}
else return 'scissors'
}

console.log(getComputerChoice())
    //receive player input
function receivePlayerInput() {
    let answer = prompt('Are you battling with Rock, Paper, or Scissors?');
    let choice = answer.toLowerCase();
if (choice == 'rock' || choice == 'scissors' || choice == 'paper')
    {return choice}
    else { alert('Please double check spelling');
       return receivePlayerInput();}
}
console.log(receivePlayerInput())
    //verify player input is rock, paper or scissors

    //determine winner and write appropriate announcement
