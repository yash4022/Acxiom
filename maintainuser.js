document.addEventListener('DOMContentLoaded', () => {
    const membershipButtons = document.querySelector('.menu:first-child .actions');
    const userManagementButtons = document.querySelector('.menu:last-child .actions');

    membershipButtons.addEventListener('click', (event) => {
        if (event.target.textContent === 'Add') {
            alert('Adding Membership...');
        } else if (event.target.textContent === 'Update') {
            alert('Updating Membership...');
        }
    });

    userManagementButtons.addEventListener('click', (event) => {
        if (event.target.textContent === 'Add') {
            alert('Adding User...');
        } else if (event.target.textContent === 'Update') {
            alert('Updating User...');
        }
    });

    // Handle Home and Logout button actions
    document.querySelector('header button:first-child').addEventListener('click', () => alert('Navigating to Home...'));
    document.querySelector('header button:last-child').addEventListener('click', () => alert('Logging Out...'));
});
