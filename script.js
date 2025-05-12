document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});

document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
});

const box = document.getElementById("animate-box");
box.addEventListener("click", () => {
  box.classList.add("animate");
  box.addEventListener("animationend", () => {
    box.classList.remove("animate");
  }, { once: true });
});
