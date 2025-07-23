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
