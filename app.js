let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");

stone.addEventListener("click", () => opponent('stone'));
paper.addEventListener("click", () => opponent('paper'));
scissor.addEventListener("click", () => opponent('scissor'));

let score = {
    win: 0,
    loss: 0,
    tie: 0,
}

let scoreShow = () =>{
    document.querySelector("#score").innerHTML = 
    `Win: ${score.win} Loss: ${score.loss} Tie: ${score.tie}`;
}

let resultShow = () => {
    document.querySelector("#result").innerHTML = result;
}

let result = '';

const opponent = (playerChoice) => {
    let randomNumber = Math.random() * 3;
    let computerChoice;

    if (randomNumber >= 0 && randomNumber < 1) {
        computerChoice = 'stone';
    } else if (randomNumber >= 1 && randomNumber < 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissor';
    }

    if (playerChoice === computerChoice) {
        score.tie++;
        result = `Computer chose ${computerChoice}  It's a tie!!`;
    } else if (
        (playerChoice === 'stone' && computerChoice === 'scissor') ||
        (playerChoice === 'scissor' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'stone')
    ) {
        score.win++;
        result = `Computer chose ${computerChoice} You won!! `;
    } else {
        score.loss++;
        result = `Computer chose ${computerChoice}  Computer won!!      
      `;
    }
    
    resultShow(); 
    scoreShow();
}
