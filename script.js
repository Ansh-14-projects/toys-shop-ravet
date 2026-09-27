/* =========================================
   TINY TYRES WEBSITE
   Main JavaScript
========================================= */


/*
    IMPORTANT:

    Put the shop's real WhatsApp number here.

    Example:

    const WHATSAPP_NUMBER = "919876543210";

    Do NOT put +, spaces or hyphens.

    For now it is intentionally blank because
    I could not verify Tiny Tyres' WhatsApp number
    from a reliable public source.
*/

const WHATSAPP_NUMBER = "";


/* =========================================
   MOBILE NAVIGATION
========================================= */

const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.getElementById("navLinks");


if (mobileMenu && navLinks) {

    mobileMenu.addEventListener("click", function () {

        navLinks.classList.toggle("open");

        if (navLinks.classList.contains("open")) {
            mobileMenu.textContent = "✕";
        } else {
            mobileMenu.textContent = "☰";
        }

    });


    const navigationLinks =
        navLinks.querySelectorAll("a");


    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            mobileMenu.textContent = "☰";

        });

    });

}


/* =========================================
   PRODUCT FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(".filter");

const productCards =
    document.querySelectorAll(".product-card");


function filterProducts(category) {

    filterButtons.forEach(function (button) {

        button.classList.remove("active");

        if (button.dataset.filter === category) {
            button.classList.add("active");
        }

    });


    productCards.forEach(function (card) {

        const cardCategories =
            card.dataset.category
                .toLowerCase()
                .split(" ");


        if (
            category === "all" ||
            cardCategories.includes(category)
        ) {

            card.classList.remove("hidden");

        } else {

            card.classList.add("hidden");

        }

    });


    const featuredSection =
        document.getElementById("featured");


    if (featuredSection) {

        featuredSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterProducts(button.dataset.filter);

    });

});


/* =========================================
   WHATSAPP
========================================= */

function openWhatsApp() {

    if (!WHATSAPP_NUMBER) {

        alert(
            "Tiny Tyres WhatsApp number has not been added yet. " +
            "Open script.js and add the shop's WhatsApp number."
        );

        return;

    }


    const message =
        "Hello Tiny Tyres! I would like to know about your available cars, die-cast models and toys.";


    const url =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================
   PRODUCT WHATSAPP ENQUIRY
========================================= */

function askWhatsApp(productName) {

    if (!WHATSAPP_NUMBER) {

        alert(
            "Tiny Tyres WhatsApp number has not been added yet. " +
            "Open script.js and add the shop's WhatsApp number."
        );

        return;

    }


    const message =
        "Hello Tiny Tyres! I am interested in: " +
        productName +
        ". Please let me know if it is available.";


    const url =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 600) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


if (backToTop) {

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================
   IMAGE ERROR HANDLING
========================================= */

const allImages =
    document.querySelectorAll("img");


allImages.forEach(function (image) {

    image.addEventListener("error", function () {

        /*
            If an online image fails,
            keep the card looking clean.
        */

        image.style.opacity = "0";

        image.parentElement.classList.add(
            "image-failed"
        );

    });

});
