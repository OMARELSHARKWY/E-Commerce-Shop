
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  mobileMenuBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!mobileMenu.contains(e.target) && e.target !== mobileMenuBtn) {
      mobileMenu.style.display = 'none';
    }
  });



  // Function to handle regular button clicks (redirect to index.html)
  const redirectToIndex = function(e) {
    // Prevent default action only if it's a link
    if (e.target.tagName === 'A' || e.target.closest('a')) {
      e.preventDefault();
    }
    
    // Redirect to index.html after a small delay for visual feedback
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 100);
  };

  // Get all navbar and footer links (both desktop and mobile)
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a, .footer a');
  
  // Allow navbar and footer links to work normally
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Add click animation
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 200);
      
      // Let the default link behavior handle navigation
    });
  });

  // Add click event to all other buttons (except navbar, footer and scroll to top)
  const allButtons = document.querySelectorAll(
    'button:not(.mobile-menu-btn):not(.quick-view):not(.add-to-wishlist):not(.add-to-cart):not(.shop-now-btn):not(.contact-btn)'
  );
  
  allButtons.forEach(button => {
    button.addEventListener('click', redirectToIndex);
  });

  // Add click event to all other links (except navbar, footer and specific ones)
  const allLinks = document.querySelectorAll(
    'a:not([href="index.html"]):not([href="#"]):not([href^="mailto:"]):not([href^="tel:"]):not(.nav-links a):not(.mobile-menu a):not(.footer a)'
  );
  
  allLinks.forEach(link => {
    link.addEventListener('click', redirectToIndex);
  });

  // Special handling for newsletter form to prevent immediate redirect
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput.value) {
        alert('Thank you for subscribing!');
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address.');
      }
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    });
  }



  // Add visual feedback for clicks on buttons and links
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
      const element = e.target;
      element.style.transform = 'scale(0.95)';
      setTimeout(() => {
        element.style.transform = '';
      }, 200);
    }
  });
});


