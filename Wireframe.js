

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");


    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        

  
        const storedUsername = "admin";  
        const storedPassword = "admin";  

        if (username === storedUsername && password === storedPassword) {
            alert("Login successful!");
            window.location.href = "./admin/Welcome.html"; 
        } else {
            alert("Invalid username or password.");
        }
    });
});



// Wireframe.js

document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.getElementById("signUpForm");

    // Event listener for form submission
    signUpForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("ConfirmPassword").value;

        // Basic password match validation
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // Save user data (simulate by storing in localStorage)
        const user = {
            username: username,
            email: email,
            password: password,  // Note: In real applications, you should never store passwords like this
        };

        localStorage.setItem('user', JSON.stringify(user));

        alert("Sign-up successful!");

        // Redirect or simulate further actions
        window.location.href = "../index.html";  // Redirect to welcome page after sign-up
    });
});


