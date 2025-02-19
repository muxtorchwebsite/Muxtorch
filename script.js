document.addEventListener("DOMContentLoaded", function () {
    // Terms and Conditions
    const startButton = document.getElementById("start-btn");
    const termsCheckbox = document.getElementById("terms-checkbox");

    if (startButton && termsCheckbox) {
        startButton.addEventListener("click", function () {
            if (termsCheckbox.checked) {
                window.location.href = "services.html"; // Redirect to services page
            } else {
                alert("Please accept the Terms and Conditions to proceed.");
            }
        });
    }

    // GPS Location Fetch
    const locationField = document.getElementById("location");
    const fetchLocationBtn = document.getElementById("fetch-location");

    if (fetchLocationBtn && locationField) {
        fetchLocationBtn.addEventListener("click", function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function (position) {
                        const lat = position.coords.latitude;
                        const long = position.coords.longitude;
                        locationField.value = `Lat: ${lat}, Long: ${long}`;
                    },
                    function () {
                        alert("Unable to retrieve location.");
                    }
                );
            } else {
                alert("Geolocation is not supported by your browser.");
            }
        });
    }

    // OTP Verification Simulation
    const otpButton = document.getElementById("send-otp");
    const otpInput = document.getElementById("otp-code");
    const verifyOtpBtn = document.getElementById("verify-otp");

    if (otpButton && otpInput && verifyOtpBtn) {
        otpButton.addEventListener("click", function () {
            alert("An OTP has been sent to your email/phone. Enter it below.");
        });

        verifyOtpBtn.addEventListener("click", function () {
            if (otpInput.value === "123456") { // Dummy OTP
                alert("OTP verified successfully!");
                window.location.href = "order.html"; // Redirect to order placement page
            } else {
                alert("Invalid OTP. Please try again.");
            }
        });
    }

    // Order Confirmation
    const orderBtn = document.getElementById("confirm-order");

    if (orderBtn) {
        orderBtn.addEventListener("click", function () {
            alert("Your order has been placed successfully!");
            window.location.href = "contact.html"; // Redirect to contact page
        });
    }
});