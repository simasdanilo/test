function formatToMoney(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function renderGifts(containerId, gifts) {
  const container = document.getElementById(containerId);

  gifts.forEach(gift => {
    const item = document.createElement('a');
    item.className = 'gift-container';
    item.href = gift.link;
    item.target = "_blank";
    item.rel = "noopener noreferrer";

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

const custom_gifts = [ {
    description: 'Só pra não dizer que não dei nada',
    photo: 'assets/photos/gifts/gift100.jfif',
    value: 100,
    link: 'https://nubank.com.br/cobrar/25wta/69ac843e-747f-4fdf-829d-882a314aab62'
  },
  {
    description: 'A última corda que falta no violão de Felipe',
    photo: 'assets/photos/gifts/gift200.jpg',
    value: 200,
    link: 'https://nubank.com.br/cobrar/25wta/69ac855e-59eb-4f9c-9ce4-18608703ee6e'
  },
  {
    description: 'Panela para Felipe fazer macarrão',
    photo: 'assets/photos/gifts/gift300.jfif',
    value: 300,
    link: 'https://nubank.com.br/cobrar/25wta/69ac85cd-42d8-41c6-965f-f95bfed2fce9'
  },
  {
    description: 'Cobertor para a noiva que está sempre coberta de razão',
    photo: 'assets/photos/gifts/gift400.jfif',
    value: 400,
    link: 'https://nubank.com.br/cobrar/25wta/69ac861e-dea3-4869-8538-1f585ab194c1'
  },
  {
    description: 'Fundo emergencial para a comida Japonesa',
    photo: 'assets/photos/gifts/gift500.jpg',
    value: 500,
    link: 'https://nubank.com.br/cobrar/25wta/69ac8682-908e-45bc-9f7e-6e5584dff7b4'
  },
  {
    description: 'Taxa para o buquê cair na sua namorada (o)',
    photo: 'assets/photos/gifts/gift600.jpg',
    value: 600,
    link: 'https://nubank.com.br/cobrar/25wta/69ac86fe-59bb-47bb-a430-0408d852eb47'
  },
  {
    description: 'Taxa para o buquê NÃO cair na sua namorada (o)',
    photo: 'assets/photos/gifts/gift700.JPG',
    value: 700,
    link: 'https://nubank.com.br/cobrar/25wta/69ac8754-d9cd-49a3-9a86-509dd4c558df'
  },
  {
    description: 'Fundo de previdência para os noivos',
    photo: 'assets/photos/gifts/gift800.JPG',
    value: 800,
    link: 'https://nubank.com.br/cobrar/25wta/69ac879d-8b51-4618-b884-b767dca34e25'
  },
  {
    description: 'Seja o nosso patrocinador favorito',
    photo: 'assets/photos/gifts/gift900.JPG',
    value: 900,
    link: 'https://nubank.com.br/cobrar/25wta/69ac87cc-fdbb-49a3-8417-9496422692f4'
  },
  {
    description: 'Dei o melhor presente',
    photo: 'assets/photos/gifts/gift1000.JPG',
    value: 1000,
    link: 'https://nubank.com.br/cobrar/25wta/69ac87f2-943f-41cf-ba47-389f5b1fe836'
  }
];

const CONTAINER_ID = 'gifts-list';
renderGifts(CONTAINER_ID, custom_gifts);
