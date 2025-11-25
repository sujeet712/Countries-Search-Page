let searchInput = document.getElementById("searchInput");
let spinner = document.getElementById("spinner");
let resultContainer = document.getElementById("resultCountries");

let countriesList = [];

// ---------------------------
// Fetch Countries Data
// ---------------------------
function getCountriesData() {
    spinner.classList.remove("hidden"); // show loader

    fetch("https://apis.ccbp.in/countries-data")
        .then(response => response.json())
        .then(data => {
            spinner.classList.add("hidden"); // hide loader

            countriesList = data;
            displayCountries(countriesList);
        });
}

// ---------------------------
// Display Countries
// ---------------------------
function displayCountries(list) {
    resultContainer.innerHTML = "";

    list.forEach(country => {
        let card = document.createElement("div");
        card.classList.add(
            "flex", "items-center", "p-4", "mb-3", "border", "rounded", "shadow-sm"
        );

        let img = document.createElement("img");
        img.src = country.flag;
        img.classList.add("w-[60px]", "h-[40px]", "mr-4", "object-cover");

        let text = document.createElement("div");

        let name = document.createElement("h2");
        name.textContent = country.name;
        name.classList.add("text-[18px]", "font-bold", "text-gray-800");

        let population = document.createElement("p");
        population.textContent = "Population: " + country.population;
        population.classList.add("text-gray-600", "text-[14px]");

        text.appendChild(name);
        text.appendChild(population);

        card.appendChild(img);
        card.appendChild(text);

        resultContainer.appendChild(card);
    });
}

// ---------------------------
// Search Functionality
// ---------------------------
searchInput.addEventListener("input", function() {
    let value = searchInput.value.toLowerCase();

    let filtered = countriesList.filter(country =>
        country.name.toLowerCase().includes(value)
    );

    displayCountries(filtered);
});

// Initial API call
getCountriesData();











// let searchInputEl = document.getElementById("searchInput");

// function knowPopulation(event) {
//     if (event.key === "Enter") {
//         let searchInput = searchInputEl.value;
//         console.log(searchInput);
//     }
// }


// searchInputEl.addEventListener("keydown", knowPopulation);
