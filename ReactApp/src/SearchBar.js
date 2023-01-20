function SearchBarOnClick() {
	// Replace with code to search a verse.
	console.debug("Searched a verse");
}

function SearchBar() {
	return (
		<div>
			<input type="search" id="bible_search" name="bible_search"></input>
			<button onClick={SearchBarOnClick}>Search</button>
		</div>
		);
}
export default SearchBar;