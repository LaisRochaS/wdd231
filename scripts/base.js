document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Update: " + document.lastModified;

const allCourses = [
  { code: "CSE 110", title: "Intro to Programming", credits: 3 },
  { code: "WDD 130", title: "Web Fundamentals", credits: 3 },
  { code: "CSE 111", title: "Programming Logic", credits: 3 },
  { code: "CSE 210", title: "Advanced CSE", credits: 3 },
  { code: "WDD 131", title: "JS & DOM", credits: 3 },
  { code: "WDD 231", title: "Frontend Development", credits: 3 }
];

function filterCourses(dept) {
  const container = document.getElementById("coursesContainer");
  container.innerHTML = "";
  let total = 0;

  const filtered = dept === 'all' ? allCourses : allCourses.filter(c => c.code.startsWith(dept));

  filtered.forEach(course => {
    const btn = document.createElement("button");
    btn.className = "course-button";
    btn.textContent = course.code;
    container.appendChild(btn);
    total += course.credits;
  });

  document.getElementById("totalCredits").textContent = total;
}

filterCourses('all');
