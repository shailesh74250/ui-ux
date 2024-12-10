// Get modal element
const modal = document.getElementById("myModal");

// Get button to open the modal
const openModalBtn = document.getElementById("openModal");

// Get close button (X)
const closeBtn = document.querySelector(".close");

// Open modal when button is clicked
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal when 'X' is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
