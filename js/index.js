import data from "./data/data.js";
import renderToHtml from "./components/renderToHtml.js";
import addSuggestions from "./components/addSuggestions.js";
import searchArray from "./libs/searchArray.js";
import { getFromStorage, saveToStorage } from "./libs/localStorageHelper.js";
import { gatherSearchValues } from "./libs/utilityFunctions.js";


const searchButton = document.querySelector(".search-btn");
const inputs = document.querySelectorAll(".form-control");
const suggestions = document.querySelectorAll(".suggestions");

if (typeof data !== "undefined") {
searchButton.addEventListener("click", function(e) {
    e.preventDefault();
    renderToHtml(data);
});

for (let input of inputs) {
    input.addEventListener("keyup", function(){
        let filterStrings = gatherSearchValues(inputs[0], inputs[1])
        renderToHtml(data, filterStrings)
        suggestions.forEach((suggestionList) => suggestionList.innerHTML = addSuggestions(data, filterStrings))
    })
}

renderToHtml(data);
}

