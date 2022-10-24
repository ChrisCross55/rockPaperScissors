  //randomize computer choice to rock, paper, or scissors
function getComputerChoice() {    
let number= Math.floor(Math.random()*100)+1;
if (number <= 33) {return 'rock'}
else if (number <= 66) {return 'paper'}
else return 'scissors'
}


    //receive player input and verify it is rock, paper, or scissors
function receivePlayerInput() {
    let answer = prompt('Are you battling with Rock, Paper, or Scissors?');
    let choice = answer.toLowerCase();
if (choice == 'rock' || choice == 'scissors' || choice == 'paper')
    {return choice}
    else { alert('Please double check spelling');
       return receivePlayerInput();}
}



    //determine winner and write appropriate announcement
function playRound() {
    let computer= getComputerChoice();
    let player= receivePlayerInput();
if (computer == player)
  {alert ('tie');return 0}
  else if ( computer == 'rock' && player == 'paper')
  {alert('win');return 1}
  else if ( computer == 'rock' && player == 'scissors')
  {alert('loss');return -1}
  else if (computer == 'paper' && player == 'scissors')
  {alert('win');return 1}
  else if (computer == 'paper' && player == 'rock')
  {alert('loss');return -1}
  else if (computer == 'scissors' && player == 'rock')
  {alert('win');return 1}
  else if (computer == 'scissors' && player == 'paper')
  {alert('loss');return -1}
}

   //create function to play 5 rounds and calculate winner
var sum = 0;
   function game() {
    for (let i=0 ; i<5 ; i++) {
        let round= playRound()
        sum += round; 
        
    }
    if ( sum > 0) {
        alert ('winner')
    }
    else if ( sum < 0) {
        alert ('looser')
    }

    else { alert ('tied')}


    return sum;
}