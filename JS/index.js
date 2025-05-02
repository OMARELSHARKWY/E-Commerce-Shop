
function validateName(name) {
    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    
    if (!name) {
        showError("nameError", "Full name is required");
        return false;
    }
    if (name.length < 3) {
        showError("nameError", "Name must be at least 3 characters");
        return false;
    }
    if (name.length > 50) {
        showError("nameError", "Name cannot exceed 50 characters");
        return false;
    }
    if (!nameRegex.test(name)) {
        showError("nameError", "Invalid name format");
        return false;
    }
    return true;
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!email) {
        showError("emailError", "Email is required");
        return false;
    }
    if (!emailRegex.test(email)) {
        showError("emailError", "Please enter a valid email address");
        return false;
    }
    return true;
}


function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    
    if (!password) {
        showError("passwordError", "Password is required");
        return false;
    }
    if (password.length < 8) {
        showError("passwordError", "Password must be at least 8 characters");
        return false;
    }
    if (!passwordRegex.test(password)) {
        showError("passwordError", "Password must contain at least one uppercase letter, one lowercase letter, and one number");
        return false;
    }
    return true;
}

function validateConfirmPassword(password, confirmPassword) {
    if (!confirmPassword) {
        showError("confirmError", "Please confirm your password");
        return false;
    }
    if (password !== confirmPassword) {
        showError("confirmError", "Passwords do not match");
        return false;
    }
    return true;
}

function registerUser(name, email, password) {
    const userData = {
        name: name,
        email: email,
        password: password,
        registeredAt: new Date().toISOString()
    };

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some(user => user.email === email);
    
    if (userExists) {
        showError("emailError", "This email is already registered Please login Direactly");
        return;
    }

    existingUsers.push(userData);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('Registration successful! Redirecting to login page...');
    window.location.href = 'login.html';
}

document.getElementById("email").addEventListener("input", function() {
    // Clear localStorage when the email input changes
    localStorage.clear();
    console.log("localStorage cleared due to email input change");
});




// Add this near your other event listeners (e.g., where you set up the form submission)
document.getElementById("email").addEventListener("input", function() {
    localStorage.clear();
    console.log("localStorage cleared due to email input change");
});

// Rest of your existing code...
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    clearErrors();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmValid = validateConfirmPassword(password, confirmPassword);

    if (isNameValid && isEmailValid && isPasswordValid && isConfirmValid) {
        registerUser(name, email, password);
    }
});

function clearErrors() {
    document.querySelectorAll('.error').forEach(el => {
        el.textContent = '';
        el.style.display = 'none';
    });
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

