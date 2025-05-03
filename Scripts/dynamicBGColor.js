// Create an observer to watch when the element enters the viewport
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the 'visible' class to start the animation
        entry.target.classList.add('visible');
        // Optionally stop observing after the animation starts
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the element is visible
  
  // Target the span element and start observing it
  const target = document.querySelector('.animated-span');
  observer.observe(target);
  