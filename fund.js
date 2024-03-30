// Get all toggle buttons
const toggleBtns = document.querySelectorAll(".toggleBtn");

// Add click event listeners to all toggle buttons
toggleBtns.forEach((toggleBtn, index) => {
  toggleBtn.addEventListener("click", function() {
    // Get the corresponding content for this button
    const content = document.querySelectorAll(".content")[index];
    
    // Toggle the visibility of the content
    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
      toggleBtn.textContent = "-";
    } else {
      content.classList.add("hidden");
      toggleBtn.textContent = "+";
    }
  });
});


