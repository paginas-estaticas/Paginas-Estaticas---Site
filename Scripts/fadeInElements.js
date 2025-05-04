document.addEventListener("DOMContentLoaded", () => {
  // Check if the screen width is 992px or smaller
  const isMobile = window.matchMedia("(max-width: 992px)").matches;

  if (isMobile) {
    // Create an intersection observer for mobile devices
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // If the element is visible, add the "visible" class
          entry.target.classList.add("visible");
          // Optionally, stop observing the element after it becomes visible
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Target all elements with the class "fade-in-element"
    const fadeInElements = document.querySelectorAll(".fade-in-element");
    fadeInElements.forEach(element => {
      observer.observe(element);
    });

    // Target all elements with the class "portfolio-img"
    const portfolioImages = document.querySelectorAll(".portfolio-img");
    portfolioImages.forEach(image => {
      observer.observe(image);
    });
  } else {
    // For screens larger than 992px, delay the visibility change when elements are observed
    const delayElementVisibility = (containerId) => {
      const container = document.getElementById(containerId);
      if (!container) {
        console.log(`Container with id ${containerId} not found.`);
        return;
      }

      // Use IntersectionObserver to detect when each element is observed
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            console.log(`Element observed:`, entry.target); // Debugging
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, 300 * index); // Add a delay of 1 second between each element
          }
        });
      }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
      });

      // Select all fade-in-element elements within the container, regardless of nesting level
      const fadeInElements = container.querySelectorAll(".fade-in-element");
      if (fadeInElements.length === 0) {
        console.log(`No fade-in-element found inside #${containerId}`);
      }
      fadeInElements.forEach((element) => {
        observer.observe(element);
      });
    };

    // Apply the delayed visibility to elements inside both #que-hacemos-ul and #portfolio-ul
    delayElementVisibility("section-que-ofrecemos");
    delayElementVisibility("que-hacemos-ul");
    delayElementVisibility("portfolio-ul");
    delayElementVisibility("ul-paquetes");
    delayElementVisibility("section-beneficios");
  }
});
