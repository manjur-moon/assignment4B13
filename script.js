
// Data Section


let jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    description: "Build accessible and high-performance web interfaces using modern JavaScript frameworks.",
    status: "Not Applied"
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "UI Designer",
    location: "New York, USA",
    type: "Contract",
    salary: "$60,000 - $75,000",
    description: "Design clean and intuitive UI for SaaS products.",
    status: "Not Applied"
  },
  {
    id: 3,
    companyName: "CloudNet Systems",
    position: "Backend Developer",
    location: "Berlin, Germany",
    type: "Full-time",
    salary: "$80,000 - $100,000",
    description: "Develop scalable APIs and manage database systems.",
    status: "Not Applied"
  },
  {
    id: 4,
    companyName: "NextGen Labs",
    position: "React Developer",
    location: "Remote",
    type: "Part-time",
    salary: "$50/hr",
    description: "Build dynamic React applications with optimized performance.",
    status: "Not Applied"
  },
  {
    id: 5,
    companyName: "TechNova",
    position: "Software Engineer",
    location: "Toronto, Canada",
    type: "Full-time",
    salary: "$85,000 - $110,000",
    description: "Work on scalable cloud-based applications.",
    status: "Not Applied"
  },
  {
    id: 6,
    companyName: "Innova IT",
    position: "DevOps Engineer",
    location: "London, UK",
    type: "Full-time",
    salary: "$95,000 - $120,000",
    description: "Manage CI/CD pipelines and cloud infrastructure.",
    status: "Not Applied"
  },
  {
    id: 7,
    companyName: "Bright Digital",
    position: "Full Stack Developer",
    location: "Sydney, Australia",
    type: "Full-time",
    salary: "$90,000 - $115,000",
    description: "Build end-to-end web applications using MERN stack.",
    status: "Not Applied"
  },
  {
    id: 8,
    companyName: "secure tech",
    position: "Cybersecurity Analyst",
    location: "Austin, USA",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    description: "Monitor and secure enterprise network systems.",
    status: "Not Applied"
  }
];

let activeTab = "all";


// DOM Elements


const jobContainer = document.getElementById("jobContainer");
const emptyState = document.getElementById("emptyState");

const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const jobCount = document.getElementById("jobCount");

const tabButtons = document.querySelectorAll(".tab-btn");


// Utility Functions


// Count based on status
function getInterviewJobs() {
  return jobs.filter(job => job.status === "Interview");
}

function getRejectedJobs() {
  return jobs.filter(job => job.status === "Rejected");
}

// Update Dashboard
function updateCounts() {
  const interviewJobs = getInterviewJobs();
  const rejectedJobs = getRejectedJobs();

  totalCount.innerText = jobs.length;
  interviewCount.innerText = interviewJobs.length;
  rejectedCount.innerText = rejectedJobs.length;

  if (activeTab === "all") jobCount.innerText = jobs.length;
  if (activeTab === "interview") jobCount.innerText = interviewJobs.length;
  if (activeTab === "rejected") jobCount.innerText = rejectedJobs.length;
}


// Render Section


function renderJobs() {

  jobContainer.innerHTML = "";

  let filteredJobs = [];

  if (activeTab === "all") filteredJobs = jobs;
  if (activeTab === "interview") filteredJobs = getInterviewJobs();
  if (activeTab === "rejected") filteredJobs = getRejectedJobs();

  if (filteredJobs.length === 0) {
    emptyState.classList.remove("hidden");
    updateCounts();
    return;
  }

  emptyState.classList.add("hidden");

  filteredJobs.forEach(job => {

    const card = document.createElement("div");
    card.className = "bg-white border rounded-lg p-6 flex flex-col md:flex-row justify-between gap-6";

    card.innerHTML = `
      <div class="space-y-3">
        <h3 class="font-semibold text-lg">${job.companyName}</h3>
        <p class="text-sm text-gray-600">${job.position}</p>

        <div class="text-sm text-gray-500">
          ${job.location} · ${job.type} · ${job.salary}
        </div>

        <p class="text-sm text-gray-600">${job.description}</p>
        <p class="text-xs text-gray-400">${job.status}</p>

        <div class="flex gap-3 pt-2">
          <button data-id="${job.id}" class="interview-btn bg-green-100 text-green-700 px-3 py-1 rounded text-sm">
            Interview
          </button>
          <button data-id="${job.id}" class="rejected-btn bg-red-100 text-red-600 px-3 py-1 rounded text-sm">
            Rejected
          </button>
        </div>
      </div>

      <div>
        <button data-id="${job.id}" class="delete-btn text-red-500 text-sm">Delete</button>
      </div>
    `;

    jobContainer.appendChild(card);
  });

  updateCounts();
}


// Status Change


function updateStatus(id, newStatus) {
  const job = jobs.find(job => job.id === id);
  if (!job) return;

  job.status = newStatus;
}


// Event Delegation


document.querySelector("main").addEventListener("click", function (event) {

  const id = Number(event.target.dataset.id);

  if (event.target.classList.contains("interview-btn")) {
    updateStatus(id, "Interview");
    renderJobs();
  }

  if (event.target.classList.contains("rejected-btn")) {
    updateStatus(id, "Rejected");
    renderJobs();
  }

  if (event.target.classList.contains("delete-btn")) {
    jobs = jobs.filter(job => job.id !== id);
    renderJobs();
  }
});


// Tab Switching


tabButtons.forEach(button => {
  button.addEventListener("click", function () {

    tabButtons.forEach(btn => {
      btn.classList.remove("bg-blue-600", "text-white");
      btn.classList.add("bg-gray-200");
    });

    this.classList.add("bg-blue-600", "text-white");
    this.classList.remove("bg-gray-200");

    activeTab = this.id.replace("-tab", "");
    renderJobs();
  });
});

// Initial Render
renderJobs();