document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    clearErrors();
    
    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var terms = document.getElementById('terms').checked;
    
    // Validate username
    if (username.trim() === '') {
      showError('username', 'Username cannot be blank.');
    } else if (username.length < 4) {
      showError('username', 'Username must be at least 4 characters long.');
    } else if (!hasUniqueCharacters(username)) {
      showError('username', 'Username must contain at least 2 unique characters.');
    } else if (!isValidUsername(username)) {
      showError('username', 'Username cannot contain special characters or whitespace.');
    }
    
    //Validate email
     if (!isValidEmail(email)) {
      showError('email', 'Invalid email address.');
    } else if (email.toLowerCase().endsWith('@example.com')) {
      showError('email', 'Email cannot be from the domain "example.com".');
    }