const params = new URLSearchParams(location.search);
const name = `${params.get("firstName")} ${params.get("lastName")}`;
const email = params.get("email");
const phone = params.get("phone");
const organization = params.get("organization");
const time = params.get("timestamp");

document.getElementById("output").innerHTML = `
  <strong>Name:</strong> ${name}<br>
  <strong>Email:</strong> ${email}<br>
  <strong>Phone:</strong> ${phone}<br>
  <strong>Organization:</strong> ${organization}<br>
  <strong>Submitted:</strong> ${new Date(time).toLocaleString()}
`;
