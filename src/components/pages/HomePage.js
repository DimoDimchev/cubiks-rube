import React from "react";
import "../../styles/main.scss";
import "../../styles/home.scss";

export default function HomePage() {
	return (
		<div className="mainBlock">
			<div className="intro">
				<h1>Welcome to Cubik's Rube!</h1>
				<p>The average Rubik's Cube enjoyer's playground</p>
			</div>

			<div className="carousel">
				<h2>Why would you use this site?</h2>
				<div className="inner">
					<div className="element">
						<p>Timing</p>
						<p>
							This site allows you to time your Rubik's Cube
							solutions and keep track of your best times. Expect
							to see a leaderboard any time now where you can
							compare your best efforts to other users!
						</p>
					</div>
					<div className="element">
						<p>Info</p>
						<p>
							Here you can find information about the puzzle, its
							origin and some interesing facts, such as the number
							of possible configurations that can exist, the
							amount of cubes sold around the world and more.
						</p>
					</div>
					<div className="element">
						<p>Scrambling</p>
						<p>
							One of the most important parts of the puzzle is the
							proper scrambling. Here you can find various
							algorithms to ensure your cube is scrambled properly
							every time.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
