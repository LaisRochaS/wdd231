document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const trailsContainer = document.getElementById("trailsContainer");

async function fetchTrails() {
  try {
    const response = await fetch("data/trails.json");
    if (!response.ok) throw new Error("Network response was not ok");

    const trails = await response.json();

    displayTrails(trails);
  } catch (error) {
    trailsContainer.innerHTML = `<p class="error">Could not load trails. Please try again later.</p>`;
    console.error("Fetch error:", error);
  }
}

function displayTrails(trailList) {
  trailList.forEach(trail => {
    const card = document.createElement("article");
    card.classList.add("trail-card");
    card.innerHTML = `
      <img src="${trail.image}" alt="${trail.name} trail image" loading="lazy">
      <h3>${trail.name}</h3>
      <p>${trail.length} · ${trail.difficulty} · ${trail.location}</p>
      <p>${trail.description}</p>
    `;
    trailsContainer.appendChild(card);
  });
}

fetchTrails();
