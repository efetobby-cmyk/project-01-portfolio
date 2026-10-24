// JavaScript Class 6
// Dark Mode

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}
// Contact Form

let contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let formMessage = document.getElementById("form-message");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    formMessage.textContent = "Message received successfully!";

});
// CLASS 13: SEND CONTACT FORM WITH FORMSPREE

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const visitorName = document.getElementById("name").value.trim();
        const visitorEmail = document.getElementById("email").value.trim();
        const visitorMessage = document.getElementById("message").value.trim();
        const submitButton = contactForm.querySelector('button[type="submit"]');

        if (!visitorName || !visitorEmail || !visitorMessage) {
            formStatus.textContent = "Please complete all fields.";
            return;
        }

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
        formStatus.textContent = "";

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                formStatus.textContent =
                    "Thank you, " + visitorName +
                    "! Your message was submitted successfully.";

                contactForm.reset();
            } else {
                formStatus.textContent =
                    "Your message could not be sent. Please try again.";
            }
        } catch (error) {
            formStatus.textContent =
                "A network error occurred. Please check your connection and try again.";
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = "Submit Message";
        }
    });
}