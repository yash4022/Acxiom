document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;
        const category = form.querySelector('select').value;

        if (name && email && password && category) {
            alert(`Admin registered successfully:\nName: ${name}\nEmail: ${email}\nCategory: ${category}`);
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
