import { removeSpaces } from "./utilityFunctions.js";

function searchArrayName(array, filterName) {
    let itemName = "";
    if (filterName !== "") {
    let filteredArray = array.filter(function(object) {
        itemName = removeSpaces(object.title.toLowerCase());
        return itemName.trim().includes(filterName.toLowerCase());
    })
    array = filteredArray;
}
    return array;
}


function searchArrayPrice(array, filterPrice) {
    if (filterPrice !== "") {
        let filteredArray = array.filter(function(object) {
            return parseInt(object.price) <= parseInt(filterPrice);
        })
    array = filteredArray;
}
return array;

}

const searchArray = function(array, filterStrings) {
    let filteredArray = array;
    filteredArray = searchArrayName(filteredArray, filterStrings.name);
    filteredArray = searchArrayPrice(filteredArray, filterStrings.price);
    return filteredArray;
}

export default searchArray;