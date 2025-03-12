document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contact-button");
    const contactMenu = document.getElementById("contact-menu");
    const closeButton = document.getElementById("close-button");

    contactButton.addEventListener("click", function () {
        contactMenu.classList.add("show");
    });

    closeButton.addEventListener("click", function () {
        contactMenu.classList.remove("show");
    });
});
