<!DOCTYPE html><html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Muxtorch UI</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            background: linear-gradient(to right, #0f172a, #1e293b);
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
        }
        .container {
            width: 90%;
            max-width: 400px;
            margin: auto;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);
            background: #1e293b;
        }
        .card {
            padding: 20px;
            background: #0f172a;
            border-radius: 10px;
            margin-bottom: 20px;
        }
        .start-btn, .service-btn {
            background: linear-gradient(to right, #ff6b6b, #ff8e53);
            color: white;
            border: none;
            padding: 10px;
            border-radius: 5px;
            width: 100%;
            cursor: pointer;
            font-size: 16px;
            margin: 10px 0;
            transition: transform 0.2s;
        }
        .start-btn:hover, .service-btn:hover {
            transform: scale(1.05);
        }
        input {
            width: 100%;
            padding: 8px;
            margin: 8px 0;
            border: none;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>MUXTORCH</h1>
            <p>Express & Delivery - Single Parcels</p>
        </header><section class="card">
        <div class="app-screen">
            <h2>MUXTORCH</h2>
            <button class="start-btn" onclick="startApp()">START</button>
            <form id="registration-form">
                <label>Name</label>
                <input type="text" id="name" placeholder="Enter Name" required>
                <label>Phone Number</label>
                <input type="tel" id="phone" placeholder="Enter Phone" required>
                <label>Location</label>
                <input type="text" id="location" placeholder="Enter Location" required>
                <label>Email</label>
                <input type="email" id="email" placeholder="Enter Email" required>
                <label>Photo</label>
                <input type="file" id="photo">
                <label>National ID</label>
                <input type="text" id="national-id" placeholder="Enter ID" required>
                <button type="submit" class="start-btn">Register</button>
            </form>
        </div>
    </section>
    
    <section class="services">
        <h2>Services</h2>
        <button class="service-btn" onclick="selectService('Express Delivery')">Express Delivery</button>
        <button class="service-btn" onclick="selectService('Courier Delivery')">Courier Delivery</button>
        <button class="service-btn" onclick="selectService('2-Hour Delivery')">2-Hour Delivery</button>
    </section>
</div>

<script>
    function startApp() {
        alert('Welcome to Muxtorch!');
    }

    function selectService(service) {
        alert('You selected ' + service);
    }

    document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault();
        let name = document.getElementById('name').value;
        let phone = document.getElementById('phone').value;
        let location = document.getElementById('location').value;
        let email = document.getElementById('email').value;
        let nationalId = document.getElementById('national-id').value;
        
        if(name && phone && location && email && nationalId) {
            alert('Registration Successful!');
        } else {
            alert('Please fill in all required fields.');
        }
    });
</script>

</body>
</html>document.addEventListener("DOMContentLoaded", function () { const orderForm = document.getElementById("orderForm");

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


