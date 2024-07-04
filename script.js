function getRandomComputerResult() {
	const options = ['Rock', 'Paper', 'Scissors'];
	const RandomOption = Math.floor(Math.random() * options.length);
	return options[RandomOption];
}

console.log(getRandomComputerResult());

function hasPlayerWonTheRound(player, computer) {
	if (player === computer) {
		return false;
	} else if (player === 'Rock' && computer === 'Scissors') {
		return true;
	} else if (player === 'Scissors' && computer === 'Paper') {
		return true;
	} else if (player === 'Paper' && computer === 'Rock') {
		return true;
	} else {
		return false;
	}
}

console.log(hasPlayerWonTheRound('Scissors', 'Scissors'));
console.log(hasPlayerWonTheRound('Scissors', 'Rock'));
