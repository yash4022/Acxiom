// Example of click event for dashboard buttons
document.querySelectorAll('.dashboard-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert(${button.textContent} clicked!);
    });
});