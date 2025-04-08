// Modal Foto de Perfil
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
  
    const images = document.getElementsByClassName("perfil-img");
    const modalImg = document.getElementById("expandedImg");
    const captionText = document.getElementById("imgCaption");
  
    for (let i = 0; i < images.length; i++) {
      images[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      };
    }
  
    const span = document.getElementsByClassName("close")[0];
  
    span.onclick = function () {
      modal.style.display = "none";
    };
  
    modal.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  
    document.onkeydown = function (event) {
      if (event.key === "Escape") {
        modal.style.display = "none";
      }
    };
  });