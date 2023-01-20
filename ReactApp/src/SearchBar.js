import {useState} from "react";

// Testing
function InputHandler(text) {
	console.debug(text.toLowerCase());
}

function SearchBar() {
	const [search_term, SetSearchTerm] = useState("");
	return (
		<div>
			<input type="search" id="bible_search" name="bible_search" onChange={event => {SetSearchTerm(event.target.value)}}></input>
			<button value={search_term} onClick={e => InputHandler(e.target.value)}>Search</button>
		</div>
		);
}
export default SearchBar;