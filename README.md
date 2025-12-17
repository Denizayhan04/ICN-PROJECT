# ICN-PROJECT

# Web Based API Client

## Project Overview and Inspiration

When I decided to work on this project, I immediately thought of creating a web-client version of the Postman application.

![Postman Interface](https://github.com/Denizayhan04/ICN-PROJECT/blob/main/screenshots/resim2postman.png)

Postman is a popular tool for testing APIs. It allows users to input parameters such as the HTTP method and URL, and then send the request with a single click.

Normally, these operations are performed via the terminal using command-line tools like cURL. However, Postman visualizes this process, making it much easier to understand and manage.

![cURL Example](https://github.com/Denizayhan04/ICN-PROJECT/blob/main/screenshots/curl.png)

By building this application for the web, we eliminate the need to download and install software. This also provides platform independence, allowing the tool to run on any device with a browser.

## Development Process

### 1. Interface Design (HTML & CSS)
I started by setting up the project folder structure. Then, I built the visual interface I had in mind using HTML and CSS.

Since this is a functional tool rather than a content-heavy website, I did not focus on SEO features during the development of the HTML structure. The priority was a clean, usable interface.

![Website Interface](https://github.com/Denizayhan04/ICN-PROJECT/blob/main/screenshots/web.png)

### 2. Functionality (JavaScript)
After the design was in place, I started using JavaScript to make the site functional.

**DOM Manipulation (ui.js)**
I created a `ui.js` file specifically for DOM manipulations. As the name suggests, this file does not contain any business logic. It is used entirely to control the interface elements and handle user inputs.

**Refactoring and Architecture**
Initially, I completed the project by calling all functions within a single `main.js` file. However, to ensure the project was modular and easy to read, I refactored the code structure:

* **utils.js:** I moved helper functions like `isValidJson` and `formatJson` here.
* **api.js:** I moved the `sendRequest` function here. This function is the backbone of the application, handling the actual communication with the server.
* **main.js:** This file now acts as the central controller, importing logic from the other files.

This refactoring process made the codebase significantly cleaner, more modular, and easier to maintain.

![Code Structure](path/to/code-screenshot.png)

## User Guide

Follow the steps below to operate the application:

1. **Method Selection:** Select the HTTP method from the top-left menu (e.g., GET to retrieve data, POST to send data).
2. **URL Input:** Enter the target API endpoint URL into the text box (e.g., `https://jsonplaceholder.typicode.com/todos/1`).
3. **Body Data (Optional):** If you selected POST or PUT, enter the payload data in JSON format in the left panel.
4. **Send:** Click the "SEND" button to initiate the request.
5. **Result:** You can view the server response, status code, and response time in the right panel.
6. **Download:** You can save the request history to your computer using the "Download History" button at the bottom of the page.
