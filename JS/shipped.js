const orderId = Math.floor(Math.random() * 1000000);
localStorage.setItem('lastOrderId', orderId);

document.addEventListener('DOMContentLoaded', function() {
    const orderId = localStorage.getItem('lastOrderId');
    if (orderId) {
        document.getElementById('order-id').textContent = `Your Order ID: #${orderId}`;
    }
});


