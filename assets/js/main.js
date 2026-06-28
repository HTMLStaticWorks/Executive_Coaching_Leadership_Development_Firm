document.addEventListener('DOMContentLoaded', () => {
  // --- Active Nav Highlighting ---
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
      
      // If it's a dropdown item, also highlight the parent dropdown toggle
      if (link.classList.contains('dropdown-item')) {
        const parentDropdown = link.closest('.dropdown');
        if (parentDropdown) {
          const toggle = parentDropdown.querySelector('.dropdown-toggle');
          if (toggle) toggle.classList.add('active');
        }
      }
    }
  });

  // --- Sticky Header Behavior ---
  const header = document.querySelector('header.sticky-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
      } else {
        header.classList.remove('scrolled');
        header.style.boxShadow = 'none';
      }
    });
  }

  // --- Premium Inquiry & Contact Form Logic ---
  const inquiryForms = document.querySelectorAll('.premium-form, #inquiry-form, #contact-form');
  inquiryForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Validate inputs
      let isValid = true;
      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#EF4444'; // Red error border
        } else {
          input.style.borderColor = 'var(--border-color)';
        }
      });

      if (!isValid) return;

      // Premium Mock success alert
      const successMsg = document.createElement('div');
      successMsg.className = 'alert alert-premium mt-3 p-3 animate-fade-up';
      successMsg.innerHTML = `
        <h5 class="mb-1" style="color: var(--accent-color);">Request Submitted Successfully</h5>
        <p class="mb-0 text-secondary" style="font-size: 0.9rem;">Thank you for reaching out. An executive relations partner will review your inquiry and contact you confidentially within 24 hours.</p>
      `;
      
      // Remove any existing messages
      const existingAlert = form.querySelector('.alert-premium');
      if (existingAlert) existingAlert.remove();
      
      form.appendChild(successMsg);
      form.reset();
    });
  });

  // --- Newsletter Form Submission ---
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        const successMsg = document.createElement('p');
        successMsg.className = 'text-success mt-2 mb-0';
        successMsg.style.fontSize = '0.85rem';
        successMsg.innerText = 'Subscription confirmed. Welcome to our briefing list.';
        
        const existingMsg = form.querySelector('.text-success');
        if (existingMsg) existingMsg.remove();
        
        form.appendChild(successMsg);
        emailInput.value = '';
      }
    });
  });

  // --- Auth Pages Form Submission ---
  const authForm = document.querySelector('#auth-form');
  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isSignup = authForm.classList.contains('signup-form');
      const actionText = isSignup ? 'Registration' : 'Login';
      
      const successMsg = document.createElement('div');
      successMsg.className = 'alert alert-premium mt-3 p-3';
      successMsg.innerHTML = `
        <h5 class="mb-1" style="color: var(--accent-color);">${actionText} Successful</h5>
        <p class="mb-0 text-secondary" style="font-size: 0.9rem;">Redirecting to executive client portal dashboard...</p>
      `;
      
      const existingAlert = authForm.querySelector('.alert-premium');
      if (existingAlert) existingAlert.remove();
      
      authForm.appendChild(successMsg);
      
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
    });
  }

  // --- Scroll to Top Button Dynamic Injection & Logic ---
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.id = 'scroll-top-btn';
  scrollTopBtn.className = 'scroll-top-btn';
  scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
  scrollTopBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  `;
  document.body.appendChild(scrollTopBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
