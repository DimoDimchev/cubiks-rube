import { useEffect, useState } from "react";
import "../../styles/stopwatch.scss";

export default function Stopwatch() {
	const [lastTime, setLastTime] = useState(0);
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

	const changeState = (e) => {
		if (stateNum === 0) {
			setRunning(true);
			setStateNum(1);
			e.target.innerText = "Stop";
			return;
		}
		if (stateNum === 1) {
			setRunning(false);
			setStateNum(2);
			setLastTime(time);
			e.target.innerText = "Reset";
			return;
		}
		if (stateNum === 2) {
			setTime(0);
			setRunning(false);
			setStateNum(0);
			e.target.innerText = "Start";
			return;
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

			<button onClick={(e) => changeState(e)}>Start</button>
			<p className="lastTime">
				{lastTime > 0 &&
					`Last recorded time: ${(
						"0" + Math.floor((lastTime / 60000) % 60)
					).slice(-2)}:${(
						"0" + Math.floor((lastTime / 1000) % 60)
					).slice(-2)}:${("0" + ((lastTime / 10) % 100)).slice(-2)}`}
			</p>
		</div>
	);
}
