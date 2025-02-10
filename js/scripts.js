document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function (event) {
            console.log('Registration form submitted');
            alert('Registration form submitted');
            if (!validateRegistrationForm()) {
                event.preventDefault();
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            console.log('Login form submitted');
            alert('Login form submitted');
            if (!validateLoginForm()) {
                event.preventDefault();
            }
        });
    }
});

function validateRegistrationForm() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    console.log('Validating registration form', { username, password, confirmPassword });
    alert('Validating registration form');

    if (username === '') {
        alert('Username is required.');
        return false;
    }

    if (password === '') {
        alert('Password is required.');
        return false;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    // Add more validation rules as needed

    return true;
}

function validateLoginForm() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    console.log('Validating login form', { username, password });
    alert('Validating login form');

    if (username === '') {
        alert('Username is required.');
        return false;
    }

    if (password === '') {
        alert('Password is required.');
        return false;
    }

    // Add more validation rules as needed

    return true;
}
