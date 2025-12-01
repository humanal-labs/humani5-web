const body = document.body;
const toggle = document.getElementById("themeToggle");

function set(mode) {
    body.className = mode;
    toggle.textContent = mode === "dark" ? "🌙" : "☀️";
    localStorage.setItem("theme", mode);
}

set(localStorage.getItem("theme") || "dark");

toggle.onclick = () => {
    set(body.className === "dark" ? "light" : "dark");
};
