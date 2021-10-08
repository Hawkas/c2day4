import data from "./data/data.js";
import renderToHtml from "./components/renderToHtml.js";
import { getFromStorage, storageHandler } from "./libs/localStorageHelper.js";
import handleSearch from "./components/handleSearch.js";

const inputs = document.querySelectorAll(".form-control");
const suggestions = document.querySelector(".suggestions");
let productsArray = data;

if (document.title === "Favourites") {
	productsArray = getFromStorage("favourites");
}
function renderThePage() {
if (typeof productsArray !== "undefined") {
	if (document.title === "Home") {
		for (let input of inputs) {
			input.addEventListener("keyup", handleSearch);

			input.addEventListener("focus", function () {
				this.dataset.focus = "true";
				suggestions.classList.add("shown");
			});

			input.addEventListener("blur", function () {
				this.dataset.focus = "false";
				if (inputs[0].dataset.focus === "false" && inputs[1].dataset.focus === "false") {
					setTimeout(() => {
						suggestions.classList.remove("shown");
					}, 250);
				}
			});
		}

		// Fill input with value of item selected from suggestions
		suggestions.addEventListener("click", function (e) {
			if (e.target.classList.contains("suggestions__value")) {
				suggestions.classList.remove("shown");
				inputs[0].value = e.target.dataset.name;
				inputs[1].value = e.target.dataset.price;
				handleSearch();
			}
		});
	}

	renderToHtml(productsArray);

	const icons = document.querySelectorAll(".fa-heart.card__icon");
	for (let element of icons) {
		element.addEventListener("click", (e) => {
			storageHandler(element);
			if (document.title === "Favourites") {
				productsArray = getFromStorage("favourites");
				renderThePage();
			}
		});
	}
}
}
renderThePage();

