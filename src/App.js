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
				<Link className="link" to="/cubiks-rube">
					Home
				</Link>
				<Link className="link" to="/cubiks-rube/timing">
					Timing
				</Link>
				<Link className="link" to="/cubiks-rube/scrambling">
					Scrambling
				</Link>
				<Link className="link" to="/cubiks-rube/about">
					About
				</Link>
			</div>

			<Routes>
				<Route path="cubiks-rube" element={<HomePage />} />
				<Route path="cubiks-rube/about" element={<AboutPage />} />
				<Route path="cubiks-rube/timing" element={<TimingPage />} />
				<Route
					path="cubiks-rube/scrambling"
					element={<ScramblingPage />}
				/>
			</Routes>
		</div>
	);
}
