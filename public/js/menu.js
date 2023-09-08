const closeButton = document.getElementById("burger");
const menu = document.querySelector(".mobile-nav-container");

closeButton.addEventListener("click", () => {
  // Toggle the class on the menu element
  menu.classList.toggle("menu-open");

  // Toggle the class on the burger icon
  closeButton.classList.toggle("ri-close-line");
  closeButton.classList.toggle("ri-menu-line");
});


// Get all buttons with the 'btn' class
const buttons = document.querySelectorAll(".btn");

// Add click event listeners to each button
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Get the value of the 'data-redirect' attribute
    const redirectUrl = button.getAttribute("data-redirect");

    // Check if a redirect URL is specified
    if (redirectUrl) {
      // Add a 500ms (half-second) delay before the redirect
      setTimeout(function () {
        // Redirect to the desired URL
        window.location.href = redirectUrl;
      }, 500); // 500 milliseconds (half-second)
    }
  });
});
