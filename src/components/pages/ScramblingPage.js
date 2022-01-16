import { generateScramble } from "../../api";
import { useState, useEffect } from "react";

export default function ScramblingPage() {
	const [scramble, setScramble] = useState("");

	useEffect(() => {
		const generatedScramble = generateScramble();
		setScramble(generatedScramble);
	}, []);

	return (
		<div>
			<p>{scramble}</p>
			<button
				onClick={() => {
					setScramble(generateScramble);
				}}
			>
				Generate new scramble
			</button>
		</div>
	);
}
