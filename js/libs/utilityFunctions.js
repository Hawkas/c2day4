export const removeSpaces = function (str) {
	while (str.indexOf("\t") > -1) {
		str = str.replace("\t", " ");
	}
	while (str.indexOf("  ") > -1) {
		str = str.replace("  ", " ");
	}
	return str;
};
export const gatherSearchValues = function (inputName, inputPrice) {
	let nameValue = inputName.value;
	let priceValue = inputPrice.value;
	const filterStrings = { name: nameValue, price: priceValue };
	console.log(filterStrings);
	return filterStrings;
};
