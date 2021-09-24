

async function fetchData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
        document.querySelector(".cards__container").innerHTML = `<h2 class="error">An error occured while loading the product list</h2>`
    }
}

export default fetchData;