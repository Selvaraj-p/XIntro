const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
const dropdownWrapper = document.querySelector(".nav-link");
const dropdownBtn = dropdownWrapper.querySelector("button");
const dropdownList = dropdownWrapper.querySelector(".dropdown-list");

// Open mobile menu
openMenuBtn.addEventListener("click", () => {
  nav.classList.add("active");
  overlay.classList.add("active");

  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "block";
});

// Close mobile menu
closeMenuBtn.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");

  closeMenuBtn.style.display = "none";
  openMenuBtn.style.display = "block";
});

// Dropdown menu toggle
dropdownBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent bubbling

  const isOpen = dropdownWrapper.classList.contains("link-open");

  // Close all other dropdowns (if any)
  document.querySelectorAll(".nav-link").forEach((item) => {
    item.classList.remove("link-open");
    item.querySelector(".dropdown-list")?.classList.remove("visible");
  });

  // Toggle current
  if (!isOpen) {
    dropdownWrapper.classList.add("link-open");
    dropdownList.classList.add("visible");
  }
});

// Optional: Click outside to close dropdown
document.addEventListener("click", () => {
  dropdownWrapper.classList.remove("link-open");
  dropdownList.classList.remove("visible");
});
