document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contact-button");
    const contactMenu = document.getElementById("contact-menu");
    const overlay = document.getElementById("overlay");

    if (!contactButton || !contactMenu || !overlay) {
        return;
    }

    contactButton.addEventListener("click", function (event) {
        event.stopPropagation();
        contactMenu.classList.add("show");
        overlay.classList.add("show");
    });

    document.addEventListener("click", function (event) {
        if (!contactMenu.contains(event.target) && !contactButton.contains(event.target)) {
            contactMenu.classList.remove("show");
            overlay.classList.remove("show");
        }
    });

    contactMenu.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    overlay.addEventListener("click", function () {
        contactMenu.classList.remove("show");
        overlay.classList.remove("show");
    });
});

/*********************************************************/

document.addEventListener("DOMContentLoaded", function () {
    updateRandomPhone();
});

const phoneData = [
    { img: "lib/telefoner.png", text: "Kvalitetsföremål från alla tider" },
    { img: "lib/phones2.png", text: "Hantverk av evig klass" },
    { img: "lib/phones3.png", text: "Perfektion som aldrig bleknar" }
];

function updateRandomPhone() {
    const phoneImage = document.getElementById("phoneImage");
    const phoneText = document.getElementById("phoneText");

    if (!phoneImage || !phoneText) return;

    const randomIndex = Math.floor(Math.random() * phoneData.length);
    phoneImage.src = phoneData[randomIndex].img;
    phoneText.textContent = phoneData[randomIndex].text;
}

/*********************************************************/

document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("greenVideo");

    if (video) {
        video.addEventListener("mouseenter", () => {
            video.play();
        });

        video.addEventListener("mouseleave", () => {
            video.pause();
        });
    }
});

/*********************************************************/

document.addEventListener("DOMContentLoaded", function () {
    const faqButton = document.getElementById("faq-btn");
    const faqMenu = document.getElementById("faq");
    const overlay = document.getElementById("overlay");

    if (!faqButton || !faqMenu || !overlay) {
        return;
    }

    faqButton.addEventListener("click", function (event) {
        event.stopPropagation();
        faqMenu.classList.add("show");
        overlay.classList.add("show");
    });

    document.addEventListener("click", function (event) {
        if (!faqMenu.contains(event.target) && !faqButton.contains(event.target)) {
            faqMenu.classList.remove("show");
            overlay.classList.remove("show");
        }
    });

    faqMenu.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    overlay.addEventListener("click", function () {
        faqMenu.classList.remove("show");
        overlay.classList.remove("show");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.question').forEach(item => {
        item.addEventListener('click', function () {
            let answer = this.nextElementSibling;
            answer.style.display = (answer.style.display === "block") ? "none" : "block";
        });
    });
});

/*********************************************************/


$(document).ready(function() {
    $(".review").hover(
        function() {
            $(this).stop().animate({
                opacity: 1
            }, 300).css("transform", "rotate(1deg)").css("box-shadow", "5px 5px 15px rgba(0,0,0,0.3)");
        },
        function() {
            $(this).stop().animate({
                opacity: 0.7
            }, 300).css("transform", "rotate(0deg)").css("box-shadow", "none");
        }
    );
});

/*********************************************************/

$(document).ready(function() {
    $(".step").hover(
        function() {
            $(this).stop().animate({
                marginTop: "-3px",
                opacity: 1
            }, 300).css("transform", "rotate(1deg)").css("box-shadow", "5px 5px 15px rgba(0,0,0,0.3)");
        },
        function() {
            $(this).stop().animate({
                marginTop: "0px",
                opacity: 0.7
            }, 300).css("transform", "rotate(0deg)").css("box-shadow", "none");
        }
    );
});