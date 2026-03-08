const openMap = document.getElementById('button-open-map');
const closeMap = document.getElementById('button-close-map');
const mapModal = document.getElementById('map-modal');


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


const modalContent = giftModal.querySelector('.modal');

mapModal.addEventListener('click', (e) => {
  if (!modalContent.contains(e.target)) {
    giftModal.classList.remove('active');
    unlockScroll();
  }
});
