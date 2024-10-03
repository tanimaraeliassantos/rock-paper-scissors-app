function getRandomComputerResult() {
	const options = ['Rock', 'Paper', 'Scissors'];
	const RandomOption = Math.floor(Math.random() * options.length);
	return options[RandomOption];
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
	{
		return (
			(player === 'Rock' && computer === 'Scissors') ||
			(player === 'Scissors' && computer === 'Paper') ||
			(player === 'Paper' && computer === 'Rock')
		);
	}
}

function getRoundResults(userOption) {
	const computerResult = getRandomComputerResult();
	if (hasPlayerWonTheRound(userOption, computerResult)) {
		playerScore++;
		return `Player wins! ${userOption} beats ${computerResult}`;
	} else if (computerResult === userOption) {
		return `It's a tie! Both choose ${userOption}`;
	} else {
		computerScore++;
		return `Computer wins! ${computerResult} beats ${userOption}`;
	}
}

const playerScoreSpanElement = document.getElementById('player-score');
const computerscoreSpanElement = document.getElementById('computer-score');
const roundResultsMsg = document.getElementById('results-msg');
const winnerMsgElement = document.getElementById('winner-msg');
const optionsContainer = document.querySelector('.options-container');
const resetGameBtn = document.getElementById('reset-game-btn');

function showResults(userOption) {
	roundResultsMsg.innerText = getRoundResults(userOption);
	computerscoreSpanElement.innerText = computerScore;
	playerScoreSpanElement.innerText = playerScore;

	if (playerScore >= 2) {
		winnerMsgElement.innerText = 'Player has won the game!';
		resetGameBtn.style.display = 'block';
		optionsContainer.style.display = 'none';
	} else if (computerScore >= 2) {
		winnerMsgElement.innerText = 'Computer has won the game!';
		resetGameBtn.style.display = 'block';
		optionsContainer.style.display = 'none';
	}
}
