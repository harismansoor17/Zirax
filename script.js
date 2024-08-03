// CAROUSel 
const carousel = document.getElementById('carousel');
  const totalItems = document.querySelectorAll('.carousel-item').length;
  let index = 0;
  let forward = true;

  function showNextImage() {
    if (forward) {
      index++;
      if (index === totalItems - 1) {
        forward = false;
      }
    } else {
      index--;
      if (index === 0) {
        forward = true;
      }
    }
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(showNextImage, 3000); // Change image every 3 seconds
// 