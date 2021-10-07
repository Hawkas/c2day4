import searchArray from "./../libs/searchArray.js";

const addSuggestions = function (array, filterString) {
	let newHtml = ``;
	if (filterString.name !== "" || filterString.price !== "") {
		let filteredArray = searchArray(array, filterString);
		for (let itemObj of filteredArray) {
			newHtml += `
            <li class="suggestions__value" data-name="${itemObj.title}" data-price="${itemObj.price}">
            ${itemObj.title} - <span>$${itemObj.price}<span>
            </li>`;
		}
	}
	return newHtml;
};

export default addSuggestions;
