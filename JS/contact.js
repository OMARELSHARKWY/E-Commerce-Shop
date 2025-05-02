document.addEventListener('DOMContentLoaded', function() {

    const username = document.querySelector('#user-name');
    const sessionUser = JSON.parse(sessionStorage.getItem('currentUser')) || null;
    for(const key in sessionUser) {
        if (key === 'name') {
            username.innerText = sessionUser[key];
        }
    }

    let cartcount = document.querySelector('.cart-count');
    const localUser = JSON.parse(localStorage.getItem('cartItems')) || null;
    const localUserlen = localUser.length;
    cartcount.innerText = localUserlen;
    orderscount.innerText = localUserlen;

    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
        });
    });

    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        console.log('Form submitted:', { name, email, subject, message });
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    const cartCount = document.querySelector('.cart-count');

});

window.onscroll = function() {
    const btn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

