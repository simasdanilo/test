
function renderGifts(containerId, people) {
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

const groomsmen = [
  { name: 'Carlos', photo: 'assets/photos/guests-of-honor/eduardo.png' },
  { name: 'Lucas', photo: 'assets/photos/guests-of-honor/eduardo.png' },
  { name: 'Marcos', photo: 'assets/photos/guests-of-honor/eduardo.png' },
  { name: 'Pedro', photo: 'assets/photos/guests-of-honor/eduardo.png' }
  { name: 'Rafael', photo: 'assets/photos/guests-of-honor/eduardo.png' },
];

const bridesmaids = [
  { name: 'Ana', photo: 'assets/photos/guests-of-honor/larissa.png' },
  { name: 'Julia', photo: 'assets/photos/guests-of-honor/larissa.png' },
  { name: 'Marina', photo: 'assets/photos/guests-of-honor/larissa.png' },
  { name: 'Paula', photo: 'assets/photos/guests-of-honor/larissa.png' }
];

const flowerGirls = [
  { name: 'Sofia', photo: 'assets/photos/guests-of-honor/helena.png' },
  { name: 'Laura', photo: 'assets/photos/guests-of-honor/helena.png' }
];

const officiant = [
  { name: 'Maria', photo: 'assets/photos/guests-of-honor/maria.png' }
];

renderGifts('groomsmen', groomsmen);
renderGifts('bridesmaids', bridesmaids);
renderGifts('flower-girls', flowerGirls);
renderGifts('officiant', officiant);