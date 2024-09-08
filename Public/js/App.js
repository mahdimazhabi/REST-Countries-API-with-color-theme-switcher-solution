const Divmoon = document.getElementById("moonHandler");

const titleMoode = document.getElementById("titleMoode");

/// Checking state dark || light
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.add("light");
}
// Chching Title
if (localStorage.getItem("title") === "Light Moode") {
  titleMoode.innerHTML = "Light Moode";
} else {
  titleMoode.innerHTML = "Dark Moode";
}

// Set state moode

Divmoon.addEventListener("click", () => {
  const htmlElement = document.documentElement;

  htmlElement.classList.toggle("dark");

  if (htmlElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    titleMoode.innerHTML = "Light Moode";
    localStorage.setItem("title", "Light Moode");
  } else {
    localStorage.setItem("theme", "light");
    titleMoode.innerHTML = "Dark Moode";
    localStorage.setItem("title", "Dark Moode");
  }
});
// Fetch APi
const DataCountry = [];

window.addEventListener("DOMContentLoaded", () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => {
      // Convert the response to JSON
      return res.json();
    })
    .then((data) => {
      // Log the fetched data

      data.forEach((country) => {
        DataCountry.push({
          name: country.name.common,
          flag: country.flags.png,
          population: country.population,
          region: country.region,
          capital: country.capital ? country.capital[0] : "N/A",
        });
      });

      renderCountries();
    })
    .catch((err) => {
      // Handle any errors
      console.error(err);
    });
  console.log(DataCountry);
});

const importdataCountry = document.getElementById("importdataCountry");

function renderCountries() {
  importdataCountry.innerHTML = "";

  DataCountry.forEach((country) => {
    // Create a div element dynamically
    const countryDiv = document.createElement("div");
    countryDiv.className =
      "dark:bg-darkBlueElements cursor-pointer bg-white w-full lg:w-[85%] text-center rounded-lg shadow-lg mb-6 flex flex-col";
    countryDiv.innerHTML = `
      <img src="${country.flag}" alt="${country.name}" 
           class="mx-auto rounded-sm max-h-2 w-full object-cover mb-4" style="max-height: 10rem;">
      <div class="flex-grow flex flex-col justify-between text-left ml-7 pb-8" style="min-height: 11rem;">
        <h1 class="dark:text-white text-black mb-2">${country.name}</h1>
        <span class="dark:text-white text-black ">Population: ${country.population.toLocaleString()}</span>
        <span class="dark:text-white text-black ">Region: ${
          country.region
        }</span>
        <span class="dark:text-white text-black ">Capital: ${
          country.capital
        }</span>
      </div>
    `;

    // // Attach the event listener for the click event
    // countryDiv.addEventListener("click", () => {
    //   ClickHandler(country.name); // Call the ClickHandler when the div is clicked
    // });

    // Append the created div to the container
    importdataCountry.appendChild(countryDiv);
  });
}

const inputvalue = document.getElementById("inputvalue");

inputvalue.addEventListener("change", (e) => {
  let valueinput = e.target.value;
  let nemrcuntry = [];
  DataCountry.forEach((country) => {
    nemrcuntry.push(country.name);
  });
  nemrcuntry.includes(valueinput);
  const results = nemrcuntry.filter((item) => item.includes(valueinput));
  console.log(results);
});
