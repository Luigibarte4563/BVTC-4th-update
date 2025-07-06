document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById("date");
    const timeSelect = document.getElementById("time");
    const warningText = document.getElementById("date-warning");

    const weekdayTimes = [
        "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
    ];

    const saturdayTimes = [
        "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"
    ];

    // Set minimum date to today
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const minDate = `${yyyy}-${mm}-${dd}`;
    dateInput.setAttribute("min", minDate);

    // Date change handler
    dateInput.addEventListener("change", function() {
        const selectedDate = new Date(this.value);
        const day = selectedDate.getDay();

        if (day === 0) { // Sunday
            this.value = "";
            timeSelect.innerHTML = "";
            warningText.classList.remove("hidden");
            return;
        }

        warningText.classList.add("hidden");
        timeSelect.innerHTML = '<option value="">-- Choose a time slot --</option>';

        const label = document.createElement("option");
        label.disabled = true;
        label.textContent = (day === 6) ? "Saturday:" : "Weekday:";
        timeSelect.appendChild(label);

        const times = (day === 6) ? saturdayTimes : weekdayTimes;
        times.forEach(time => {
            const opt = document.createElement("option");
            opt.textContent = time;
            opt.value = time;
            timeSelect.appendChild(opt);
        });
    });

    // WhatsApp number validation
    const whatsappInput = document.getElementById("whatsapp");
    const whatsappError = document.getElementById("whatsapp-error");

    whatsappInput.addEventListener("input", function() {
        const input = this.value;
        const isValid = /^\+?\d*$/.test(input); // allows "+" at start, digits only

        if (!isValid) {
            this.classList.add("border-red-500");
            whatsappError.classList.remove("hidden");
        } else {
            this.classList.remove("border-red-500");
            whatsappError.classList.add("hidden");
        }
    });

    // Form submission transition
    document.getElementById("inquiry-form").addEventListener("submit", function(e) {
        e.preventDefault();
        this.reset();
        document.getElementById("form-section").classList.add("hidden");
        document.getElementById("booking-section").classList.remove("hidden");
    });
});