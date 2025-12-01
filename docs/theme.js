document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggle = document.getElementById("themeToggle");

    function applyTheme(mode) {
        if (mode === "light") {
            body.classList.remove("theme-dark");
            body.classList.add("theme-light");
            if (toggle) toggle.textContent = "☀︎";
        } else {
            body.classList.remove("theme-light");
            body.classList.add("theme-dark");
            if (toggle) toggle.textContent = "☾";
        }
    }

    const saved = localStorage.getItem("humanal-theme");
    applyTheme(saved || "dark");

    if (toggle) {
        toggle.addEventListener("click", () => {
            const next = body.classList.contains("theme-dark") ? "light" : "dark";
            applyTheme(next);
            localStorage.setItem("humanal-theme", next);
        });
    }
});
