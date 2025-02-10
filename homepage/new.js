// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Event Booking Button Animation
const bookEventBtn = document.getElementById("bookEventBtn");
if (bookEventBtn) {
    bookEventBtn.addEventListener("mouseover", () => {
        bookEventBtn.style.transform = "scale(1.1)";
    });

    bookEventBtn.addEventListener("mouseout", () => {
        bookEventBtn.style.transform = "scale(1)";
    });

    bookEventBtn.addEventListener("click", () => {
        alert("Thanks for your interest! Our team will contact you soon.");
    });
}

// Contact Form Validation & Submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "All fields are required!";
        formMessage.style.color = "red";
        formMessage.style.display = "block";
        return;
    }

    if (!validateEmail(email)) {
        formMessage.textContent = "Enter a valid email address!";
        formMessage.style.color = "red";
        formMessage.style.display = "block";
        return;
    }

    formMessage.textContent = "Thank you for contacting us! We'll get back to you soon.";
    formMessage.style.color = "green";
    formMessage.style.display = "block";

    // Clear the form after submission
    document.getElementById("contactForm").reset();

    // Hide message after 3 seconds
    setTimeout(() => {
        formMessage.style.display = "none";
    }, 3000);
});

// Email Validation Function
function validateEmail(email) {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

// Animate Service Cards on Scroll
const serviceCards = document.querySelectorAll('.service-card');

const revealOnScroll = () => {
    serviceCards.forEach(card => {
        let cardTop = card.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

// Initial Animation Check
revealOnScroll();
