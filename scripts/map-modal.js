const openMap = document.getElementById('button-open-map');
const closeMap = document.getElementById('button-close-map');
const mapModal = document.getElementById('map-modal');
const mapModalContent = mapModal.querySelector('.modal');

function lockScroll() {
  document.body.style.overflow = "hidden";
}

function unlockScroll() {
  document.body.style.overflow = "";
}

openMap.addEventListener('click', () => {
  mapModal.classList.add('active');
  lockScroll();
});

closeMap.addEventListener('click', () => {
  mapModal.classList.remove('active');
  unlockScroll();
});

mapModal.addEventListener('click', (e) => {
  if (!mapModalContent.contains(e.target)) {
    mapModal.classList.remove('active');
    unlockScroll();
  }
});
