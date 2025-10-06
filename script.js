const toggleBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

toggleBtn.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  html.setAttribute("data-theme", currentTheme === "light" ? "dark" : "light");
});
