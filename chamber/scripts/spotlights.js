async function displaySpotlights() {
  const response = await fetch('data/members.json');
  const data = await response.json();
  const members = data.members.filter(m => m.membership === 'Gold' || m.membership === 'Silver');

  const spotlights = document.querySelector('.spotlight-container');
  spotlights.innerHTML = '';

  const selected = members.sort(() => 0.5 - Math.random()).slice(0, 3);

  selected.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('spotlight');

    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="${member.logo}" alt="${member.name} logo" />
      <p>${member.phone}</p>
      <p>${member.address}</p>
      <a href="${member.website}" target="_blank">${member.website}</a>
      <p class="membership">${member.membership} Member</p>
    `;

    spotlights.appendChild(card);
  });
}

displaySpotlights();
