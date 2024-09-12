// checkout.js

document.querySelector(".order-btn").addEventListener("click", function() {
    const name = document.querySelector("input[placeholder='Your Name']").value;
    const email = document.querySelector("input[placeholder='Your E-mail']").value;
    const address = document.querySelector("input[placeholder='Your Address']").value;

    if (!name || !email || !address) {
        alert("Please fill in all required fields.");
    } else {
        // Process the order
        alert("Order placed successfully!");
        window.location.href = "order-confirmation.html"; // Redirect after successful order
    }
});