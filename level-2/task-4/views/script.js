document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for now

    // Perform custom form validation
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate password strength
    const passwordStrength = document.getElementById('password-strength');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passwordRegex.test(password)) {
        console.log(password)
        passwordStrength.textContent = 'Password strength: Strong';
        passwordStrength.style.color = 'green';
    } else {
        passwordStrength.textContent = 'Password strength: Weak (Must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters)';
        passwordStrength.style.color = 'red';
    }

    // Validate password match
    const passwordMatch = document.getElementById('password-match');
    if (password === confirmPassword) {
        passwordMatch.textContent = 'Passwords match';
        passwordMatch.style.color = 'green';
    } else {
        passwordMatch.textContent = 'Passwords do not match';
        passwordMatch.style.color = 'red';
    }

    // If all validations pass, proceed with form submission
    if (username && email && password && confirmPassword && password === confirmPassword) {
        // Perform form submission (e.g., send data to server or navigate to another page)
        console.log('Form submitted successfully');
        // For now, let's just reset the form
        event.target.reset();
    }
});
