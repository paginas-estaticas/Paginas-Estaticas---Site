document.addEventListener("DOMContentLoaded", () => {
    const buttonWeb = document.getElementById("button-servicio-web");
    const buttonMkt = document.getElementById("button-servicio-mkt");
    const servicioWeb = document.getElementById("servicio-web");
    const servicioMkt = document.getElementById("servicio-mkt");
  
    buttonWeb.addEventListener("click", () => {
      
      // Update button states
      buttonWeb.classList.add("active");
      buttonMkt.classList.remove("active");
  
      // Update content visibility
      servicioWeb.classList.add("visible");
      servicioMkt.classList.remove("visible");
    });
  
    buttonMkt.addEventListener("click", () => {
      // Update button states
      buttonMkt.classList.add("active");
      buttonWeb.classList.remove("active");
  
      // Update content visibility
      servicioMkt.classList.add("visible");
      servicioWeb.classList.remove("visible");
    });
  });