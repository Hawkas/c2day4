import { gatherSearchValues } from "./../libs/utilityFunctions.js";
import searchArray from "./../libs/searchArray.js";

function renderToHtml(array, filterStrings = false) {
    const productsContainer = document.querySelector(".cards__container");
    if (document.title === "Home") {
        const inputName = document.querySelector(".input-name");
        const inputPrice = document.querySelector(".input-price");
        if (!filterStrings) {
            array = searchArray(array, gatherSearchValues(inputName, inputPrice));
        } else {
            array = searchArray(array, filterStrings);
        }
}
    productsContainer.innerHTML = "";
    if (array) {
        for (let object of array) {    
            productsContainer.innerHTML += `
            <div class="col">
                <article class="card h-100">
                    <img src="${object.image}" class="card-img-top img-fluid" alt="${object.title}" width="500" height="500">
                    <div class="card-body">
                        <h2 class="card-title">${object.title}</h2>
                        <p class="card-subtitle">$${object.price}</p>
                        <i class="far fa-heart card__icon" data-title="${object.title}" data-id="${object.id}" data-price="${object.price}"></i>
                    </div>
                </article>
            </div>`
        }
    }
}

export default renderToHtml;