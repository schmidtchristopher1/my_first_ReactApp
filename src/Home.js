import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Home() {
	const tasks = [
		"Meet John",
		"Buy groceries",
		"Clean the house",
		"Cook dinner",
		"Walk the dog",
	];

	function renderList() {
		return tasks.map((task, index) => <li key={index}>{task}</li>);
	}

	return (
		<div>
			<Header name='Home' />
			<h1>TO-DO List</h1>
			<ul>{renderList()}</ul>
			<Footer />
		</div>
	);
}

export default Home;
