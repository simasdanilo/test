const openMap = document.getElementById('button-open-map');
const closeMap = document.getElementById('button-close-map');
const modal = document.getElementById('map-modal');

openMap.addEventListener('click', () => {
  modal.classList.add('active');
});

closeMap.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});