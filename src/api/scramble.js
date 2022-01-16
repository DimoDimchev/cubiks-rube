import scramby from "scramby";

const generateScramble = () => {
	const scrambler = scramby();
	const scramble = scrambler.getRandomScramble();

	return scramble.scrambleString;
};

export default generateScramble;
