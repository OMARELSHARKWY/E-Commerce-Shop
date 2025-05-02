// Load products from localStorage and display them
function getProducts() {
    let products = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartItemsContainer = document.querySelector(".cart-items");
    
    if (!cartItemsContainer) {
        console.error("Cart items container not found");
        return;
    }
    
    cartItemsContainer.innerHTML = ''; // Clear existing items
    
    if (products.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        calculateTotal();
        updateCartCount();
        return;
    }
    
    products.forEach(product => {
        let cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.dataset.productId = product.id;
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="cart-item-image">
            <div class="cart-item-details">
                <h3 class="cart-item-title">${product.title}</h3>
                <p class="cart-item-category">${product.category}</p>
                <p class="cart-item-price">${product.price}</p>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(this, -1, ${product.id})">-</button>
                    <input type="number" value="${product.quantity || 1}" min="1" class="quantity-input">
                    <button class="quantity-btn" onclick="updateQuantity(this, 1, ${product.id})">+</button>
                </div>
                <button class="btn btn-danger mt-3" onclick="removeItem(this, ${product.id})">Remove</button>
            </div>`;
        cartItemsContainer.appendChild(cartItem);
    });

    calculateTotal();
    updateCartCount();
}


// Remove item from both DOM and localStorage
function removeItem(element, productId) {
    const item = element.closest('.cart-item');
    if (item) item.remove();
    
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems = cartItems.filter(item => item.id !== productId); 
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    
    calculateTotal();
    updateCartCount();
}

// Update quantity in both DOM and localStorage
function updateQuantity(button, change, productId) {
    const input = button.parentElement.querySelector('.quantity-input');
    if (!input) return;
    
    let value = parseInt(input.value) + change;
    if (value < 1) value = 1;
    input.value = value;
    
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const productIndex = cartItems.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
        cartItems[productIndex].quantity = value;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    
    calculateTotal();
}

// Calculate total price
function calculateTotal() {
    let subtotal = 0;
    const items = document.querySelectorAll('.cart-item');
    const itemCount = items.length;
    
    items.forEach(item => {
        const priceElement = item.querySelector('.cart-item-price');
        const quantityInput = item.querySelector('.quantity-input');
        
        if (priceElement && quantityInput) {
            const priceText = priceElement.textContent;
            const price = parseFloat(priceText.replace(/[^\d.-]/g, '')); // Better price parsing
            const quantity = parseInt(quantityInput.value) || 1;
            subtotal += price * quantity;
        }
    });
    
    const tax = subtotal * 0.07;
    const total = subtotal + tax;
    
    // Update summary
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    const itemCountElement = document.getElementById('itemCount');
    
    if (subtotalElement) subtotalElement.textContent = '$' + subtotal.toFixed(2);
    if (taxElement) taxElement.textContent = '$' + tax.toFixed(2);
    if (totalElement) totalElement.textContent = '$' + total.toFixed(2);
    if (itemCountElement) {
        itemCountElement.textContent = `${itemCount} ${itemCount === 1 ? 'item' : 'items'}`;
    }
}

// Update cart count in navbar
function updateCartCount() {
    const itemCount = document.querySelectorAll('.cart-item').length;
    const cartCountElements = document.querySelectorAll('.cart-count');
    
    cartCountElements.forEach(el => {
        el.textContent = itemCount;
    });
    
    localStorage.setItem("cartItemsCount", itemCount);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    getProducts();
    
    const checkout = document.querySelector('.checkout-btn');
    if (checkout) {
        checkout.addEventListener('click', function(e) {
            e.preventDefault();
            const items = document.querySelectorAll('.cart-item');
            if (items.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            if (confirm('Proceed to checkout?')) {
                window.location.href = 'shipped.html';
            }
        });
    }
});

