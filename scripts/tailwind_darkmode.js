const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;
themeToggle.addEventListener("click", () => {
    htmlElement.classList.toggle("dark");
    if (htmlElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
if (localStorage.getItem("theme") === "dark") {
    htmlElement.classList.add("dark");
} else {
    htmlElement.classList.remove("dark");
}