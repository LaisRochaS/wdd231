document.addEventListener("DOMContentLoaded", () => {
  loadCards();
  handleVisitorMessage();
});

async function loadCards() {
  const response = await fetch("data/discover.json");
  const data = await response.json();
  const container = document.getElementById("card-container");

  data.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.gridArea = `card${index + 1}`;
    card.innerHTML = `
      <h2>${item.name}</h2>
      <figure>
        <img src="${item.image}" alt="${item.name}">
      </figure>
      <address>${item.address}</address>
      <p>${item.description}</p>
      <button onclick="alert('More info coming soon!')">Learn More</button>
    `;
    container.appendChild(card);
  });
}

function handleVisitorMessage() {
  const msgContainer = document.getElementById("visitor-message");
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();
  let message = "";

  if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
  } else {
    const diff = now - Number(lastVisit);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days < 1) {
      message = "Back so soon! Awesome!";
    } else {
      message = `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
    }
  }

  msgContainer.textContent = message;
  localStorage.setItem("lastVisit", now);
}
