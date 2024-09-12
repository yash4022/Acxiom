// cart.js

document.querySelector(".remove").addEventListener("click", function() {
    this.closest(".cart-item").remove(); // Remove the item
    updateTotal(); // Update the grand total
});

document.querySelector(".checkout-btn").addEventListener("click", () => {
    window.location.href = "checkout.html"; // Redirect to checkout page
});

document.querySelector(".delete-all").addEventListener("click", function() {
    document.querySelectorAll(".cart-item").forEach(item => item.remove()); // Remove all items
    updateTotal(); // Update the grand total
});

// Function to update the total price
function updateTotal() {
    let total = 0;
    document.querySelectorAll(".cart-item").forEach(item => {
        const price = parseInt(item.querySelector(".cart-detail:nth-child(5)").textContent);
        total += price;
    });
    document.querySelector(".grand-total").textContent = Grand Total: ${total}/-;
}