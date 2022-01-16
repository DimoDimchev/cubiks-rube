import { generateScramble } from "../../api";
import { useState, useEffect } from "react";
import "../../styles/scrambling.scss";

export default function ScramblingPage() {
	const [scramble, setScramble] = useState("");

	useEffect(() => {
		const generatedScramble = generateScramble();
		setScramble(generatedScramble);
	}, []);

	return (
		<div className="scrambleBlock">
			<p className="scramble">{scramble}</p>
			<button
				className="scrambleButton"
				onClick={() => {
					setScramble(generateScramble);
				}}
			>
				Generate new scramble
			</button>
		</div>
	);
}
