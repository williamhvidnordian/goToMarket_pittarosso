// Live ur i statuslinjen
function updateClock() {
  const now = new Date();
  const h = now.getHours();
  const m = String(now.getMinutes()).padStart(2, "0");
  document.getElementById("clock").textContent = `${h}:${m}`;
}
updateClock();
setInterval(updateClock, 10_000);

// Skaler telefonen ned, hvis browservinduet er for lavt (fx på en laptop)
const phone = document.querySelector(".phone");
function fitPhone() {
  if (window.innerWidth <= 500) { phone.style.zoom = ""; return; }
  const needed = 844 + 24 + 80; // skærm + bezel + luft
  phone.style.zoom = Math.min(1, window.innerHeight / needed);
}
fitPhone();
window.addEventListener("resize", fitPhone);

// Selve app-logikken bygger vi her i næste trin.
