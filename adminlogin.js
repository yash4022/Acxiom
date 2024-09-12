document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // Simple login validation (static example)
    if (userId === 'Admin' && password === 'Admin') {
        alert('Login successful!');
        // Redirect to another page or perform further actions
    } else {
        alert('Invalid credentials, please try again.');
    }
});

document.getElementById('cancelButton').addEventListener('click', function () {
    document.getElementById('loginForm').reset();
});
