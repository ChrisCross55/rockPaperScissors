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
function game() {
    let computer= getComputerChoice();
    let player= receivePlayerInput();
if (computer == player)
  {alert ('tie')}
  else if ( computer == 'rock' && player == 'paper')
  {alert('you win, paper beats rock')}
  else if ( computer == 'rock' && player == 'scissors')
  {alert('you loose, rock beats scissors')}
  else if (computer == 'paper' && player == 'scissors')
  {alert('you win, scissors beats paper')}
  else if (computer == 'paper' && player == 'rock')
  {alert('you loose, paper beats rock')}
  else if (computer == 'scissors' && player == 'rock')
  {alert('you win, rock beats scissors')}
  else if (computer == 'scissors' && player == 'paper')
  {alert('you loose, scissors beats paper')}
}
