document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (event) {
      // Traverse up from the click target to find the nearest .pregunta ancestor
      const pregunta = event.target.closest('.pregunta');
      
      if (pregunta) {
        // Toggle 'active' class on clicked .pregunta
        pregunta.classList.toggle('active');
        
        // Find the .plus-icon and .minus-icon within the clicked .pregunta
        const plusIcon = pregunta.querySelector('.plus-icon');
        const minusIcon = pregunta.querySelector('.minus-icon');
        
        if (plusIcon && minusIcon) {
          // Remove 'visible' from .plus-icon and add 'visible' to .minus-icon
          plusIcon.classList.toggle('visible');
          minusIcon.classList.toggle('visible');
        }
        
        // Add 'visible' to the next sibling element
        const nextElem = pregunta.nextElementSibling;
        if (nextElem) {
          nextElem.classList.toggle('visible');
        }
      }
    });
  });
  