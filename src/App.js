import axios from "axios";
import React, { useEffect, useState } from "react";
import { Character } from "./components/Character";
import ButtonAppBar from "./components/ButtonAppBar";

const App = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		axios.get("https://swapi.dev/api/people/").then((res) => {
			setCharacters(res.data);
		});
	}, []);

	return (
		<div>
			<ButtonAppBar />
			<h1 className="Header">Characters</h1>
			{characters.map((char, index) => (
				<Character key={index} character={char} />
			))}
		</div>
	);
};

export default App;
