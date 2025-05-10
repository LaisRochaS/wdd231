// scripts/course.js
const courses = [
  { code: "CSE 110", name: "Intro to Programming", credits: 3, type: "CSE", completed: true },
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, type: "WDD", completed: true },
  { code: "CSE 111", name: "Programming II", credits: 3, type: "CSE", completed: true },
  { code: "CSE 210", name: "Programming with Classes", credits: 3, type: "CSE", completed: false },
  { code: "WDD 131", name: "Dynamic Web Pages", credits: 3, type: "WDD", completed: true },
  { code: "WDD 231", name: "Front-end Development I", credits: 3, type: "WDD", completed: false },
];

function renderCourses(filteredCourses) {
  const container = document.getElementById("coursesContainer");
  container.innerHTML = "";

  let totalCredits = 0;

  filteredCourses.forEach(course => {
    const button = document.createElement("button");
    button.textContent = `${course.code}`;
    button.style.backgroundColor = course.completed ? "#6b3e26" : "#eee";
    button.style.color = course.completed ? "#fff" : "#000";
    container.appendChild(button);
    totalCredits += course.credits;
  });

  document.getElementById("totalCredits").textContent = totalCredits;
}

function filterCourses(type) {
  if (type === "all") {
    renderCourses(courses);
  } else {
    renderCourses(courses.filter(c => c.type === type));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderCourses(courses);
});
