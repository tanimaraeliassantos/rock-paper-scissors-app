function getRandomComputerResult() {
	const options = ['Rock', 'Paper', 'Scissors'];
	const RandomOption = options[(Math.floor(Math.random() * options.length))];
	return RandomOption;
}

console.log(getRandomComputerResult());
