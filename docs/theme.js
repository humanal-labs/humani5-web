const toggle = document.getElementById("themeToggle");
const body = document.body;

function setTheme(mode) {
    if (mode === "light") {
        body.classList.remove("theme-dark");
        body.classList.add("theme-light");
        toggle.textContent = "Dark Mode";
    } else {
        body.classList.remove("theme-light");
        body.classList.add("theme-dark");
        toggle.textContent = "Light Mode";
    }
}

toggle.addEventListener("click", () => {
    const isDark = body.classList.contains("theme-dark");
    const next = isDark ? "light" : "dark";
    localStorage.setItem("humanal-theme", next);
    setTheme(next);
});

setTheme(localStorage.getItem("humanal-theme") || "dark");
