const guides = [
  {category:"Earthquake", title:"During an Earthquake", text:"Drop, Cover, and Hold On. Stay away from windows and protect your head and neck."},
  {category:"Earthquake", title:"After an Earthquake", text:"Check for hazards, expect aftershocks, and follow official instructions."},
  {category:"Fire", title:"Fire Safety", text:"Leave the building using a safe exit. Do not use elevators. Call the local fire service from a safe place."},
  {category:"Flood", title:"Flood Preparedness", text:"Move to higher ground and never walk or drive through floodwater."},
  {category:"Typhoon", title:"Typhoon Preparedness", text:"Monitor official weather updates, prepare essential supplies, and follow evacuation advice."}
];

const results = document.getElementById("results");
const searchInput = document.getElementById("searchInput");
let selectedCategory = "All";

function renderGuides() {
  const term = searchInput.value.trim().toLowerCase();
  const filtered = guides.filter(guide => {
    const matchesCategory = selectedCategory === "All" || guide.category === selectedCategory;
    const matchesSearch = `${guide.category} ${guide.title} ${guide.text}`.toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  });

  results.innerHTML = "";
  if (filtered.length === 0) {
    results.innerHTML = '<p class="no-results">No matching guides found. Try another word or category.</p>';
    return;
  }

  filtered.forEach(guide => {
    const card = document.createElement("article");
    card.className = "result-card";
    const title = document.createElement("h3");
    title.textContent = `${guide.category}: ${guide.title}`;
    const text = document.createElement("p");
    text.textContent = guide.text;
    card.append(title, text);
    results.appendChild(card);
  });
}

document.getElementById("searchForm").addEventListener("submit", event => {
  event.preventDefault();
  renderGuides();
});

searchInput.addEventListener("input", renderGuides);

document.querySelectorAll(".filter-buttons button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-buttons button").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    selectedCategory = button.dataset.category;
    renderGuides();
  });
});

document.getElementById("checkAnswer").addEventListener("click", () => {
  const answer = document.querySelector('input[name="answer"]:checked');
  const result = document.getElementById("quizResult");
  if (!answer) {
    result.textContent = "Please choose an answer first.";
    result.style.color = "#073565";
  } else if (answer.value === "b") {
    result.textContent = "Correct! Drop, Cover, and Hold On.";
    result.style.color = "green";
  } else {
    result.textContent = "Not quite. The correct answer is Drop, Cover, and Hold On.";
    result.style.color = "#c71925";
  }
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();
renderGuides();
