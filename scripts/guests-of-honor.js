
function renderGuestsOfHonor(containerId, people) {
  const container = document.getElementById(containerId);

  people.forEach(person => {
    const card = document.createElement('div');
    card.className = 'honor-person';

    card.innerHTML = `
      <img src="${person.photo}" alt="${person.name}">
      <span>${person.name}</span>
    `;

    container.appendChild(card);
  });
}


const parents = [
  { name: 'Ana Paula', photo: 'assets/photos/guests-of-honor/Ana Paula.jpg' },
  { name: 'Jailson', photo: 'assets/photos/guests-of-honor/Jailson.jpg' },
  { name: 'Claudia', photo: 'assets/photos/guests-of-honor/Claudia.jpg' }
];


const groomsmen = [
  { name: 'Danilo', photo: 'assets/photos/guests-of-honor/Danilo.JPG' },
  { name: 'Franklin', photo: 'assets/photos/guests-of-honor/Franklin.JPG' },
  { name: 'Gabriel', photo: 'assets/photos/guests-of-honor/Gabriel.JPG' },
  { name: 'Vinicius', photo: 'assets/photos/guests-of-honor/Vinicius.JPG' },
];

const bridesmaids = [
  { name: 'Ana Flavia', photo: 'assets/photos/guests-of-honor/Ana Flavia.JPG' },
  { name: 'Carine', photo: 'assets/photos/guests-of-honor/Carine.JPG' },
  { name: 'Daphne', photo: 'assets/photos/guests-of-honor/Daphne.JPG' },
  { name: 'Mayara', photo: 'assets/photos/guests-of-honor/Mayara.JPG' },
  { name: 'Thaina', photo: 'assets/photos/guests-of-honor/Thaina.JPG' }
];

const flowerGirls = [
  { name: 'Elisa', photo: 'assets/photos/guests-of-honor/Elisa.JPG' },
  { name: 'Helena', photo: 'assets/photos/guests-of-honor/Helena.JPG' }
];

const officiant = [
  { name: 'Daniela', photo: 'assets/photos/guests-of-honor/Daniela.JPG' }
];

renderGuestsOfHonor('groomsmen', groomsmen);
renderGuestsOfHonor('bridesmaids', bridesmaids);
renderGuestsOfHonor('flower-girls', flowerGirls);
renderGuestsOfHonor('officiant', officiant);
renderGuestsOfHonor('parents', parents);

