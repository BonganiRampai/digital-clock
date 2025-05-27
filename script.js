console.log("Welcome to JavaScript");

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zeroes
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const currentTime = `${hours}:${minutes}:${seconds}`;

  // Check if element exists before updating it
  const clock = document.getElementById("clock");
  if (clock) {
    clock.textContent = currentTime;
  } else {
    console.error("Clock element not found!");
  }
}

// Run once immediately
updateClock();

// Then run every second
setInterval(updateClock, 1000);

// Load user's theme preference if saved
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light-mode");
}

const toggle = document.getElementById("toggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme");
});

