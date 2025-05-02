document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section'); // or any selector for your sections
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const navLink = document.querySelector(`li.nav-li-element a[href="#${sectionId}"]`);
      
            if (navLink) {
              document.querySelectorAll('li.nav-li-element a').forEach(a => a.classList.remove('active'));
              navLink.classList.add('active');
              console.log(`Activated link for: ${sectionId}`);
            } else {
              console.warn(`No nav link found for: ${sectionId}`);
            }
          }
        });
      }, {
        threshold: 0.5
      });
      
  
    sections.forEach(section => {
      if (section.id) observer.observe(section);
    });
  });
  