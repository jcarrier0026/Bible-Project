import {useState} from "react";
//import { verses } from "./text_files/text.txt";

var verses = ["For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
				"In the beginning, God created the heavens and the earth.",
				"As iron sharpens iron, so one man sharpens another."];

function InputHandler(text) {
	var output = []
	for(var verse in verses) {
		if (verses[verse].search(new RegExp(text, "i")) !== -1) {
			console.log("Verse found:");
			console.log(verses[verse]);
			output.push(verses[verse]);
		}
	}
	SetVersesList(output);
	//console.log("Searched for: " + text);
	return output;
}

function SetVersesList(verses) {
	var element = document.getElementById("verses_display");
	element.innerHTML = "";
	for (var verse in verses) {
		element.innerHTML += verses[verse] + "<br><br>";
	}
}

function SearchBar() {
	const [search_term, SetSearchTerm] = useState("");
	return (
		<div>
			<input type = "search" id = "bible_search" name = "bible_search" onChange = {event => {SetSearchTerm(event.target.value)}}></input>
			<button value = {search_term} onClick = {e => InputHandler(e.target.value)}>Search</button>
			<p id = "verses_display" ></p>
		</div>
		);
}
export default SearchBar;
