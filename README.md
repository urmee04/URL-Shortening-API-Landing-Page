### Project: HTML, CSS, and JavaScript - URL Shortening API Landing Page

This project aims to create a landing page that integrates with the [bitlyAPI](https://dev.bitly.com/) to shorten URLs, featuring a list of shortened links and the ability to copy them to the clipboard.

#### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
- The `input` field is empty

---

#### Project structure

url-shortening-api-master/
├── design/ # Design assets
├── images/ # Images used in the project (logos, icons, etc.)
├── index.html # Main HTML file
├── main.js # JavaScript file for functionality
├── styles.css # CSS file for styling
├── .gitignore # Git ignore rules
└── README.md # Project description and instructions

---

#### Live Demo Link

- [URL Shortening API Landing Page](https://url-shortening-api-landing-page-ra.netlify.app/)

---

#### Project Reflection

Developing the Bitly URL Shortener project was a valuable learning experience that allowed me to apply my knowledge of JavaScript, APIs, and frontend development while also exploring best practices for security and deployment.

My development process began with designing the core functionality—taking a user-provided URL and shortening it using Bitly’s API. I implemented functions to validate the URL input, send API requests asynchronously, and dynamically update the DOM to display the shortened link. A key feature I included was a "copy" button, which uses the Clipboard API to enhance user interaction and convenience.

One of the key challenges I encountered was securing the Bitly API key. Initially, I stored the key directly in my JavaScript file, but I quickly realized this approach is unsafe for public deployments, as the key becomes visible in the browser’s developer tools. I am currently working on resolving this issue by setting up a Netlify serverless function that will handle the API request securely on the backend. This solution will allow me to store the API key in environment variables and prevent it from being exposed in the client-side code. Once implemented, this will improve the security of the application and follow best practices for working with third-party APIs

Another challenge was styling the UI to match a reference image, especially ensuring that the "copied!" button feedback felt responsive and consistent with the design. I used custom styling and setTimeout() to show temporary success messages after copying a link.

If I had more time, I would implement link click tracking, user authentication, and a backend database to store user-specific link histories. Overall, this project strengthened my understanding of working with RESTful APIs, improving UX, and deploying secure web applications.
