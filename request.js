// Example of click event for buttons
document.querySelectorAll('.btn, .item-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert(${button.textContent} clicked!);
    });
});