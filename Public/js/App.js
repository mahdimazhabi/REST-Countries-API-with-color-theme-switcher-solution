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
      console.log(data);

      data.forEach((country) => {
        DataCountry.push({
          name: country.name.common,
          flag: country.flags.png,
          population: country.population,
          region: country.region,
          capital: country.capital ? country.capital[0] : "N/A",
        });
      });

      renderCountries(DataCountry);
    })
    .catch((err) => {
      // Handle any errors
      console.error(err);
    });
  console.log(DataCountry);
});

const importdataCountry = document.getElementById("importdataCountry");

const selectRegion = document.getElementById("selectRegion");
let selectedRegion = "Filter by Region";

selectRegion.addEventListener("change", (e) => {
  selectedRegion = e.target.value;
  console.log("Selected region:", selectedRegion);

  // بعد از انتخاب کاربر، کشورها را رندر می‌کنیم
  renderCountries(DataCountry);
});

function renderCountries(countries) {
  // ابتدا محتوای قبلی را پاک می‌کنیم
  importdataCountry.innerHTML = "";

  // اگر منطقه انتخاب نشده باشد، همه کشورها را نمایش می‌دهیم
  let filteredCountries = countries;

  if (selectedRegion !== "Filter by Region") {
    // فیلتر کردن کشورها بر اساس منطقه انتخاب‌شده
    filteredCountries = countries.filter(
      (country) => country.region === selectedRegion
    );
  }

  // رندر کردن کشورها
  filteredCountries.forEach((country) => {
    // ایجاد عنصر div برای هر کشور
    const countryDiv = document.createElement("div");
    countryDiv.className =
      "dark:bg-darkBlueElements cursor-pointer bg-white w-full lg:w-[85%] text-center rounded-lg shadow-lg mb-6 flex flex-col";
    countryDiv.innerHTML = `
      <img src="${country.flag}" alt="${country.name}" 
      class="mx-auto rounded-sm max-h-2 w-full object-cover mb-4" style="max-height: 10rem;">
      <div class="flex-grow flex flex-col justify-between text-left ml-7 pb-8" style="min-height: 11rem;">
      <h1 class="dark:text-white text-black mb-2">${country.name}</h1>
      <span class="dark:text-white text-black ">Population: ${country.population.toLocaleString()}</span>
      <span class="dark:text-white text-black ">Region: ${country.region}</span>
      <span class="dark:text-white text-black ">Capital: ${
        country.capital
      }</span>
      </div>
    `;

    // اضافه کردن div به صفحه
    importdataCountry.appendChild(countryDiv);
  });
}

// ابتدا همه کشورها را نمایش می‌دهیم
renderCountries(DataCountry);

const inputvalue = document.getElementById("inputvalue");

inputvalue.addEventListener("input", (e) => {
  let valueinput = e.target.value.toLowerCase(); // برای مقایسه بهتر همه حروف به کوچک تغییر می‌دهیم
  let filteredCountries = [];

  // فیلتر کشورها بر اساس ورودی کاربر
  filteredCountries = DataCountry.filter((country) => {
    return country.name.toLowerCase().includes(valueinput); // تطابق بر اساس نام کشور
  });

  renderCountries(filteredCountries);
});
