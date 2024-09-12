document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // Simple login validation (static example)
    if (userId === 'Vendor' && password === 'Vendor') {
        alert('Login successful!');
        // Redirect to another page or perform further actions
    } else {
        alert('Invalid credentials, please try again.');
    }
});

document.getElementById('cancelButton').addEventListener('click', function () {
    document.getElementById('loginForm').reset();
});

document.getElementById('chartButton').addEventListener('click', function () {
    alert('Chart button clicked!');
    // Implement the functionality of the CHART button
});

document.getElementById('backButton').addEventListener('click', function () {
    alert('Back button clicked!');
    // Implement the functionality of the BACK button
    
});
// back-button.js

// Select the back button
const backButton = document.getElementById("backButton");

// Add an event listener to the button
backButton.addEventListener("click", function() {
    // Use the history object to go back to the previous page
    window.history.back();
});
