document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    clearErrors();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (!validateEmail(email)) {
        showError("emailError", "Please enter a valid email address");
        return;
    }

    if (!password) {
        showError("passwordError", "Please enter your password");
        return;
    }

    authenticateUser(email, password);
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

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function authenticateUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email);
    if (!user) {
        showError("emailError", "No account found with this email");
        return;
    }
    if (user.password !== password) {
        showError("passwordError", "Incorrect password");
        return;
    }

    sessionStorage.setItem('currentUser', JSON.stringify({
        email: user.email,
        name: user.name,
        loggedInAt: new Date().toISOString()
    }));

    window.location.href = "products.html";
}

