import {useState} from "react";

var verses = ["For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
				"In the beginning, God created the heavens and the earth.",
				"As iron sharpens iron, so one man sharpens another."];

// This function takes the text from the search bar and searches for a match
function InputHandler(text) {
	var output = []
	for(var verse in verses) {
		if (verses[verse].search(new RegExp(text, "i")) !== -1 && text !== "") {
			//console.log("Verse found:");
			//console.log(verses[verse]);
			output.push(verses[verse]);
		}
	}
	SetVersesList(output);
	//console.log("Searched for: " + text);
	//return output;
}

// This function takes the verses that match the search criteria and display them on the webpage.
function SetVersesList(verses) {
	var element = document.getElementById("verses_display");
	element.innerHTML = "";
	for (var verse in verses) {
		element.innerHTML += verses[verse] + "<br><br>";
	}
}

function CheckKey(e) {
	var button = document.getElementById("search_button");
	console.log(e.key);
	if (e.key === "Enter") {
		e.preventDefault();
		button.click();
	}
}

// This is the layout for the webpage;
function SearchBar() {
	const [search_term, SetSearchTerm] = useState("");
	return (
		<div>
			<input type = "search" id = "search_bar" name = "bible_search" onChange = {event => {SetSearchTerm(event.target.value)}} onKeyDown = {e => CheckKey(e)}></input>
			<button id = "search_button" value = {search_term} onClick = {e => InputHandler(e.target.value)}>Search</button>
			<p id = "verses_display" ></p>
		</div>
		);
}
export default SearchBar;
