async function displaySpotlights() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Failed to fetch member data.');
    const data = await response.json();

    const membershipMap = { 1: 'Bronze', 2: 'Silver', 3: 'Gold' };
    const eligible = data.filter(m => m.membership === 2 || m.membership === 3);
    const selected = eligible.sort(() => 0.5 - Math.random()).slice(0, 3);

    const container = document.querySelector('.spotlight-container');
    container.innerHTML = '';

    selected.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('spotlight');
      card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="images/${member.image}" alt="${member.name} logo" loading="lazy" />
        <p>${member.description}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <a href="${member.website}" target="_blank" rel="noopener noreferrer">${member.website}</a>
        <p class="membership">${membershipMap[member.membership]} Member</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading spotlights:', error);
    document.querySelector('.spotlight-container').innerHTML = `<p class="error">Unable to load spotlight members.</p>`;
  }
}

displaySpotlights();

