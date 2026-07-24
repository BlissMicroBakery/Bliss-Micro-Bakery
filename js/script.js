const menuButton = document.getElementById("menu-button");
const navigationLinks = document.getElementById("nav-links");
const currentYear = document.getElementById("current-year");

if (menuButton && navigationLinks) {
    menuButton.addEventListener("click", () => {
        const menuIsOpen = navigationLinks.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            menuIsOpen.toString()
        );

        menuButton.textContent = menuIsOpen ? "✕" : "☰";
    });

    navigationLinks.addEventListener("click", () => {
        navigationLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
    });
}

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}