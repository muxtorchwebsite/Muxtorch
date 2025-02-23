// script.js - General functionality for Muxtorch website

document.addEventListener("DOMContentLoaded", function () { // Handle registration form submission const registrationForm = document.getElementById("registration-form"); if (registrationForm) { registrationForm.addEventListener("submit", function (event) { event.preventDefault(); let name = document.getElementById("name").value; let phone = document.getElementById("phone").value; let location = document.getElementById("location").value; let email = document.getElementById("email").value; let nationalId = document.getElementById("national-id").value;

if (name && phone && location && email && nationalId) {
            alert("Registration Successful!");
        } else {
            alert("Please fill in all required fields.");
        }
    });
}

// Handle order form submission
const orderForm = document.getElementById("orderForm");
if (orderForm) {
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Order Created Successfully!");
        window.location.href = "contact.html";
    });
}

// Fetch and display user location
const locationInput = document.getElementById("senderLocation");
if (locationInput && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            locationInput.value = `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`;
        },
        function (error) {
            console.warn("Error getting location: ", error.message);
        }
    );
}

// Load FAQ content dynamically
const faqContainer = document.getElementById("faq-container");
if (faqContainer) {
    fetch("faq.html")
        .then(response => response.text())
        .then(data => {
            faqContainer.innerHTML = data;
        })
        .catch(error => console.error("Error loading FAQ: ", error));
}

});


