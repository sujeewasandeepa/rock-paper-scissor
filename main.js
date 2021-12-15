const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const display = document.querySelector('#display');

let user_input;
let scoreP = 0;
let scoreC = 0;


rock.addEventListener('click', () => {
    user_input = "rock";
    display.style.background = "white";
    let result = playTurn();
    let playerWin = result[0];
    let computerWin = result[1];
    if (playerWin) {
        scoreP ++;
    }else if(computerWin) {
        scoreC ++;  
    }
    if(scoreC == 5 || scoreP == 5) {
        victory(scoreP, scoreC);
        scoreC = 0;
        scoreP = 0;
    }
    
});
paper.addEventListener('click', () => {
    user_input = "paper";
    display.style.background = "white";
    let result = playTurn();
    let playerWin = result[0];
    let computerWin = result[1];
    if (playerWin) {
        scoreP ++;
    }
    if(computerWin) {
        scoreC ++;  
    }
    if(scoreC == 5 || scoreP == 5) {
        victory(scoreP, scoreC);
        scoreC = 0;
        scoreP = 0;
    }
});
scissors.addEventListener('click', () => {
    user_input = "scissors";
    display.style.background = "white";
    let result = playTurn();
    let playerWin = result[0];
    let computerWin = result[1];
    if (playerWin) {
        scoreP ++;
    }
    if(computerWin) {
        scoreC ++;  
    }
    if(scoreC == 5 || scoreP == 5) {
        victory(scoreP, scoreC);
        scoreC = 0;
        scoreP = 0;
    }
});

function victory(sp, sc) {
    if (sp == 5) {
        display.innerText = `you win! you got: ${sp} computer got: ${sc}`;
        display.style.background = "green";
    }
    if (sc == 5) {
        display.innerText = `computer win! computer got: ${sc} you got: ${sp}`;
        display.style.background = "red";
    }
}



function playTurn() {
    let computer_selection = computerPlay();
    user_selection = user_input;
    let result = playRound(user_selection, computer_selection);
    return result;
}

/*
 * This function will make the computer choose either rock, paper
 * or scissors randomly.
 */
function computerPlay() {
    let random_no = Math.random() * 3;
    random_no = Math.ceil(random_no);
    let computerResult;
    if (random_no == 1) {
        computerResult = "Rock";
    } else if(random_no == 2) {
        computerResult = "Paper";
    } else {
        computerResult = "Scissors";
    }
    return computerResult;
}

/*
 * this function will play through a single round of rock, paper,
 * scissors. 
 */
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let resultArr = [];
    let didPlayerWin = false;
    let didComputerWin = false;
    resultArr[0] = didPlayerWin;
    resultArr[1] = didComputerWin;

    if(playerSelection=="rock" && computerSelection=="paper") {
        display.innerText = "You lose! Paper beats Rock!";
        didPlayerWin = true;
        didComputerWin = false;
        resultArr[0] = didPlayerWin;
        resultArr[1] = didComputerWin;

    } else if(playerSelection=="rock" && computerSelection=="scissors") {
        display.innerText = "You win! Rock beats Scissors!";
        didPlayerWin = true;
        didComputerWin = false;
        resultArr[0] = didPlayerWin;
        resultArr[1] = didComputerWin;
    } else if(playerSelection=="rock" && computerSelection=="rock") {
        display.innerText = "DRAW!";
    } else if(playerSelection=="paper" && computerSelection=="scissors") {
        display.innerText = "You Lose! Scissors beats Paper!";
        didComputerWin = true;
        didPlayerWin = false;
        resultArr[0] = didPlayerWin;
        resultArr[1] = didComputerWin;
    } else if(playerSelection=="paper" && computerSelection=="rock") {
        display.innerText = "You win! Paper beats Rock!";
        didPlayerWin = true;
        didComputerWin = false;
        resultArr[0] = didPlayerWin;
        resultArr[1] = didComputerWin;
    } else if(playerSelection=="paper" && computerSelection=="paper") {
        display.innerText = "DRAW!";
    } else if(playerSelection=="scissors" && computerSelection=="scissors") {
        display.innerText = "DRAW!";
    } else if(playerSelection=="scissors" && computerSelection=="rock") {
        display.innerText = "You Lose! Rock beats scissors";
        didComputerWin = true;
        didPlayerWin = false;
        resultArr[0] = didPlayerWin;
        resultArr[1] = didComputerWin;
    } else if(playerSelection=="scissors" && computerSelection=="paper") {
        display.innerText = "You win! Scissors beats Paper!";
        didPlayerWin = true;
        didComputerWin = false;
        resultArr[0] = didPlayerWin;
        resultArr[1] = didComputerWin;
    } else {
        display.innerText = "something is wrong!";
    }
    return resultArr;
}
