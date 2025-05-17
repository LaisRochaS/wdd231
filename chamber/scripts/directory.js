document.addEventListener("DOMContentLoaded", () => {
  const membersContainer = document.getElementById("members");
  let memberData = [];

  async function fetchMembers() {
    const response = await fetch("data/members.json");
    memberData = await response.json();
    displayMembers("grid"); 
  }

  function displayMembers(view) {
    membersContainer.innerHTML = "";
    membersContainer.className = `members-container ${view}`;

    memberData.forEach(member => {
      const section = document.createElement("section");
      section.classList.add("member-card");

      section.innerHTML = `
        ${view === "grid" ? `<img src="images/${member.image}" alt="${member.name} logo">` : ""}
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="membership-level">Membership Level: ${["", "Member", "Silver", "Gold"][member.membership]}</p>
      `;

      membersContainer.appendChild(section);
    });
  }

  document.getElementById("grid").addEventListener("click", () => displayMembers("grid"));
  document.getElementById("list").addEventListener("click", () => displayMembers("list"));

  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

  fetchMembers();
});

