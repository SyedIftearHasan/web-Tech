document.getElementById("regForm").addEventListener("submit", function(event) {
            event.preventDefault();
            let name = document.getElementById("fname").value.trim();
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value;
            let confirmPass = document.getElementById("confirm-password").value;
            let gender = document.querySelector('input[name="gender"]:checked');
            let dob = document.getElementById("dob").value;
            let country = document.getElementById("country").value;
            let terms = document.getElementById("terms").checked;

            if (name === "") {
                alert("Full Name is required.");
                return;
            }

            if (email === "" || !email.includes("@") || !email.includes(".")) {
                alert("Please enter a valid email address.");
                return;
            }

            if (password.length < 8) {
                alert("Password must be at least 8 characters.");
                return;
            }

            if (password !== confirmPass) {
                alert("Passwords do not match.");
                return;
            }

            if (!gender) {
                alert("Please select your gender.");
                return;
            }

            if (dob === "") {
                alert("Please select your date of birth.");
                return;
            }

            if (country === "" || country === "Select") {
                alert("Please select your country.");
                return;
            }

            if (!terms) {
                alert("You must agree to the terms & conditions.");
                return;
            }
            alert("Form submitted successfully!");
            this.submit();
        });