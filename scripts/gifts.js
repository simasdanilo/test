function formatToMoney(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function renderGifts(containerId, gifts) {
  const container = document.getElementById(containerId);

  gifts.forEach(gift => {
    const item = document.createElement('div');
    item.className = 'gift-container';
    const cost = formatToMoney(gift.value);

    item.innerHTML = `
      <img
        class="gift-image"
        src="${gift.photo}"
        alt="${gift.description}"
      />

      <div class="gift-info">
        <p class="gift-description">${gift.description}</p>
        <span class="gift-value">${cost}</span>
      </div>
    `;

    container.appendChild(item);
  });
}

const custom_gifts = [
  { description: 'Só pra não dizer que não dei nada', photo: 'assets/photos/gifts/gift-a.webp', value: 1.99 },
  { description: 'Panela pra Felipe fazer macarrão', photo: 'assets/photos/gifts/gift-a.webp', value: 1.99 },
  { description: 'A última corda que falta pro violão de Felipe', photo: 'assets/photos/gifts/gift-a.webp', value: 1.99 },
  { description: 'Balança para os noivos não engordarem', photo: 'assets/photos/gifts/gift-a.webp', value: 1.99 },
  { description: 'Taças de vinho para noites românticas', photo: 'assets/photos/gifts/gift-a.webp', value: 1.99 },
  { description: 'Taxa para o buquê cair na sua namorada', photo: 'assets/photos/gifts/gift-a.webp', value: 1.99 },
  { description: 'Taxa para o buquê NÃO cair na sua namorada', photo: 'assets/photos/gifts/gift-a.webp', value: 1.99 },
  { description: 'Primeiro lugar na fila do buffet', photo: 'assets/photos/gifts/gift-a.webp', value: 1.99 },
  { description: 'Cobertor para a noiva que está sempre coberta de razão', photo: 'assets/photos/gifts/gift-a.webp', value: 1.99 },
  { description: 'Cueca sexy para a noite de núpcia', photo: 'assets/photos/gifts/gift-a.webp', value: 1.99 },
  { description: 'Roupa sexy para a noiva usar na noite de núpcia', photo: 'assets/photos/gifts/gift-a.webp', value: 1.99 },
  { description: 'Curso de culinária para Felipe', photo: 'assets/photos/gifts/gift-a.webp', value: 1.99 },
  { description: 'Fundo de previdência para os noivos', photo: 'assets/photos/gifts/gift-a.webp', value: 1.99 },
  { description: 'Vaquinha para ajudar os recém-casados', photo: 'assets/photos/gifts/gift-a.webp', value: 1.99 },
  { description: 'Um ano de barba feita para o noivo', photo: 'assets/photos/gifts/gift-a.webp', value: 1.99 },
  { description: 'Fundo emergencial para irem ao Take', photo: 'assets/photos/gifts/gift-a.webp', value: 1.99 },
  { description: 'Cota "amigos para sempre"', photo: 'assets/photos/gifts/gift-a.webp', value: 1.99 },
  { description: 'Seja o nosso patrocinador favorito', photo: 'assets/photos/gifts/gift-a.webp', value: 1.99 },
  { description: 'Dei o melhor presente', photo: 'assets/photos/gifts/gift-a.webp', value: 1.99 },
  { description: 'Poder ir junto com os noivos para a lua de mel', photo: 'assets/photos/gifts/gift-a.webp', value: 1.99 }
];

const CONTAINER_ID = 'gifts-list';
renderGifts(CONTAINER_ID, custom_gifts);