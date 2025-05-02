const products = [
    {
        id: 1,
        title: "Apple iPhone 14 Pro",
        category: "electronics",
        price: 999.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "The latest iPhone with A16 Bionic chip, 48MP camera, and Dynamic Island."
    },
    {
        id: 2,
        title: "MacBook Pro 14-inch M2",
        category: "electronics",
        price: 1999.99,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "Powerful M2 Pro chip with Liquid Retina XDR display."
    },
    {
        id: 3,
        title: "Nike Air Jordan 1 Retro",
        category: "clothing",
        price: 179.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "Classic basketball shoes with original color blocking."
    },
    {
        id: 4,
        title: "Adidas Ultraboost 22",
        category: "clothing",
        price: 149.99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "Responsive running shoes with Boost cushioning technology."
    },
    {
        id: 5,
        title: "Levi's 501 Original Fit Jeans",
        category: "clothing",
        price: 69.99,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "Iconic straight leg jeans with button fly."
    },
    {
        id: 6,
        title: "North Face ThermoBall Eco Jacket",
        category: "clothing",
        price: 199.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "Water-resistant synthetic insulation jacket for cold weather."
    },
    {
        id: 7,
        title: "Dyson V15 Detect Vacuum",
        category: "home",
        price: 699.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "Laser dust detection and 60-day battery life."
    },
    {
        id: 8,
        title: "Instant Pot Duo 7-in-1",
        category: "home",
        price: 99.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "Pressure cooker, slow cooker, rice cooker, steamer and more."
    },
    {
        id: 9,
        title: "Nespresso Vertuo Next",
        category: "home",
        price: 179.99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "Premium coffee machine with centrifusion technology."
    },
    {
        id: 10,
        title: "Casper Original Mattress",
        category: "home",
        price: 895.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "Memory foam mattress with zoned support."
    },
    {
        id: 11,
        title: "Fossil Gen 6 Smartwatch",
        category: "accessories",
        price: 299.99,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "Wear OS smartwatch with heart rate and SpO2 tracking."
    },
    {
        id: 12,
        title: "Ray-Ban Aviator Classic",
        category: "accessories",
        price: 153.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "Original G-15 lens aviator sunglasses."
    },
    {
        id: 13,
        title: "Herschel Little America Backpack",
        category: "accessories",
        price: 89.99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "Signature backpack with magnetic strap closures."
    },
    {
        id: 14,
        title: "Bose QuietComfort Earbuds II",
        category: "electronics",
        price: 279.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "World-class noise cancellation in true wireless earbuds."
    },
    {
        id: 15,
        title: "Calvin Klein Cotton Briefs (3-Pack)",
        category: "clothing",
        price: 39.99,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "Soft cotton underwear with logo waistband."
    },
    {
        id: 16,
        title: "KitchenAid Stand Mixer",
        category: "home",
        price: 429.99,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "5-quart tilt-head stand mixer with 10 speeds."
    },
    {
        id: 17,
        title: "Tumi Alpha 3 Briefcase",
        category: "accessories",
        price: 595.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "Durable ballistic nylon briefcase with laptop compartment."
    }
];



let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const userNameElement = document.querySelector('#user-name');
const cartCount = document.querySelector('.cart-count');
const userDropdown = document.querySelector('#user-dropdown');
const logoutBtn = document.querySelector('#logout-btn');
const cartitembtn = document.querySelector('#shopping-cart-icon');


logoutBtn.addEventListener('click', function () {
    window.location.href = 'login.html';
});

cartitembtn.addEventListener('click', function () {
    window.location.href = 'shopingCart.html';
});

const currentUser = JSON.parse(sessionStorage.getItem('currentUser')) || null;

for (const key in currentUser) {
    if (key === 'name') {
        userNameElement.innerText = currentUser[key];
    }
}


function displayProducts(productsToDisplay) {
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = '';
    
    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                </div>
                <div class="product-rating">
                    ${generateStarRating(product.rating)}
                </div>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="wishlist-btn" data-id="${product.id}"><i class="far fa-heart"></i></button>
                </div>
            </div>
        `;
        
        productCard.addEventListener('click', (e) => {
            if (!e.target.closest('.product-actions')) {
                showProductDetails(product.id);
            }
        });
        
        productsGrid.appendChild(productCard);
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCartHandler);
    });
    document.querySelectorAll('.wishlist-btn').forEach(button => {
        button.addEventListener('click', addToWishlistHandler);
    });
    
}


function showProductDetails(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    
    if (product) {
        sessionStorage.setItem('currentProduct', JSON.stringify(product));
        window.location.href = 'productinfo.html';
    }
}


// slider start
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentIndex = 0;
    let slideInterval;

    function initSlider() {
        updateSlider();
        startAutoSlide();
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
        resetAutoSlide();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
        resetAutoSlide();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
        resetAutoSlide();
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    initSlider();
});

// slider End


function generateStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }

    return stars;
}




function addToCartHandler(event) {
    const productId = parseInt(event.currentTarget.dataset.id);
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    // Get current cart items or initialize empty array
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Check if product already exists in cart
    const existingItemIndex = cartItems.findIndex(item => item.id === productId);
    
    if (existingItemIndex >= 0) {
        // Product exists - increment quantity
        cartItems[existingItemIndex].quantity = (cartItems[existingItemIndex].quantity || 1) + 1;
    } else {
        // Product doesn't exist - add with quantity 1
        const newItem = {...product, quantity: 1};
        cartItems.push(newItem);
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Update cart count (sum of all quantities)
    const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
    cartCount.textContent = totalItems;
    
    // Show feedback to user
    event.currentTarget.innerHTML = '<i class="fas fa-check"></i> Added';
    setTimeout(() => {
        event.currentTarget.innerHTML = 'Add to Cart';
    }, 1000);
}



function addToWishlistHandler(event) {
    event.stopPropagation(); // Prevent triggering product detail view
    const productId = parseInt(event.currentTarget.dataset.id);
    const product = products.find(p => p.id === productId);

    if (!product) return;

    const wishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];

    const alreadyInWishlist = wishlist.find(item => item.id === productId);

    if (!alreadyInWishlist) {
        wishlist.push(product);
        localStorage.setItem('wishlistItems', JSON.stringify(wishlist));

        event.currentTarget.innerHTML = '<i class="fas fa-check"></i>'; // Icon changes
        setTimeout(() => {
            event.currentTarget.innerHTML = '<i class="far fa-heart"></i>';
        }, 1000);
    } else {
        alert('Already in wishlist!');
    }
}


// Filter  by category
function filterProducts() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;
            const filteredProducts = category === 'all'
                ? products
                : products.filter(p => p.category === category);

            displayProducts(filteredProducts);
        });
    });
}

// Sort products
function sortProducts() {
    document.getElementById('popular-btn').addEventListener('click', () => {
        const sorted = [...products].sort((a, b) => b.rating - a.rating);
        displayProducts(sorted);
    });

    document.getElementById('low-to-high-btn').addEventListener('click', () => {
        const sorted = [...products].sort((a, b) => a.price - b.price);
        displayProducts(sorted);
    });

    document.getElementById('high-to-low-btn').addEventListener('click', () => {
        const sorted = [...products].sort((a, b) => b.price - a.price);
        displayProducts(sorted);
    });
}

document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});




document.querySelector('.mobile-menu-btn').addEventListener('click', function () {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
});


document.addEventListener('click', function (event) {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuBtn = document.querySelector('.mobile-menu-btn');

    if (!event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-btn')) {
        mobileMenu.style.display = 'none';
    }
});

document.querySelector('.mobile-filter-toggle').addEventListener('click', function () {
    document.querySelector('.filter-sort-panel').classList.add('active');
});

document.querySelector('.mobile-filter-close').addEventListener('click', function () {
    document.querySelector('.filter-sort-panel').classList.remove('active');
});

document.addEventListener('click', function (event) {
    const panel = document.querySelector('.filter-sort-panel');
    const toggleBtn = document.querySelector('.mobile-filter-toggle');

    if (!event.target.closest('.filter-sort-panel') &&
        !event.target.closest('.mobile-filter-toggle') &&
        panel.classList.contains('active')) {
        panel.classList.remove('active');
    }
});


window.onscroll = function () {
    const btn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

document.getElementById("scrollToTopBtn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



function init() {
    displayProducts(products);
    filterProducts();
    sortProducts();
    // Update this line to sum quantities:
    const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
    cartCount.textContent = totalItems;
}
document.addEventListener('DOMContentLoaded', init);

