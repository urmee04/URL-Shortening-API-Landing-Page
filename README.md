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

```bash
url-shortening-api-master/
├── design/ # Design assets
├── images/ # Images used in the project (logos, icons, etc.)
├── index.html # Main HTML file
├── main.js # JavaScript file for functionality
├── styles.css # CSS file for styling
├── .gitignore # Git ignore rules
└── README.md # Project description and instructions
```

---

#### Live Demo Link

- [URL Shortening API Landing Page](https://url-shortening-api-landing-page-ra.netlify.app/)

---

#### Project Reflection

Developing the Bitly URL Shortener project was a valuable learning experience that allowed me to apply my knowledge of JavaScript, APIs, and frontend development while also exploring best practices for security and deployment.

My development process began with designing the core functionality — taking a user-provided URL and shortening it using Bitly’s API. I implemented functions to validate the URL input, send API requests asynchronously, and dynamically update the DOM to display the shortened link. A key feature I included was a "copy" button, which uses the Clipboard API to enhance user interaction and convenience.

I faced several challenges while implementing the project. One of the main difficulties was styling the UI to match the reference image for both desktop and mobile views, as the layouts were slightly different. I tested all the default device views on my laptop using developer tools. I also used custom styling and setTimeout() to display temporary success messages after copying a link.

If I had more time, I would implement link click tracking, user authentication, and a backend database to store user-specific link histories. Overall, this project strengthened my understanding of working with RESTful APIs, improving UX, and deploying secure web applications.

In the current implementation, the key is stored directly in the JavaScript file, which poses a security risk in public deployments since it is accessible via browser developer tools. If given more time, I plan to implement a Netlify serverless function to handle API requests on the backend. This enhancement would allow me to store the API key in environment variables, ensuring it remains hidden from client-side code. Implementing this solution would significantly improve application security and align with best practices for working with third-party APIs
