document.addEventListener('DOMContentLoaded', () => {
  // Safe initialization of GSAP
  if (typeof gsap !== 'undefined') {
    // Register ScrollTrigger plugin if available
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // GSAP Fade-Up Animation for Hero & Main Sections
    gsap.utils.toArray('.gsap-fade-up').forEach(element => {
      gsap.fromTo(element, 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // GSAP Counter Animation
    gsap.utils.toArray('.gsap-counter').forEach(counter => {
      const targetValue = parseInt(counter.getAttribute('data-target') || '0', 10);
      const isPercent = counter.getAttribute('data-percent') === 'true';
      const isPlus = counter.getAttribute('data-plus') === 'true';

      const counterObj = { val: 0 };
      gsap.to(counterObj, {
        val: targetValue,
        duration: 2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: counter,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        onUpdate: function () {
          let suffix = '';
          if (isPercent) suffix = '%';
          if (isPlus) suffix = '+';
          counter.innerText = Math.floor(counterObj.val) + suffix;
        }
      });
    });

    // Subtly Reveal Image on Scroll
    gsap.utils.toArray('.gsap-reveal-img').forEach(container => {
      const img = container.querySelector('img');
      if (img) {
        gsap.fromTo(img, 
          { scale: 1.15 },
          {
            scale: 1.0,
            duration: 1.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    });

  } else {
    // Fallback: If GSAP doesn't load, instantly reveal all elements and setup simple counter
    document.querySelectorAll('.gsap-fade-up').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });

    document.querySelectorAll('.gsap-counter').forEach(counter => {
      const target = counter.getAttribute('data-target');
      const isPercent = counter.getAttribute('data-percent') === 'true';
      const isPlus = counter.getAttribute('data-plus') === 'true';
      let suffix = '';
      if (isPercent) suffix = '%';
      if (isPlus) suffix = '+';
      counter.innerText = target + suffix;
    });
  }
});
