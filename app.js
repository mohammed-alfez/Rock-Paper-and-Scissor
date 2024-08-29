let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");

stone.addEventListener("click", () => opponent('stone'));
paper.addEventListener("click", () => opponent('paper'));
scissor.addEventListener("click", () => opponent('scissor'));

const opponent = (playerChoice) => {
    let randomNumber = Math.random() * 3;
    let computerChoice;

    if(randomNumber >= 0 && randomNumber < 1){
        computerChoice = 'stone';
    }
    else if(randomNumber >= 1 && randomNumber < 2){
        computerChoice = 'paper';
    }
    else{
        computerChoice = 'scissor';
    }

    if(playerChoice === computerChoice){
        alert("It's a tie");
    } else if(
        (playerChoice === 'stone' && computerChoice === 'scissor') ||
        (playerChoice === 'scissor' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'stone')
    ){
        alert(`Computer chose ${computerChoice} and You won!!`);
    } else {
        alert(`Computer chose ${computerChoice} and Computer won`);
    }
}
