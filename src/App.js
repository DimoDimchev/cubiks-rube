import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
	HomePage,
	AboutPage,
	TimingPage,
	ScramblingPage,
} from "./components/pages";
import "./styles/main.scss";

export default function App() {
	return (
		<div className="App">
			<div className="nav">
				<Link className="link" to="/">
					Home
				</Link>
				<Link className="link" to="/timing">
					Timing
				</Link>
				<Link className="link" to="/scrambling">
					Scrambling
				</Link>
				<Link className="link" to="/about">
					About
				</Link>
			</div>

			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="timing" element={<TimingPage />} />
				<Route path="scrambling" element={<ScramblingPage />} />
			</Routes>
		</div>
	);
}
