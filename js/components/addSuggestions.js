import searchArray from "./../libs/searchArray.js";


const addSuggestions = function(array, filterString) {
    let newHtml = ``;
    if (filterString.name !== "") {
        let filteredArray = searchArray(array, filterString);
        for (let itemObj of filteredArray) {
            newHtml += `<option value="${itemObj.title}">\n`
        }
}
    return newHtml;
}

export default addSuggestions;