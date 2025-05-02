document.addEventListener('DOMContentLoaded', function() {
    const product = JSON.parse(sessionStorage.getItem('currentProduct'));
    if (product) {
        document.getElementById('product-detail-image').src = product.image;
        document.getElementById('product-detail-image').alt = product.title;
        document.getElementById('product-detail-title').textContent = product.title;
        document.getElementById('product-detail-category').textContent = product.category;
        document.getElementById('product-detail-price').textContent = `$${product.price.toFixed(2)}`;
        document.getElementById('product-detail-description').textContent = product.description;
        document.getElementById('product-detail-rating').innerHTML = generateStarRating(product.rating);
        
        document.getElementById('add-to-cart-detail').addEventListener('click', function() {
            addToCart(product.id);
        });
    }
    
    document.getElementById('back-to-products').addEventListener('click', function() {
        window.location.href = 'products.html';
    });
    
    function generateStarRating(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        let stars = '';
        
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
    
    function addToCart(productId) {
    }
});


