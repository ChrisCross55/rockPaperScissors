  //randomize computer choice to rock, paper, or scissors
function getComputerChoice() {    
let number= Math.floor(Math.random()*100)+1;
if (number <= 33) {return 'rock'}
else if (number <= 66) {return 'paper'}
else return 'scissors'
}

let playerInput;
const result= document.getElementById('result');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const pScore = document.querySelector('.pScore');
const round = document.querySelector('.round');
const cScore= document.querySelector('.cScore');
let playerScore= 0;
let rounds= 0;
let computerScore=0;

function DisplayWin(){

}

rock.addEventListener('click', () => {
  playRound();
  return  playerInput = 'rock';});

paper.addEventListener('click',() => {
  playRound();
  return playerInput= 'paper'});

scissors.addEventListener('click',() => {
  playRound();
  return playerInput='scissors'});

function win() {
  result.innerText= 'You won this round';
  playerScore +=1;rounds +=1;
  round.textContent=` ${rounds}`;
  pScore.textContent= ` ${playerScore}`;
  if (playerScore==5) {
    result.textContent='You won the game!';
    playerScore=0; computerScore=0; rounds=0;
    round.textContent=` ${rounds}`;
    pScore.textContent= ` ${playerScore}`;
    cScore.textContent= ` ${computerScore}`;
    }
  return
}

function loose() {
  result.innerText= ' You lost this round';
  computerScore +=1;rounds += 1;
  round.textContent= ` ${rounds}`;
  cScore.textContent= ` ${computerScore}`;
  if (computerScore==5) {
    result.textContent='You lost the game!';
    playerScore=0; computerScore=0; rounds=0;
    round.textContent=` ${rounds}`;
    pScore.textContent= ` ${playerScore}`;
    cScore.textContent= ` ${computerScore}`;    
  }

}

function tie() {
  rounds +=1; 
  round.textContent=` ${rounds}`;
  result.textContent= 'This round is a Tie';

}
    //determine winner and change scores to reflect it
function playRound() {  
    let computer= getComputerChoice();
    let player= playerInput; 
  if (computer == player){tie()}
  else if ( computer == 'rock' && player == 'paper') {win()}
  else if ( computer == 'rock' && player == 'scissors'){loose()}
  else if (computer == 'paper' && player == 'scissors') {win()}
  else if (computer == 'paper' && player == 'rock') {loose()}
  else if (computer == 'scissors' && player == 'rock') {win()}
  else if (computer == 'scissors' && player == 'paper') {loose()}
}
