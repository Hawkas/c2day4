import fetchData from "./libs/fetchData.js";
import { getFromStorage, saveToStorage } from "./libs/localStorageHelper.js";

const productsContainer = document.querySelector(".cards__container");
let data = await fetchData("https://fakestoreapi.com/products/");
console.log(data);
if (typeof data !== "undefined") {
for (let element of data) {
    productsContainer.innerHTML += `
    <div class="col">
        <article class="card h-100">
            <img src="${element.image}" class="card-img-top img-fluid" alt="${element.title}" width="500" height="500">
            <div class="card-body">
                <h2 class="card-title">${element.title}</h2>
                <p class="card-subtitle">$${element.price}</p>
                <i class="far fa-heart card__icon" data-title="${element.title}" data-id="${element.id}" data-price="${element.price}"></i>
            </div>
        </article>
    </div>`
}
}
