document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;

        if (name && email && password) {
            alert(`User registered successfully:\nName: ${name}\nEmail: ${email}`);
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Handle Chart and Back button actions
    document.querySelector('header button:first-child').addEventListener('click', () => alert('Navigating to Chart...'));
    document.querySelector('header button:last-child').addEventListener('click', () => alert('Going Back...'));
});
