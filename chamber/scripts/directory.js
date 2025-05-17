document.addEventListener("DOMContentLoaded", () => {
  const membersContainer = document.getElementById("members");

  async function fetchMembers() {
    const response = await fetch("data/members.json");
    const members = await response.json();
    displayMembers(members);
  }

  function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach(member => {
      const card = document.createElement("section");
      card.classList.add("member-card");

      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="membership-level">Membership Level: ${["", "Member", "Silver", "Gold"][member.membership]}</p>
      `;

      membersContainer.appendChild(card);
    });
  }

  document.getElementById("grid").addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
  });

  document.getElementById("list").addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
  });

  // Footer script
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

  fetchMembers();
});
