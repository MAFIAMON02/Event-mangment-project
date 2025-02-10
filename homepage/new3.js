// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Booking Button Click Event
    const bookEventBtn = document.getElementById("bookEventBtn");
    bookEventBtn.addEventListener("click", function () {
        alert("🎉 Your event booking request has been received! We'll contact you soon.");
    });

    // Learn More Button Interactivity
    const learnMoreButtons = document.querySelectorAll(".learn-more");
    learnMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            const serviceName = this.previousElementSibling.previousElementSibling.textContent;
            alert(`✨ More details about ${serviceName} are coming soon! Stay tuned.`);
        });
    });

    // Service Card Hover Effects
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach(card => {
        card.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.boxShadow = "0px 10px 20px rgba(255, 117, 140, 0.4)";
        });

        card.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
        });
    });

    // Contact Form Validation
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("⚠️ Please fill out all fields.");
            return;
        }

        formMessage.style.display = "block";
        formMessage.textContent = "✅ Thank you for reaching out! We will get back to you soon.";
        formMessage.classList.add("fade-in");

        // Reset form after submission
        contactForm.reset();

        // Hide message after 3 seconds
        setTimeout(() => {
            formMessage.style.display = "none";
        }, 3000);
    });

    // Scroll Animation for Services
    const servicesSection = document.querySelector(".services");
    window.addEventListener("scroll", function () {
        let sectionPosition = servicesSection.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            servicesSection.classList.add("fade-in");
        }
    });
});
