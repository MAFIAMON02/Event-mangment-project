document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for Buttons
    document.getElementById("bookEventBtn").addEventListener("click", function () {
        alert("Booking feature coming soon!");
        window.scrollTo({ top: document.querySelector(".contact").offsetTop, behavior: "smooth" });
    });

    // Contact Form Submission
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate Form
        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Show Success Message
        formMessage.style.display = "block";
        formMessage.textContent = "Thank you, " + name + "! We will get back to you soon.";
        
        // Clear form fields
        contactForm.reset();

        // Hide message after 3 seconds
        setTimeout(() => {
            formMessage.style.display = "none";
        }, 3000);
    });

    // Hover Effect on Services
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.1)";
            card.style.transition = "0.3s ease-in-out";
        });
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });
});
