export const saveToStorage = function (keyName, object) {
	localStorage.setItem(keyName, JSON.stringify(object));
};

export const getFromStorage = function (keyName) {
	if (localStorage.getItem(keyName) !== null) {
		return JSON.parse(localStorage.getItem(keyName));
	} else return [];
};

export const storageHandler = function (element) {
	element.classList.toggle("fas");
	let localStorageObject = {
		id: element.dataset.id,
		price: element.dataset.price,
		title: element.dataset.title,
		image: element.dataset.image,
	};
	let favourites = getFromStorage("favourites");
	let isInStorage = favourites.find((object) => object.id === localStorageObject.id);

	if (isInStorage === undefined) {
		favourites.push(localStorageObject);
		saveToStorage("favourites", favourites);
	} else {
		let removedElementArray = favourites.filter((object) => object.id !== localStorageObject.id);
		saveToStorage("favourites", removedElementArray);
	}
};
