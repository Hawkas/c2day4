import dataArray from "../data/data.js";
import { gatherSearchValues } from "../libs/utilityFunctions.js";
import renderToHtml from "./renderToHtml.js";
import addSuggestions from "./addSuggestions.js";

function handleSearch() {
	const inputArray = document.querySelectorAll(".form-control");
	const suggestionList = document.querySelector(".suggestions");
	let filterStrings = gatherSearchValues(inputArray[0], inputArray[1]);

	// Render cards to the DOM
	renderToHtml(dataArray, filterStrings);

	// Add suggestions to search input
	suggestionList.innerHTML = addSuggestions(dataArray, filterStrings);
	suggestionList.classList.add("shown");
}

export default handleSearch;
