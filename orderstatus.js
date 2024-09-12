// Example: Fetch and display order status details
document.addEventListener("DOMContentLoaded", function() {
    const userName = "John Doe";
    const userEmail = "john@example.com";
    const userAddress = "123 Main St, Springfield";
    const orderStatus = "Shipped";

    document.querySelector('.details-grid .button:nth-child(1)').innerText = userName;
    document.querySelector('.details-grid .button:nth-child(2)').innerText = userEmail;
    document.querySelector('.details-grid .button:nth-child(3)').innerText = userAddress;
    document.querySelector('.details-grid .button:nth-child(4)').innerText = orderStatus;
});

// Log out functionality
document.getElementById("logoutBtn").addEventListener("click", function() {
    alert("You have been logged out!");
    // Redirect to login page
    window.location.href = "login.html";
});

// Home button functionality
document.getElementById("homeBtn").addEventListener("click", function() {
    window.location.href = "home.html";
});