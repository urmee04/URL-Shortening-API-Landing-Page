//DOMContentLoaded event to ensure all HTML is loaded before running script
document.addEventListener("DOMContentLoaded", function () {
  const urlInput = document.getElementById("url-input");
  const errMessage = document.getElementById("error-message");
  const activateBtn = document.getElementById("activate-btn");
  const linksHistory = document.getElementById("link-history");
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

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
          Authorization: `Bearer db70f8460a21849ff4715f1325cc5fb312a714ba`,
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
      //Catch and log network errors
      console.error("Network error:", error);
    }
  }

  function displayToLinkHistory(originalLink, shortLink) {
    const linkItem = document.createElement("div");
    linkItem.classList.add("item");

    linkItem.innerHTML = `
      <div class="link-item-content">
    <p class="original-link">${originalLink}</p>
    <div class="link-actions">
      <a href="${shortLink}" target="_blank" class="short-link">${shortLink}</a>
      <button class="copy-link-btn">Copy</button>
    </div>
  </div>
    `;
    //Add latest first in the list
    linksHistory.prepend(linkItem);

    const copyBtn = linkItem.querySelector(".copy-link-btn");
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(shortLink);
      copyBtn.textContent = "copied!";
      copyBtn.style.backgroundColor = "#3b3054";
      setTimeout(() => {
        copyBtn.textContent = "copy";
        copyBtn.style.backgroundColor = "#2acfcf";
      }, 1500);
    });
  }

  /**
   * Saves a pair of original and shortened links to localStorage.
   * - Retrieves the existing array of links from localStorage (or initializes an empty one).
   * - Adds the new link pair to the array.
   * - Stores the updated array back into localStorage.
   */

  function saveToLocalStorage(original, short) {
    const saved = JSON.parse(localStorage.getItem("shortenedLinks")) || [];
    saved.push({ original, short });
    localStorage.setItem("shortenedLinks", JSON.stringify(saved));
  }
  //Toggle the menu for both links and auth buttons
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  activateBtn.addEventListener("click", () => {
    const userURL = getUrlInput();
    //Check if input is empty
    if (!userURL) {
      errMessage.textContent = "Please add a link";
      errMessage.style.display = "block";
      urlInput.classList.add("error");
      return;
    }
    //Check if the URL is missing a protocol and add it
    if (!userURL.startsWith("http://") && !userURL.startsWith("https://")) {
      userURL = `https://${userURL}`;
    }
    //Validate URL format
    if (!isValidURL(userURL)) {
      errMessage.textContent = "Please enter a valid URL";
      errMessage.style.display = "block";
      urlInput.classList.add("error");
      return;
    }
    //Clear error and proceed with shortening
    errMessage.style.display = "none";
    urlInput.classList.remove("error");
    shortenUrl(userURL);
    urlInput.value = "";
  });
});
