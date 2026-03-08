function formatToMoney(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;

    textarea.style.position = "fixed";
    textarea.style.opacity = "0";

    document.body.appendChild(textarea);
    textarea.select();

    const success = document.execCommand("copy");
    document.body.removeChild(textarea);

    return success;
  }
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

    item.onclick = async () => {
      const copied = await copyToClipboard(gift.pix);

      if (copied) {
        showToast("✓ Pix copiado");
      } else {
        showToast("Não foi possível copiar o Pix");
      }

      setTimeout(() => {
        window.open(gift.link, "_blank", "noopener,noreferrer");
      }, 800);
    };


    container.appendChild(item);
  });
}

const custom_gifts = [{
  description: 'Só pra não dizer que não dei nada',
  photo: 'assets/photos/gifts/gift100.jfif',
  value: 100,
  link: 'https://nubank.com.br/cobrar/25wta/69ac843e-747f-4fdf-829d-882a314aab62',
  pix: '00020126920014BR.GOV.BCB.PIX0136ba0aa1e2-96a0-4e0b-bf8c-48ddcd5401ed0230Pra não dizer que não deu nada5204000053039865406100.005802BR5925Felipe Lima da Fonseca Ne6009SAO PAULO62140510VRw2UTdCTi6304DF35',
},
{
  description: 'A última corda que falta no violão de Felipe',
  photo: 'assets/photos/gifts/gift200.jpg',
  value: 200,
  link: 'https://nubank.com.br/cobrar/25wta/69ac855e-59eb-4f9c-9ce4-18608703ee6e',
  pix: '00020126960014BR.GOV.BCB.PIX0136ba0aa1e2-96a0-4e0b-bf8c-48ddcd5401ed0234A última corda do violão de Felipe5204000053039865406200.005802BR5925Felipe Lima da Fonseca Ne6009SAO PAULO62140510M6kzbgidUI6304194B'
},
{
  description: 'Panela para Felipe fazer macarrão',
  photo: 'assets/photos/gifts/gift300.jfif',
  value: 300,
  link: 'https://nubank.com.br/cobrar/25wta/69ac85cd-42d8-41c6-965f-f95bfed2fce9',
  pix: '00020126940014BR.GOV.BCB.PIX0136ba0aa1e2-96a0-4e0b-bf8c-48ddcd5401ed0232Panela pra Felipe fazer macarrão5204000053039865406300.005802BR5925Felipe Lima da Fonseca Ne6009SAO PAULO62140510ZRozfO0PWj6304DA99'
},
{
  description: 'Cobertor para a noiva que está sempre coberta de razão',
  photo: 'assets/photos/gifts/gift400.jfif',
  value: 400,
  link: 'https://nubank.com.br/cobrar/25wta/69ac861e-dea3-4869-8538-1f585ab194c1',
  pix: '00020126960014BR.GOV.BCB.PIX0136ba0aa1e2-96a0-4e0b-bf8c-48ddcd5401ed0234Coberta pra noiva coberta de razão5204000053039865406400.005802BR5925Felipe Lima da Fonseca Ne6009SAO PAULO62140510AEgzqFcimF63043BB4'
},
{
  description: 'Fundo emergencial para a comida Japonesa',
  photo: 'assets/photos/gifts/gift500.jpg',
  value: 500,
  link: 'https://nubank.com.br/cobrar/25wta/69ac8682-908e-45bc-9f7e-6e5584dff7b4',
  pix: '00020126920014BR.GOV.BCB.PIX0136ba0aa1e2-96a0-4e0b-bf8c-48ddcd5401ed0230Fundo Emergencial para o Japa!5204000053039865406500.005802BR5925Felipe Lima da Fonseca Ne6009SAO PAULO62140510pdyzq2opS16304EA66'
},
{
  description: 'Taxa para o buquê cair na sua namorada (o)',
  photo: 'assets/photos/gifts/gift600.jpg',
  value: 600,
  link: 'https://nubank.com.br/cobrar/25wta/69ac86fe-59bb-47bb-a430-0408d852eb47',
  pix: '00020126960014BR.GOV.BCB.PIX0136ba0aa1e2-96a0-4e0b-bf8c-48ddcd5401ed0234Taxa para o buquê cair na namorada5204000053039865406600.005802BR5925Felipe Lima da Fonseca Ne6009SAO PAULO62140510LfvEbx0ksi63040035'
},
{
  description: 'Taxa para o buquê NÃO cair na sua namorada (o)',
  photo: 'assets/photos/gifts/gift700.JPG',
  value: 700,
  link: 'https://nubank.com.br/cobrar/25wta/69ac8754-d9cd-49a3-9a86-509dd4c558df',
  pix: '00020126870014BR.GOV.BCB.PIX0136ba0aa1e2-96a0-4e0b-bf8c-48ddcd5401ed0225Taxa pra o buquê não cair5204000053039865406700.005802BR5925Felipe Lima da Fonseca Ne6009SAO PAULO62140510YypyskSNBR6304B733'
},
{
  description: 'Fundo de previdência para os noivos',
  photo: 'assets/photos/gifts/gift800.JPG',
  value: 800,
  link: 'https://nubank.com.br/cobrar/25wta/69ac879d-8b51-4618-b884-b767dca34e25',
  pix: '00020126970014BR.GOV.BCB.PIX0136ba0aa1e2-96a0-4e0b-bf8c-48ddcd5401ed0235Fundo de Previdência para os noivos5204000053039865406800.005802BR5925Felipe Lima da Fonseca Ne6009SAO PAULO62140510OJq7BBpQpP63046F2E'
},
{
  description: 'Seja o nosso patrocinador favorito',
  photo: 'assets/photos/gifts/gift900.JPG',
  value: 900,
  link: 'https://nubank.com.br/cobrar/25wta/69ac87cc-fdbb-49a3-8417-9496422692f4',
  pix: '00020126960014BR.GOV.BCB.PIX0136ba0aa1e2-96a0-4e0b-bf8c-48ddcd5401ed0234Seja o nosso patrocinador favorito5204000053039865406900.005802BR5925Felipe Lima da Fonseca Ne6009SAO PAULO621405107gGpFHgX1s6304FB35'
},
{
  description: 'Dei o melhor presente',
  photo: 'assets/photos/gifts/gift1000.JPG',
  value: 1000,
  link: 'https://nubank.com.br/cobrar/25wta/69ac87f2-943f-41cf-ba47-389f5b1fe836',
  pix: '00020126870014BR.GOV.BCB.PIX0136ba0aa1e2-96a0-4e0b-bf8c-48ddcd5401ed0225DEI O MELHOR PRESENTE!!!!52040000530398654071000.005802BR5925Felipe Lima da Fonseca Ne6009SAO PAULO621405104oV8JixzJC6304DE15'
}
];

const CONTAINER_ID = 'gifts-list';
renderGifts(CONTAINER_ID, custom_gifts);
