document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });
  
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileMenu.contains(e.target) && e.target !== mobileMenuBtn) {
        mobileMenu.style.display = 'none';
      }
    });
  

  
    // Team card hover effect
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        const img = this.querySelector('.team-img img');
        img.style.transform = 'scale(1.1)';
      });
      
      card.addEventListener('mouseleave', function() {
        const img = this.querySelector('.team-img img');
        img.style.transform = 'scale(1)';
      });
    });
  
    // Animate stats counting
    const statCards = document.querySelectorAll('.stat-card h3');
    const statsSection = document.querySelector('.stats-section');
    
    const animateStats = () => {
      const sectionPosition = statsSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (sectionPosition < screenPosition) {
        statCards.forEach(stat => {
          const target = parseInt(stat.textContent);
          const suffix = stat.textContent.replace(/[0-9]/g, '');
          let count = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          
          const updateCount = () => {
            count += increment;
            if (count < target) {
              stat.textContent = Math.floor(count) + suffix;
              requestAnimationFrame(updateCount);
            } else {
              stat.textContent = target + suffix;
            }
          };
          
          updateCount();
        });
        
        // Remove event listener after animation

      }
    };
    
  
    // Add click animation to buttons
    const buttons = document.querySelectorAll('button, a.btn, .shop-now-btn, .contact-btn');
    
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = '';
        }, 200);
      });
    });
  });