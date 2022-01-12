import { useEffect, useState } from "react";

export default function Stopwatch() {
	const [time, setTime] = useState(0);
	const [stateNum, setStateNum] = useState(0);
	const [running, setRunning] = useState(false);
	useEffect(() => {
		let interval;
		if (running) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else if (!running) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [running]);

	const changeState = () => {
		if (stateNum === 0) {
			setRunning(true);
			setStateNum(1);
			return;
		}
		if (stateNum === 1) {
			setRunning(false);
			setStateNum(2);
			return;
		}
		if (stateNum === 2) {
			setTime(0);
			setRunning(false);
			setStateNum(0);
		}
	};

	return (
		<div className="stopwatch">
			<div className="numbers">
				<span>
					{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
				</span>
				<span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
				<span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
			</div>

			<button onClick={changeState}>Click</button>
		</div>
	);
}
