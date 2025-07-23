import BITLY_API_KEY from "./apiKey";

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

// Async function to shorten a given URL using the Bitly API
async function shortenUrl(urlLink) {
  const apiUrl = `https://api-ssl.bitly.com/v4/shorten`;

  try {
    // Send POST request to Bitly API with the long URL in the request body
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${BITLY_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ long_url: urlLink }),
    });

    if (res.ok) {
      const data = await res.json();
      // Display the shortened link and original link in history
      displayToLinkHistory(urlLink, data.link);
      // Save the link pair to local storage
      saveToLocalStorage(urlLink, data.link);
    } else {
      // Log API errors if response not successful
      console.error("Failed to shorten:", await res.json());
    }
  } catch (error) {
    // Catch and log network errors
    console.error("Network error:", error);
  }
}
