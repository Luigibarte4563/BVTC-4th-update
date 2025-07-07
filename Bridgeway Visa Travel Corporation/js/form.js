document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("inquiry-form");
    const whatsappInput = document.getElementById("whatsapp");
    const whatsappError = document.getElementById("whatsapp-error");

    // WhatsApp input validation
    whatsappInput.addEventListener("input", function () {
        const value = this.value;
        const isValid = /^\+?\d*$/.test(value); // allows + then digits only

        if (!isValid) {
            this.classList.add("border-red-500");
            whatsappError.classList.remove("hidden");
        } else {
            this.classList.remove("border-red-500");
            whatsappError.classList.add("hidden");
        }
    });

    // Handle form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const isWhatsAppValid = /^\+?\d+$/.test(whatsappInput.value);
        if (!isWhatsAppValid) {
            whatsappInput.classList.add("border-red-500");
            whatsappError.classList.remove("hidden");
            return;
        }
        
        alert("Form submitted successfully!");
        form.reset(); // Optional: Reset the form after submission
    });
});
