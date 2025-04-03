// Current Section's Header Element Color Change
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("current")
                document.querySelector("header nav a[href*=" + id + "]").classList.add("current");
            });
        };
    });

    // Sticky Navbar
    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);

    // Navbar Menu Icon For Mobile View Toggle - Hide - OnScroll
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("current");
};

// Navbar Menu Icon For Mobile View Toggle - Show
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("current");
};

// Additionals Card Animation
let additionalsCards = document.querySelectorAll(".additionals-card");

additionalsCards.forEach((additionalsCard) => {
    additionalsCard.addEventListener("click", () => {
        additionalsCards.forEach((additionalsCard) => {
            additionalsCard.classList.remove("current");
        });
        additionalsCard.classList.add("current");
    });
});

// Scroll Reveal Animation
ScrollReveal({
    reset: true,
    distance: "100px",
    duration: 1000,
    delay: 300
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-image, .about-image, .qualification-container, .additionals-container, .contact-content", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content, .contact-form ", { origin: "right" });

// Typed Profession
var typed = new Typed(".profession", {
    strings: ["Programmer", "Frontend Developer", "Problem Solver"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

var typed = new Typed(".about-profession", {
    strings: ["Student", "Learner", "Team Player"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

// Contact Mail SMTP Script
function contactmail() {
    Email.send({
        SecureToken: "aca8f11e-3515-4bab-bb71-08c8d700cfd8",
        To: 'jegan.contact@gmail.com',
        From: "jegan.contact@gmail.com",
        Subject: document.getElementById("mail-subject").value,
        Body: "Enquiry Raised by,<br>"
            + "Name: " + document.getElementById("mail-name").value
            + "<br>Email: " + document.getElementById("email").value
            + "<br>Mobile: " + document.getElementById("mobile-number").value
            + "<br> <br> " + document.getElementById("mail-message").value
    }).then(
        message => alert("Mail Sent")
    );
}