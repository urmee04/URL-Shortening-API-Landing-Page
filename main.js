// DOMContentLoaded event to ensure all HTML is loaded before running script
document.addEventListener("DOMContentLoaded", function () {
  const urlInput = document.getElementById("url-input");
  const errMessage = document.getElementById("error-message");
  const activateBtn = document.getElementById("activate-btn");
  const linksHistory = document.getElementById("link-history");
});

// Load stored links on page load
const savedLinks = JSON.parse(localStorage.getItem("shortenedLinks")) || [];
savedLinks.forEach((link) => displayToLinkHistory(link.original, link.short));

// Function to get and trim the input value from the URL field
function getUrlInput() {
  return urlInput.value.trim();
}

// Function to validate the given URL using the built-in URL constructor
// Returns true if valid, otherwise false
function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
