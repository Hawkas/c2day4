import { gatherSearchValues } from "./../libs/utilityFunctions.js";
import searchArray from "./../libs/searchArray.js";
import { getFromStorage } from "../libs/localStorageHelper.js";

function renderToHtml(array, filterStrings = false) {
	const cardsContainer = document.querySelector(".cards__container");
	if (document.title === "Home") {
		const inputName = document.querySelector(".input-name");
		const inputPrice = document.querySelector(".input-price");
		if (!filterStrings) {
			array = searchArray(array, gatherSearchValues(inputName, inputPrice));
		} else {
			array = searchArray(array, filterStrings);
		}
	}
	cardsContainer.innerHTML = "";
	if (array.length >= 1) {
		for (let object of array) {
			let favourites = getFromStorage("favourites");
			let isInStorage = favourites.find((savedObject) => parseInt(savedObject.id) === parseInt(object.id));
			let faClass = "far";
			if (isInStorage !== undefined) {
				faClass = "far fas";
			}
			cardsContainer.innerHTML += `
            <div class="col card__outer" data-id="${object.id}">
                <article class="card h-100">
                    <img src="${object.image}" class="card-img-top img-fluid" alt="${object.title}" width="500" height="500">
                    <div class="card-body">
                        <h2 class="card-title">${object.title}</h2>
                        <p class="card-subtitle">$${object.price}</p>
                        <i class="${faClass} fa-heart card__icon" data-title="${object.title}" data-id="${object.id}" data-price="${object.price}" data-image="${object.image}"></i>
                    </div>
                </article>
            </div>`;
		}
	} else {
		if (document.title === "Home") {
		cardsContainer.innerHTML = `
        <div class="col">
            <h3 style="color: gray">No results found</h3>
        </div>`;
	} else if (document.title === "Favourites") {
		cardsContainer.innerHTML = `
		<div class="col">
			<h3 style="color: blue">You don't have any favourites :(</h3>
		</div>`
	}
	}
}

export default renderToHtml;
