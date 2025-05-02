    document.addEventListener('DOMContentLoaded', function() {
        // DOM Elements
        const wishlistItemsContainer = document.getElementById('wishlistItemsContainer');
        const emptyWishlistMessage = document.getElementById('emptyWishlistMessage');
        const wishlistCounter = document.getElementById('wishlistCounter');
        const cartCount = document.getElementById('cartCount');
        const wishlistCount = document.getElementById('wishlistCount');
    
        // Load data from localStorage
        let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
        // Update all counters
        function updateCounters() {
            cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            wishlistCounter.textContent = wishlistItems.length;
            wishlistCount.textContent = wishlistItems.length;
            cartCount.textContent = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
        }
    
        // Render wishlist items
        function renderWishlistItems() {
            wishlistItemsContainer.innerHTML = '';
            
            if (wishlistItems.length === 0) {
                emptyWishlistMessage.style.display = 'block';
            } else {
                emptyWishlistMessage.style.display = 'none';
                
                wishlistItems.forEach((item) => {
                    const discountAvailable = wishlistItems.length > 1;
                    const isInCart = cartItems.some(cartItem => cartItem.id === item.id);
                    
                    const wishlistItem = document.createElement('div');
                    wishlistItem.className = 'wishlist-item';
                    wishlistItem.innerHTML = `
                        <img src="${item.image}" alt="${item.title}" class="wishlist-item-img">
                        ${item.onSale ? '<span class="wishlist-item-badge">SALE</span>' : ''}
                        <div class="wishlist-item-content">
                            <h3 class="wishlist-item-title">${item.title}</h3>
                            <div class="wishlist-item-price">
                                <span class="current-price">$${item.price.toFixed(2)}</span>
                            </div>
                            ${discountAvailable ? '<p class="discount-notice"><i class="fas fa-tag me-1"></i> Eligible for 20% off on another item</p>' : ''}
                            <div class="wishlist-item-actions">
                                <button class="btn-add-to-cart" data-id="${item.id}">
                                    ${isInCart ? '<i class="fas fa-check"></i> In Cart' : 'Add to Cart'}
                                </button>
                                <button class="btn-remove" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                    `;
                    
                    wishlistItemsContainer.appendChild(wishlistItem);
                });
            }
            
            updateCounters();
        }
    
        // Add to cart function
        function addToCart(productId) {
            const product = wishlistItems.find(item => item.id === productId);
            
            if (product) {
                cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                const existingItem = cartItems.find(item => item.id === productId);
                
                if (existingItem) {
                    existingItem.quantity = (existingItem.quantity || 1) + 1;
                } else {
                    const productToAdd = {...product, quantity: 1};
                    cartItems.push(productToAdd);
                }
                
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                
                // Update the specific button that was clicked
                const addButton = document.querySelector(`.btn-add-to-cart[data-id="${productId}"]`);
                if (addButton) {
                    addButton.innerHTML = '<i class="fas fa-check"></i> In Cart';
                    addButton.classList.add('in-cart');
                }
                
                updateCounters();
                
                // Show success message
                alert(`${product.title} has been added to your cart!`);
                
                // Special offer logic
                if (wishlistItems.length > 1) {
                    const otherItems = wishlistItems.filter(item => item.id !== productId);
                    const discountPrice = (otherItems[0].price * 0.8).toFixed(2);
                    alert(`SPECIAL OFFER: Get ${otherItems[0].title} for $${discountPrice} (20% off) when you buy both!`);
                }
            }
        }
    
        // Remove from wishlist function
        function removeFromWishlist(productId) {
            wishlistItems = wishlistItems.filter(item => item.id !== productId);
            localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
            renderWishlistItems();
        }
    
        // Event delegation for buttons
        wishlistItemsContainer.addEventListener('click', function(e) {
            if (e.target.classList.contains('btn-add-to-cart') || e.target.closest('.btn-add-to-cart')) {
                const button = e.target.classList.contains('btn-add-to-cart') ? e.target : e.target.closest('.btn-add-to-cart');
                const productId = parseInt(button.dataset.id);
                addToCart(productId);
            }
            
            if (e.target.classList.contains('btn-remove') || e.target.closest('.btn-remove')) {
                const productId = parseInt(e.target.closest('.btn-remove').dataset.id);
                removeFromWishlist(productId);
            }
        });
    
        // Initial render
        renderWishlistItems();
    });