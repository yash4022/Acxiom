// product-status.js

document.querySelectorAll(".status-grid .update").forEach((updateBtn, index) => {
    updateBtn.addEventListener("click", () => {
        // You can implement update functionality here
        alert(Update product for item ${index + 1});
    });
});

document.querySelectorAll(".status-grid .delete").forEach((deleteBtn, index) => {
    deleteBtn.addEventListener("click", function() {
        const confirmDelete = confirm(Are you sure you want to delete item ${index + 1}?);
        if (confirmDelete) {
            this.closest(".status-grid").remove(); // Remove the item
        }
    });
});