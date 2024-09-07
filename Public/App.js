const Divmoon = document.getElementById("moonHandler");

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.add("light");
}
Divmoon.addEventListener("click", () => {
  const htmlElement = document.documentElement;

  htmlElement.classList.toggle("dark");

  if (htmlElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
