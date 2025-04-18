// Get elements
const buttons = document.querySelectorAll('.btn');
const computerChoiceSpan = document.getElementById('computer-choice');
const userChoiceSpan = document.getElementById('User-choice');
const computerScoreSpan = document.getElementById('computer-score');
const userScoreSpan = document.getElementById('User-score');
const resultButton = document.getElementById('resudiv');
const timerdisplay=document.getElementById("timertxt");

// Initialize scores
let computerScore = 0;
let userScore = 0;


// Function to generate computer choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  }

  if ((userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')) {
    userScore++;
    return 'You win!';
  } else {
    computerScore++;
    return 'Computer wins!';
  }
}

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.id;
    const computerChoice = getComputerChoice();
    computerChoiceSpan.textContent = computerChoice;
    userChoiceSpan.textContent = userChoice;
    const result = determineWinner(userChoice, computerChoice);
    resultButton.textContent = result;
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;

    if (result === 'You win!') {
      resultButton.style.backgroundColor = "green";
    } else if (result === 'Computer wins!') {
      resultButton.style.backgroundColor = "red";
    } else {
      resultButton.style.backgroundColor = "blue";
    }
  });
});

resultButton.addEventListener("click",function timer(){
  var sec=10;
  var timer =setInterval(function(){
    timerdisplay.textContent=sec;
    sec--;
    if(sec=0){
      alert("time is up!");
      
    }
  
  },1000);
});



