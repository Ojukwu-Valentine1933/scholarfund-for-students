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
window.addEventListener('scroll', function() {
  var video = document.getElementById('myVideo');
  var videoContainer = document.querySelector('.video-container');
  var rect = videoContainer.getBoundingClientRect();
  
  // If the video container is not in the viewport, pause the video
  if (!(rect.bottom >= 0 && rect.top <= window.innerHeight)) {
      video.pause();
  }
});

