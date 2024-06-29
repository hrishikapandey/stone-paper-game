const CHOICES = [
  {
    name: "paper",
    beats: "rock",
  },
  {
    name: "scissors",
    beats: "paper",
  },
  {
    name: "rock",
    beats: "scissors",
  },
]
const choiceButtons = document.querySelectorAll(".choice-btn");
const gameDiv = document.querySelector(".game");
const resultsDiv = document.querySelector(".results");
const resultDivs = document.querySelectorAll(".results__result");

const resultWinner = document.querySelector(".results__winner");
const resultText1 = document.querySelector(".results__text1");
const resultText2 = document.querySelector(".results__text2");

const playAgainBtn = document.querySelector(".play-again");

const scoreNumber = document.querySelector(".score__number");
const scoreNumber2 = document.querySelector(".score__number2");
let score = 0;
let score2 = 0;

// Game Logic
choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const choiceName = button.dataset.choice;
    const choice = CHOICES.find((choice) => choice.name === choiceName);
    choose(choice);
  });
});

function choose(choice) {
  const pcchoice = pcChoose();
  displayResults([choice, pcchoice]);
  displayWinner([choice, pcchoice]);
}

function pcChoose() {
  const rand = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[rand];
}

function displayResults(results) {
  resultDivs.forEach((resultDiv, idx) => {
    setTimeout(() => {
      resultDiv.innerHTML = `
        <div class="choice ${results[idx].name}">
           <img src="./images/icons/${results[idx].name}.png" alt="${results[idx].name}" />

        </div>
      `;
    }, idx * 1000);
  });

  gameDiv.classList.toggle("hidden");
  resultsDiv.classList.toggle("hidden");
}

function displayWinner(results) {
  setTimeout(() => {
    const userWins = isWinner(results);
    const pcWins = isWinner(results.reverse());

    if (userWins) {
      resultText1.innerText = 'you win';
      resultText2.innerText = "against pc";
      playAgainBtn.innerText="play again";
      resultDivs[0].classList.toggle("winner");
       keepScore(1);
    } else if (pcWins) {
      resultText1.innerText = "you lose";
      resultText2.innerText = "against pc";
      playAgainBtn.innerText="play again";
      resultDivs[1].classList.toggle("winner");
       keepScore2(1);
    
    } 
     else {
      resultText1.innerText = "tie up";
      resultText2.innerText = "";
      playAgainBtn.innerText = "replay";
    }
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
  }, 1000);
}

function isWinner(results) {
  return results[0].beats === results[1].name;
}

function keepScore(point) {
  score += point;
  scoreNumber.innerText = score;
}
function keepScore2(point) {
  score2 += point;
  scoreNumber2.innerText = score2;
}

// Play Again
playAgainBtn.addEventListener("click", () => {
  gameDiv.classList.toggle("hidden");
  resultsDiv.classList.toggle("hidden");

  resultDivs.forEach((resultDiv) => {
    resultDiv.innerHTML = "";
    resultDiv.classList.remove("winner");
  });

  resultText1.innerText = "";
  resultText2.innerText = "";
  resultWinner.classList.toggle("hidden");
  resultsDiv.classList.toggle("show-winner");
});

const winningpor = document.querySelector('.winning-portion')
const btnrules = document.querySelector('.rules-btn')
const btnclose = document.querySelector('.crossbtn')
const ruleframe = document.querySelector('.rulesarea')
const nextbtn = document.querySelector('.next-btn');
//show hide rules
btnrules.addEventListener('click',()=>{
       ruleframe.classList.toggle('rulesarea')
})
btnclose.addEventListener('click' ,() =>{
       ruleframe.classList.toggle('rulesarea')

})

choiceButtons.addEventListener('click',()=>{
  

})


