// Cookies

function saveThemeState(checkBox) {
    localStorage.setItem(checkBox.id, checkBox.checked);
    // Change LinkedIn Theme
    const badge = document.querySelector(".badge-base");
    if (badge) {badge.setAttribute("data-theme", checkBox.checked ? "dark" : "light");}
    window.location.reload();
}

function loadThemeState(checkBox) {
    const savedState = localStorage.getItem(checkBox.id);
    if (savedState !== null) {
        checkBox.checked = savedState === "true";
    }
    // Change LinkedIn Theme
    const badge = document.querySelector(".badge-base");
    if (badge) {badge.setAttribute("data-theme", checkBox.checked ? "dark" : "light");}
}

document.addEventListener("DOMContentLoaded", () => {
    const checkBox = document.querySelector("#theme");

    if (checkBox) {
        loadThemeState(checkBox);
        checkBox.addEventListener("change", () => saveThemeState(checkBox));
    }
});