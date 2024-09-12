// Array to hold cart items
let cart = [];

document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: "Product 1", price: "$20" },
        { name: "Product 2", price: "$30" },
        { name: "Product 3", price: "$40" },
        { name: "Product 4", price: "$50" }
    ];

    // Dynamically update the product information
    const productElements = document.querySelectorAll('.product');
    products.forEach((product, index) => {
        productElements[index].querySelector('h3').innerText = product.name;
        productElements[index].querySelector('p').innerText = product.price;
    });

    // Add event listeners for "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.product .button');
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            cart.push(products[index]);
            alert(products[index].name + " has been added to your cart.");
        });
    });
});

// Log out functionality
document.getElementById("logoutBtn").addEventListener("click", function() {
    alert("You have been logged out!");
    window.location.href = "login.html";
});

// Home button functionality
document.getElementById("homeBtn").addEventListener("click", function() {
    window.location.href = "home.html";
});