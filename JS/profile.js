document.addEventListener('DOMContentLoaded', function () {

    const userNameElement = document.querySelector('#user-name');
    const profileusername = document.querySelector('#profile-username');
    const profileemail = document.querySelector('#profile-email');
    const orderscount = document.querySelector('#orders-count');
    let cartcount = document.querySelector('.cart-count');
    let fullname = document.getElementById('full-name');
    let email = document.getElementById('email');
    const cart = document.querySelector('cart-icon');


    const sessionUser = JSON.parse(sessionStorage.getItem('currentUser')) || null;
    for (const key in sessionUser) {
        if (key === 'name') {
            userNameElement.innerText = sessionUser[key];
            profileusername.innerText = sessionUser[key];
            fullname.value = sessionUser[key]
        }
        if (key === 'email') {
            profileemail.innerText = sessionUser[key]
            email.value = sessionUser[key]
        }
    }

    const localUser = JSON.parse(localStorage.getItem('cartItems')) || null;
    const localUserlen = localUser.length;
    cartcount.innerText = localUserlen;
    orderscount.innerText = localUserlen;


});


passwordForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate current password
    if (currentPassword !== currentUser.password) {
        alert('Current password is incorrect');
        return;
    }

    // Validate new password
    if (newPassword !== confirmPassword) {
        alert('New passwords do not match');
        return;
    }

    // Update password
    const userIndex = users.findIndex(user => user.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Password updated successfully!');
        passwordForm.reset();
    }
});



