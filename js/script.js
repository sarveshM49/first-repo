/*document.addEventListener("DOMContentLoaded", function () {

    // Get elements from your existing HTML
    const logo = document.querySelector(".logo");
    const image = document.querySelector("main img");
    const heading = document.querySelector("h1");
    const subtitle = document.querySelector("h2");
    const navLinks = document.querySelectorAll("header a");


    // =========================
    // Logo animation
    // =========================

    if (logo) {
        logo.style.opacity = "0";
        logo.style.transform = "translateY(-20px)";

        setTimeout(function () {
            logo.style.transition = "all 0.8s ease";
            logo.style.opacity = "1";
            logo.style.transform = "translateY(0)";
        }, 300);
    }


    // =========================
    // Image animation
    // =========================

    if (image) {
        image.style.opacity = "0";
        image.style.transform = "scale(0.7)";

        setTimeout(function () {
            image.style.transition = "all 0.8s ease";
            image.style.opacity = "1";
            image.style.transform = "scale(1)";
        }, 500);
    }


    // =========================
    // Heading animation
    // =========================

    if (heading) {
        heading.style.opacity = "0";
        heading.style.transform = "translateY(40px)";

        setTimeout(function () {
            heading.style.transition = "all 0.8s ease";
            heading.style.opacity = "1";
            heading.style.transform = "translateY(0)";
        }, 800);
    }


    // =========================
    // Subtitle animation
    // =========================

    if (subtitle) {
        subtitle.style.opacity = "0";
        subtitle.style.transform = "translateY(30px)";

        setTimeout(function () {
            subtitle.style.transition = "all 0.8s ease";
            subtitle.style.opacity = "1";
            subtitle.style.transform = "translateY(0)";
        }, 1100);
    }


    // =========================
    // Navigation hover
    // =========================

    navLinks.forEach(function (link) {

        link.addEventListener("mouseenter", function () {
            link.style.transform = "translateY(-3px)";
            link.style.transition = "0.3s";
        });

        link.addEventListener("mouseleave", function () {
            link.style.transform = "translateY(0)";
        });

    });


    // =========================
    // Mouse movement effect
    // =========================

    document.addEventListener("mousemove", function (event) {

        if (!image) return;

        const x =
            (window.innerWidth / 2 - event.clientX) / 80;

        const y =
            (window.innerHeight / 2 - event.clientY) / 80;

        image.style.transform =
            `translate(${x}px, ${y}px) scale(1.02)`;

    });


    // =========================
    // Background video
    // =========================

    const video = document.querySelector(".background-video");

    if (video) {

        video.play().catch(function () {
            console.log("Video autoplay was blocked.");
        });

    }
*/