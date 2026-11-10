const guides = [
  {category:"Earthquake", title:"During an Earthquake", text:"Drop, Cover, and Hold On. Stay away from windows and protect your head and neck.", source:"https://www.unicef.org/philippines/emergency-preparedness-tips-earthquakes", sourceLabel:"UNICEF Philippines"},
  {category:"Earthquake", title:"After an Earthquake", text:"Watch for aftershocks. When it is safe, leave damaged buildings, avoid elevators, and follow official instructions.", source:"https://www.unicef.org/philippines/emergency-preparedness-tips-earthquakes", sourceLabel:"UNICEF Philippines"},
  {category:"Earthquake", title:"Before an Earthquake", text:"Secure heavy furniture, identify safe spots and exits, and take part in school or community earthquake drills.", source:"https://quezoncity.gov.ph/departments/quezon-city-disaster-and-risk-reduction-management-office/", sourceLabel:"Quezon City Government"},
  {category:"Fire", title:"Fire Safety", text:"Leave the building using a safe exit. Do not use elevators. Call the local fire service from a safe place.", source:"https://quezoncity.gov.ph/departments/quezon-city-disaster-and-risk-reduction-management-office/", sourceLabel:"Quezon City Government"},
  {category:"Fire", title:"If Smoke Is Present", text:"Stay low while moving toward a safe exit. Do not stop to collect belongings, and never go back inside a burning building.", source:"https://www.deped.gov.ph/wp-content/uploads/Q2_LAs_Health10_08.pdf", sourceLabel:"Department of Education"},
  {category:"Flood", title:"Flood Preparedness", text:"Move to higher ground and never walk or drive through floodwater.", source:"https://www.pagasa.dost.gov.ph/learning-tools/floods", sourceLabel:"PAGASA"},
  {category:"Flood", title:"After a Flood", text:"Return only when authorities say it is safe. Avoid floodwater and do not use wet electrical equipment until it has been checked.", source:"https://quezoncity.gov.ph/departments/quezon-city-disaster-and-risk-reduction-management-office/", sourceLabel:"Quezon City Government"},
  {category:"Typhoon", title:"Typhoon Preparedness", text:"Monitor official weather updates, prepare essential supplies, and follow evacuation advice.", source:"https://www.unicef.org/philippines/emergency-preparedness-tips-typhoons", sourceLabel:"UNICEF Philippines"},
  {category:"Typhoon", title:"During a Typhoon", text:"Stay indoors in a secure place, keep listening to official advisories, and follow local evacuation instructions.", source:"https://www.unicef.org/philippines/emergency-preparedness-tips-typhoons", sourceLabel:"UNICEF Philippines"},
  {category:"Landslide", title:"Landslide Awareness", text:"Know whether your area is landslide-prone. Watch for official warnings and evacuate when instructed by local authorities.", source:"https://www.unicef.org/philippines/emergency-preparedness-tips-families-and-children", sourceLabel:"UNICEF Philippines"},
  {category:"Tsunami", title:"Tsunami Safety", text:"If you are near the coast and feel a strong earthquake or receive an official tsunami warning, move inland or to higher ground immediately.", source:"https://www.unicef.org/philippines/emergency-preparedness-tips-earthquakes", sourceLabel:"UNICEF Philippines"},
  {category:"Volcanic Eruption", title:"Volcanic Ash Safety", text:"Follow PHIVOLCS and local government advisories. Stay away from danger zones and follow evacuation instructions.", source:"https://www.unicef.org/philippines/ready-ba-ang-pamilya-case-emergencies-and-disasters", sourceLabel:"UNICEF Philippines"},
  {category:"Emergency Preparedness", title:"Prepare an Emergency Go-Bag", text:"Prepare drinking water, ready-to-eat food, a flashlight, a first-aid kit, personal medicines, a power bank, and copies of important documents.", source:"https://quezoncity.gov.ph/qcitizen-guides/how-to-prepare-a-go-bag/", sourceLabel:"Quezon City Government"},
  {category:"Emergency Preparedness", title:"Make a Family Emergency Plan", text:"Agree on evacuation routes, a meeting place, emergency contacts, and how family members will contact one another.", source:"https://www.unicef.org/philippines/emergency-preparedness-tips-families-and-children", sourceLabel:"UNICEF Philippines"},
  {category:"Emergency Preparedness", title:"Follow Official Advisories", text:"Get updates from trusted government agencies and your local government. Do not share unverified emergency information.", source:"https://www.unicef.org/philippines/emergency-preparedness-tips-families-and-children", sourceLabel:"UNICEF Philippines"},
  {category:"First Aid", title:"When Someone Is Injured", text:"Keep yourself safe, call trained responders, and follow instructions from qualified first-aid personnel. Do not attempt care beyond your training.", source:"https://quezoncity.gov.ph/departments/quezon-city-disaster-and-risk-reduction-management-office/", sourceLabel:"Quezon City Government"}
]

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
    const source = document.createElement("a");
    source.className = "guide-source";
    source.href = guide.source;
    source.target = "_blank";
    source.rel = "noopener noreferrer";
    source.textContent = `Learn more: ${guide.sourceLabel}`;
    card.append(title, text, source);
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

const quizQuestions = [
  {
    question: "What should you do during an earthquake while indoors?",
    choices: ["Run toward the windows", "Drop, Cover, and Hold On", "Use the elevator"],
    answer: 1,
    explanation: "Correct! Drop, Cover, and Hold On. Protect your head and neck."
  },
  {
    question: "What should you do if you see a fire in a building?",
    choices: ["Hide inside a room", "Use the elevator", "Leave using a safe exit and alert others"],
    answer: 2,
    explanation: "Correct! Leave using a safe exit and contact the fire service from a safe place."
  },
  {
    question: "What is the safest action during a flood?",
    choices: ["Move to higher ground", "Walk through moving floodwater", "Play near the flooded area"],
    answer: 0,
    explanation: "Correct! Move to higher ground and stay away from floodwater."
  },
  {
    question: "Where should you get updates during a typhoon?",
    choices: ["Unverified social media posts", "Official weather and local government advisories", "Rumors from strangers"],
    answer: 1,
    explanation: "Correct! Follow official weather and local government advisories."
  },
  {
    question: "Which item is useful in an emergency go-bag?",
    choices: ["A glass decoration", "A large television", "Drinking water and a flashlight"],
    answer: 2,
    explanation: "Correct! Drinking water and a flashlight are useful emergency supplies."
  }
];

let currentQuestion = 0;
let quizScore = 0;
let questionChecked = false;
const quizQuestion = document.getElementById("quizQuestion");
const quizChoices = document.getElementById("quizChoices");
const quizProgress = document.getElementById("quizProgress");
const quizResult = document.getElementById("quizResult");
const checkAnswerButton = document.getElementById("checkAnswer");
const nextQuestionButton = document.getElementById("nextQuestion");

function showQuizQuestion() {
  const item = quizQuestions[currentQuestion];
  quizProgress.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
  quizQuestion.innerHTML = `<b>${item.question}</b>`;
  quizChoices.innerHTML = "";
  item.choices.forEach((choice, index) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = String(index);
    label.append(radio, document.createTextNode(` ${choice}`));
    quizChoices.appendChild(label);
  });
  quizResult.textContent = "";
  quizResult.style.color = "";
  questionChecked = false;
  checkAnswerButton.hidden = false;
  nextQuestionButton.hidden = true;
  checkAnswerButton.disabled = false;
}

checkAnswerButton.addEventListener("click", () => {
  if (questionChecked) return;
  const answer = document.querySelector('input[name="answer"]:checked');
  if (!answer) {
    quizResult.textContent = "Please choose an answer first.";
    quizResult.style.color = "#073565";
    return;
  }

  questionChecked = true;
  const item = quizQuestions[currentQuestion];
  if (Number(answer.value) === item.answer) {
    quizScore++;
    quizResult.textContent = item.explanation;
    quizResult.style.color = "green";
  } else {
    quizResult.textContent = `Not quite. Correct answer: ${item.choices[item.answer]}.`;
    quizResult.style.color = "#c71925";
  }
  checkAnswerButton.hidden = true;
  nextQuestionButton.hidden = false;
  nextQuestionButton.textContent = currentQuestion === quizQuestions.length - 1 ? "See My Score" : "Next Question →";
});

nextQuestionButton.addEventListener("click", () => {
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    showQuizQuestion();
  } else {
    quizProgress.textContent = "Quiz completed!";
    quizQuestion.innerHTML = `<b>You got ${quizScore} out of ${quizQuestions.length} correct.</b>`;
    quizChoices.innerHTML = "";
    quizResult.textContent = quizScore === quizQuestions.length
      ? "Excellent work! You answered all questions correctly."
      : "Good effort! Review the safety guides and try again.";
    quizResult.style.color = "#073565";
    checkAnswerButton.hidden = true;
    nextQuestionButton.textContent = "Try Again";
    nextQuestionButton.hidden = false;
    nextQuestionButton.onclick = () => {
      currentQuestion = 0;
      quizScore = 0;
      nextQuestionButton.onclick = null;
      showQuizQuestion();
    };
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

showQuizQuestion();
