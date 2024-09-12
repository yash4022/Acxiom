document.addEventListener("DOMContentLoaded", function() {
    const userDetails = {
        name: "John Doe",
        number: "1234567890",
        email: "john@example.com",
        paymentMethod: "Credit Card",
        address: "123 Main St, Springfield",
        state: "Illinois",
        city: "Springfield",
        pinCode: "62704",
        totalAmount: "$100"
    };

    // Update the user details in the pop-up
    document.querySelector('.details-grid .button:nth-child(1)').innerText = userDetails.name;
    document.querySelector('.details-grid .button:nth-child(2)').innerText = userDetails.number;
    document.querySelector('.details-grid .button:nth-child(3)').innerText = userDetails.email;
    document.querySelector('.details-grid .button:nth-child(4)').innerText = userDetails.paymentMethod;
    document.querySelector('.details-grid .button:nth-child(5)').innerText = userDetails.address;
    document.querySelector('.details-grid .button:nth-child(6)').innerText = userDetails.state;
    document.querySelector('.details-grid .button:nth-child(7)').innerText = userDetails.city;
    document.querySelector('.details-grid .button:nth-child(8)').innerText = userDetails.pinCode;
    document.querySelector('h3').innerText = Total Amount: ${userDetails.totalAmount};

    // Continue shopping button functionality
    document.querySelector('.details-grid + .button').addEventListener("click", function() {
        alert("Continue shopping clicked");
        window.location.href = "products.html";
    });
});