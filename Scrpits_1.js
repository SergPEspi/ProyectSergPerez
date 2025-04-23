
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario-reserva");
    const mensaje = document.getElementById("confirmacion"); 
  
    
    mensaje.style.display = "none";
  
    formulario.addEventListener("submit", function (e) {
      e.preventDefault(); 
  
     n
      mensaje.style.display = "block";
      formulario.reset();
  
      
      setTimeout(() => {
        mensaje.style.display = "none";
      }, 5000); 
    });
  });
  

