// Typewriter effect for main welcome and subline
window.addEventListener('DOMContentLoaded', function() {
  var text1 = "Welcome to the RewardingNation Shop";
  var text2 = "Are You Ready for Exciting Rewards?";
  var el1 = document.getElementById('typewriter-text');
  var el2 = document.getElementById('typewriter-text-2');
  var idx1 = 0, idx2 = 0;
  function typeWriter1() {
    if (idx1 <= text1.length) {
      el1.textContent = text1.slice(0, idx1);
      idx1++;
      setTimeout(typeWriter1, 60);
    } else {
      setTimeout(typeWriter2, 400);
    }
  }
  function typeWriter2() {
    if (idx2 <= text2.length) {
      el2.textContent = text2.slice(0, idx2);
      idx2++;
      setTimeout(typeWriter2, 60);
    }
  }
  typeWriter1();
});

// JavaScript code for RewardingNation website functionality

// Cart management
let cart = [];

// Function to add product to cart
function addToCart(product) {
    cart.push(product);
    updateCartBadge();
    updateCartPrice();
}

// Function to update cart badge
function updateCartBadge() {
    const cartBadge = document.getElementById('cart-badge');
    if (cartBadge) cartBadge.innerText = cart.length;
}

// Function to update cart price
function updateCartPrice() {
    const cartPrice = document.getElementById('cart-price');
    if (cartPrice) {
        const total = cart.reduce((sum, p) => sum + (p.price || 0), 0);
        cartPrice.innerText = `$${total.toFixed(2)}`;
    }
}

// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById('search-input').value;
    const categorySelect = document.getElementById('category-select').value;
    alert(`Searching for: ${searchInput} in category: ${categorySelect}`);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-button').addEventListener('click', handleSearch);

    // Demo: Add a product to cart when cart is clicked
    document.getElementById('cart-area').addEventListener('click', function() {
        const product = { name: 'Sample Product', price: 19.99 };
        addToCart(product);
    });

    updateCartBadge();
    updateCartPrice();
});

// Image Slider Logic
document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let sliderInterval = null;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    function startSlider() {
        sliderInterval = setInterval(nextSlide, 4000);
    }

    function stopSlider() {
        clearInterval(sliderInterval);
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            showSlide(idx);
            stopSlider();
            startSlider();
        });
    });

    showSlide(0);
    startSlider();
});

// Product Carousel Logic
document.addEventListener('DOMContentLoaded', function() {
    // Product Carousel
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const items = document.querySelectorAll('.carousel-item');
    const visibleItems = 3; // Number of products visible at once
    let position = 0;

    function updateCarousel() {
        const itemWidth = items[0].offsetWidth + 24; // item width + margin
        track.style.transform = `translateX(-${position * itemWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
        if (position < items.length - visibleItems) {
            position++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (position > 0) {
            position--;
            updateCarousel();
        }
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();

    // ---- Intersection Observer for auto-slide ----
    const carouselSection = document.getElementById('carousel-section');
    let hasSlid = false;

    if (carouselSection && nextBtn) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasSlid) {
                        nextBtn.click(); // Slide right once
                        hasSlid = true;
                    }
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(carouselSection);
    }
});

// Animate carousel underline and payment underline on scroll
document.addEventListener('DOMContentLoaded', function() {
    // Animate carousel underline
    const carouselUnderline = document.querySelector('.carousel-underline');
    if (carouselUnderline) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        carouselUnderline.classList.add('animated');
                    }
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(carouselUnderline);
    }

    // Animate payment underline
    const paymentUnderline = document.querySelector('.payment-underline');
    if (paymentUnderline) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        paymentUnderline.classList.add('animated');
                    }
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(paymentUnderline);
    }
});

// Media queries for responsive design
const mediaQueries = document.createElement('style');
mediaQueries.textContent = `
@media (max-width: 900px) {
    .main-hero-row {
        flex-direction: column;
        gap: 0;
        box-shadow: none;
    }
    .top-categories {
        width: 100%;
        min-width: 0;
        max-width: 100%;
        margin-bottom: 18px;
        max-height: none;
    }
    .slider-container {
        width: 100%;
        min-width: 0;
        height: auto;
        margin: 0;
    }
}
`;
document.head.append(mediaQueries);

document.addEventListener('DOMContentLoaded', function() {
    const paymentMethods = document.querySelectorAll('.payment-method');
    if (paymentMethods.length) {
        let current = 0;
        function popNext() {
            paymentMethods.forEach((el, i) => el.classList.remove('pop'));
            if (current < paymentMethods.length) {
                paymentMethods[current].classList.add('pop');
                current++;
                setTimeout(popNext, 1100); // 1s animation + 0.1s pause
            }
        }
        popNext();
    }
});

// Scroll to Top functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    if (scrollToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        
        // Smooth scroll to top when button is clicked
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var topCategories = document.querySelector('.top-categories');
    var couponsSection = document.querySelector('.coupons-section');
    
    if (topCategories) {
        setTimeout(function() {
            topCategories.classList.add('visible');
        }, 200); // slight delay for effect
    }
    
    if (couponsSection) {
        setTimeout(function() {
            couponsSection.classList.add('visible');
        }, 200); // slight delay for effect
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var helpBtn = document.querySelector('.help-support-sticky');
    if (helpBtn) {
        setTimeout(function() {
            helpBtn.classList.add('visible');
        }, 300);
    }
});

// Help & Support Chat Popup functionality for all pages
function setupHelpSupportChat() {
    var helpBtn = document.querySelector('.help-support-sticky');
    var chatPopup = document.getElementById('chat-popup');
    var chatOverlay = document.getElementById('chat-popup-overlay');
    var chatClose = document.getElementById('chat-popup-close');
    var chatForm = document.getElementById('chat-popup-form');
    var chatInput = document.getElementById('chat-popup-input');
    var chatMessages = document.getElementById('chat-popup-messages');

    function openChatPopup() {
        chatPopup.style.display = 'flex';
        chatOverlay.style.display = 'block';
        setTimeout(function() {
            chatPopup.focus();
        }, 100);
    }
    function closeChatPopup() {
        chatPopup.style.display = 'none';
        chatOverlay.style.display = 'none';
    }

    if (helpBtn && chatPopup && chatOverlay && chatClose) {
        helpBtn.addEventListener('click', openChatPopup);
        chatClose.addEventListener('click', closeChatPopup);
        chatOverlay.addEventListener('click', closeChatPopup);
    }

    // Simple chat message handling (local only)
    if (chatForm && chatInput && chatMessages) {
        chatForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var msg = chatInput.value.trim();
            if (msg) {
                var userMsg = document.createElement('div');
                userMsg.className = 'chat-popup-message user';
                userMsg.textContent = msg;
                chatMessages.appendChild(userMsg);
                chatMessages.scrollTop = chatMessages.scrollHeight;
                chatInput.value = '';
                // Optionally, add a fake bot reply
                setTimeout(function() {
                    var botMsg = document.createElement('div');
                    botMsg.className = 'chat-popup-message';
                    botMsg.textContent = 'Thank you for your message! Our team will reply soon.';
                    chatMessages.appendChild(botMsg);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 700);
            }
        });
    }
}

window.addEventListener('DOMContentLoaded', setupHelpSupportChat);

// Shop Featured Carousel Arrow Functionality
window.addEventListener('DOMContentLoaded', function() {
  const carouselWrapper = document.querySelector('.shop-featured-carousel .carousel-track-wrapper');
  const carouselTrack = document.querySelector('.shop-featured-carousel .carousel-track');
  const leftBtn = document.querySelector('.shop-featured-carousel .carousel-arrow.left');
  const rightBtn = document.querySelector('.shop-featured-carousel .carousel-arrow.right');
  if (carouselTrack && leftBtn && rightBtn) {
    const scrollAmount = () => {
      // Scroll by the width of one item plus gap
      const item = carouselTrack.querySelector('.carousel-item');
      if (!item) return 240;
      const style = window.getComputedStyle(carouselTrack);
      const gap = parseInt(style.gap) || 24;
      return item.offsetWidth + gap;
    };
    leftBtn.addEventListener('click', function() {
      carouselTrack.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
    });
    rightBtn.addEventListener('click', function() {
      carouselTrack.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
    });
  }
});

// Deal Countdown Timer for Promo Banner
function startDealCountdown(durationSeconds, display) {
    function updateTimer() {
        let hours = Math.floor(durationSeconds / 3600);
        let minutes = Math.floor((durationSeconds % 3600) / 60);
        let seconds = durationSeconds % 60;
        if (durationSeconds > 0) {
            display.textContent = `${hours.toString().padStart(2, '0')}:${minutes
                .toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} left`;
            // Animate flip
            display.classList.remove('deal-timer-flip');
            void display.offsetWidth; // force reflow
            display.classList.add('deal-timer-flip');
            durationSeconds--;
        } else {
            display.textContent = 'Deal Ended';
            display.classList.remove('deal-timer-flip');
            clearInterval(timerInterval);
        }
    }
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
    display.addEventListener('animationend', function() {
        display.classList.remove('deal-timer-flip');
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const dealTimer = document.getElementById('deal-timer');
    if (dealTimer) {
        // Set deal to end in 2 hours (for demo)
        startDealCountdown(2 * 60 * 60, dealTimer);
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.filter-slider-track');
  const slides = Array.from(document.querySelectorAll('.filter-slide'));
  const leftBtn = document.querySelector('.filter-slider-arrow.left');
  const rightBtn = document.querySelector('.filter-slider-arrow.right');
  const container = document.querySelector('.filter-slider-container');
  if (!track || slides.length === 0 || !container) return;
  let centerIndex = 1; // Start with the second slide as center
  let autoSlideInterval = null;
  let isHovered = false;

  function updateSlider() {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('center', idx === centerIndex);
    });
    // Center the active slide in the viewport
    const containerWidth = container.offsetWidth;
    const slideWidth = slides[centerIndex].offsetWidth;
    const slideMargin = parseInt(getComputedStyle(slides[centerIndex]).marginLeft) + parseInt(getComputedStyle(slides[centerIndex]).marginRight);
    const totalSlideWidth = slideWidth + slideMargin;
    const offset = (centerIndex * totalSlideWidth) - (containerWidth / 2) + (slideWidth / 2);
    track.style.transform = `translateX(${-offset}px)`;
  }

  function nextSlide() {
    centerIndex = (centerIndex + 1) % slides.length;
    updateSlider();
  }
  function prevSlide() {
    centerIndex = (centerIndex - 1 + slides.length) % slides.length;
    updateSlider();
  }

  function startAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      if (!isHovered) nextSlide();
    }, 3000);
  }

  leftBtn.addEventListener('click', () => {
    prevSlide();
    startAutoSlide();
  });
  rightBtn.addEventListener('click', () => {
    nextSlide();
    startAutoSlide();
  });

  container.addEventListener('mouseenter', () => { isHovered = true; });
  container.addEventListener('mouseleave', () => { isHovered = false; });

  window.addEventListener('resize', updateSlider);

  // Always start with the next slide in center on load
  centerIndex = 1;
  updateSlider();
  startAutoSlide();
});

document.addEventListener('DOMContentLoaded', function() {
  // Swiper Main Slider (simple sliding animation)
  var mainSlider = new Swiper('.main-slider', {
    loop: true,
    speed: 500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active'
    },
    grabCursor: true
  });
});

// Coupon functionality
document.addEventListener('DOMContentLoaded', function() {
  const couponButtons = document.querySelectorAll('.coupon-btn');
  const couponItems = document.querySelectorAll('.coupon-item');
  
  // Handle coupon button clicks
  couponButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const couponItem = this.closest('.coupon-item');
      const couponCode = couponItem.querySelector('.coupon-code').textContent;
      const discount = couponItem.querySelector('.coupon-discount').textContent;
      
      // Copy coupon code to clipboard
      navigator.clipboard.writeText(couponCode).then(() => {
        // Show success message
        const originalText = this.textContent;
        this.textContent = 'Copied!';
        this.style.background = 'rgba(76, 175, 80, 0.8)';
        this.style.borderColor = '#4CAF50';
        
        // Reset button after 2 seconds
        setTimeout(() => {
          this.textContent = originalText;
          this.style.background = 'rgba(255,255,255,0.2)';
          this.style.borderColor = 'rgba(255,255,255,0.3)';
        }, 2000);
        
        // Show notification
        showNotification(`Coupon ${couponCode} copied to clipboard! ${discount} discount applied.`);
      }).catch(err => {
        console.error('Failed to copy coupon code:', err);
        showNotification('Failed to copy coupon code. Please try again.');
      });
    });
  });
  
  // Handle coupon item clicks (for selection)
  couponItems.forEach(item => {
    item.addEventListener('click', function(e) {
      // Don't trigger if clicking on the button
      if (e.target.classList.contains('coupon-btn')) {
        return;
      }
      
      // Remove active class from all items
      couponItems.forEach(coupon => coupon.classList.remove('active'));
      
      // Add active class to clicked item
      this.classList.add('active');
    });
  });
  
  // Notification function
  function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
      z-index: 10000;
      font-weight: 600;
      font-size: 0.9rem;
      transform: translateX(100%);
      transition: transform 0.3s cubic-bezier(.68,-0.55,.27,1.55);
      max-width: 300px;
    `;
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbarCenter = document.querySelector('.navbar-center');
    
    if (mobileMenuBtn && navbarCenter) {
        mobileMenuBtn.addEventListener('click', function() {
            navbarCenter.classList.toggle('active');
            // Update aria-expanded for accessibility
            const isExpanded = navbarCenter.classList.contains('active');
            mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navbarCenter.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                navbarCenter.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
  });

        // Close menu when window is resized above mobile breakpoint
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navbarCenter.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
});