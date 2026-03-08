const giftModal = document.getElementById('gift-modal');
const closeGiftModal = document.getElementById('button-close-gift');
const presentButton = document.getElementById('gift-modal-present');

function lockScroll() {
    document.body.style.overflow = "hidden";
}

function unlockScroll() {
    document.body.style.overflow = "";
}

function openGiftModal(gift) {

    document.getElementById('gift-modal-image').src = gift.photo;
    document.getElementById('gift-modal-description').textContent = gift.description;
    document.getElementById('gift-modal-value').textContent = formatToMoney(gift.value);

    presentButton.onclick = null;
    presentButton.onclick = () => {
        window.open(gift.link, "_blank", "noopener,noreferrer");
    };

    copyToClipboard(gift.pix);
    showToast("✓ Pix copiado");

    giftModal.classList.add('active');
    lockScroll();
}

closeGiftModal.addEventListener('click', () => {
    giftModal.classList.remove('active');
    unlockScroll();
});

const modalContent = giftModal.querySelector('.modal');

giftModal.addEventListener('click', (e) => {
    if (!modalContent.contains(e.target)) {
        giftModal.classList.remove('active');
        unlockScroll();
    }
});