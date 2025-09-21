// Scroll Animation
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".slide-up");
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// Add visible class with delay for smooth appearance
document.querySelectorAll(".slide-up").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.8s ease-out";
});

document.addEventListener("scroll", () => {
  document.querySelectorAll(".slide-up").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});
