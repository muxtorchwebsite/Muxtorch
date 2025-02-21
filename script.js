document.addEventListener("DOMContentLoaded", function () { const orderForm = document.getElementById("orderForm");

if (orderForm) {
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Order Created Successfully!");
        window.location.href = "contact.html";
    });
}

const locationInput = document.getElementById("senderLocation");
if (locationInput) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                locationInput.value = `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`;
            },
            function (error) {
                console.warn("Error getting location: ", error.message);
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

});


