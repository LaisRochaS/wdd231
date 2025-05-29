document.getElementById("timestamp").value = new Date().toISOString();

function showModal(id) {
  document.getElementById(id).style.display = "block";
}

function hideModal(id) {
  document.getElementById(id).style.display = "none";
}
