import fetchData from "./../libs/fetchData.js";

let data = await fetchData("https://fakestoreapi.com/products/");

export default data;