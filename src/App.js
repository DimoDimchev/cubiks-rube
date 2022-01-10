import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { HomePage, AboutPage } from "./components/pages";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<h1>Welcome to React Router!</h1>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
			</Routes>
		</div>
	);
}
