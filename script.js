let rpsAll = ["ROCK", "PAPER", "SCISSOR"];

function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3);
    return rpsAll[compChoice];
}

function playRound(playerChoice, compChoice){
    let pChoice = playerChoice.toUpperCase();
    let cChoice = compChoice,
        roundMessage = '',
        pScore = 0,
        cScore = 0,
        retry = 0;

    if (pChoice != cChoice ) {
        if (pChoice == 'ROCK') {
            if (cChoice == 'PAPER') {
                //return `You Lose! ${cChoice} beats ${pChoice}`, 0, 1;
                roundMessage = `You Lose! ${cChoice} beats ${pChoice}`;
                pScore = 0;
                cScore = 1;
            } else if (cChoice == 'SCISSOR') {
                //return `You Win! ${pChoice} beats ${cChoice}`, 1, 0;
                roundMessage = `You Win! ${pChoice} beats ${cChoice}`;
                pScore = 1;
                cScore = 0;
            }
        } else if (pChoice == 'PAPER') {
            if (cChoice == 'ROCK') {
                //return `You Win! ${pChoice} beats ${cChoice}`, 1, 0;
                roundMessage = `You Win! ${pChoice} beats ${cChoice}`;
                pScore = 1;
                cScore = 0;
            } else if (cChoice == 'SCISSOR') {
                //return `You Lose! ${cChoice} beats ${pChoice}`, 0, 1;
                roundMessage = `You Lose! ${cChoice} beats ${pChoice}`;
                pScore = 0;
                cScore = 1;
            }
        } else if (pChoice == 'SCISSOR') {
            if (cChoice == 'PAPER') {
                //return `You Win! ${pChoice} beats ${cChoice}`, 1, 0;
                roundMessage = `You Win! ${pChoice} beats ${cChoice}`;
                pScore = 1;
                cScore = 0;
            } else if (cChoice == 'ROCK') {
                //return `You Lose! ${cChoice} beats ${pChoice}`, 0, 1;
                roundMessage = `You Lose! ${cChoice} beats ${pChoice}`;
                pScore = 0;
                cScore = 1;
            }
        }
    } else {
        //return `It's a Draw! Both are choosing ${pChoice}`, 0, 0;
        roundMessage = `It's a Draw! Both are choosing ${pChoice}`;
        pScore = 0;
        cScore = 0;
        retry = -1;
    }
    
    return {'roundMessage': roundMessage, 'pScore': pScore, 'cScore': cScore, 'retry': retry};

}

function game () {
    let playerScore = 0, computerScore = 0;
    for (let index = 0; index < 5; index++) {
        playerSelection = prompt('What is your choice?'); 
        computerSelection = getComputerChoice();
        
        let currRound = playRound(playerSelection, computerSelection);
        console.log(currRound.roundMessage);
        playerScore += currRound.pScore;
        computerScore += currRound.cScore;
        index += currRound.retry;
        console.log(`Player Score = ${playerScore}. Computer Score = ${computerScore}`);
        
        if (playerScore == 3 || computerScore == 3) {
            index = 5;
        }
    }

    if (playerScore > computerScore) {
        console.log(`You Win the match!`);
    } else if (playerScore < computerScore){
        console.log(`You Lose the match!`);
    } else {
        console.log(`Match ended in a Draw!`);
    }
}

let playerSelection = '',
    computerSelection = '';


    game();
