"use strict";

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

  menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
      menuBtn.textContent = "✕";
    } else {
      menuBtn.textContent = "☰";
    }

  });


  navMenu.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

      navMenu.classList.remove("open");

      menuBtn.textContent = "☰";

    });

  });

}


/* COPY ADDRESS */

const copyBtn = document.getElementById("copyBtn");
const toast = document.getElementById("toast");

const address =
  "Shop No 5, Balchandran Blessing, 6, Pipeline Rd, near Shinde Wasti Road, Ganesh Nagar, Ravet, Pimpri-Chinchwad, Maharashtra 412101";


function showToast(message) {

  if (!toast) {
    return;
  }

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(function () {

    toast.classList.remove("show");

  }, 2200);

}


if (copyBtn) {

  copyBtn.addEventListener(
    "click",
    async function () {

      try {

        if (
          navigator.clipboard &&
          window.isSecureContext
        ) {

          await navigator.clipboard.writeText(
            address
          );

        } else {

          const textArea =
            document.createElement("textarea");

          textArea.value = address;

          textArea.style.position = "fixed";
          textArea.style.opacity = "0";

          document.body.appendChild(textArea);

          textArea.focus();
          textArea.select();

          const copied =
            document.execCommand("copy");

          textArea.remove();

          if (!copied) {
            throw new Error("Copy failed");
          }

        }

        showToast("Address copied!");

      } catch (error) {

        console.error(error);

        showToast(
          "Copy failed. Please copy manually."
        );

      }

    }
  );

}


/* YEAR */

const year = document.getElementById("year");

if (year) {

  year.textContent =
    new Date().getFullYear();

}
