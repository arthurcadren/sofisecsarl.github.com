let index = 0;
const images = document.querySelectorAll('#pub-carousel img');
const closeBtn = document.getElementById('close-btn');
const carousel = document.getElementById('pub-carousel');

setInterval(() => {
  images[index].style.display = 'none';
  index = (index + 1) % images.length;
  images[index].style.display = 'block';
}, 5000);  // Change toutes les 5 secondes

closeBtn.addEventListener('click', () => {
  carousel.style.display = 'none';  // Masquer le carrousel
});
