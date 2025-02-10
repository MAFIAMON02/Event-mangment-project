document.addEventListener("DOMContentLoaded", () => {
    const bookEventBtn = document.getElementById("bookEventBtn");
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
    
    // Scroll to Contact Section when Booking Button Clicked
    bookEventBtn.addEventListener("click", () => {
        document.querySelector(".contact").scrollIntoView({ behavior: "smooth" });
    });

    // Form Submission Handling
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        formMessage.style.display = "block";
        formMessage.textContent = "Thank you for contacting us! We will get back to you soon.";
        contactForm.reset();
        setTimeout(() => {
            formMessage.style.display = "none";
        }, 3000);
    });

    // Service Cards Hover Effect
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
            card.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
        });
    });
});
