document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu-buttons button');

    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`${button.textContent} clicked`);
        });
    });

    document.querySelector('.logout-button').addEventListener('click', () => {
        alert('Logging Out...');
    });

    const dropdown = document.querySelector('.dropdown select');
    dropdown.addEventListener('change', () => {
        alert(`Selected Category: ${dropdown.value}`);
    });
});
