Rule Engine User Information Project
A simple web application that allows users to submit form data, which is then matched against a JSON file (users.json). Upon form submission, the server reads the form data, retrieves matching user information from the JSON file, and displays the results on the frontend.

Features
Form input for age, department, and experience.
Backend API to retrieve matching user information from a JSON file.
Real-time display of matched user details or an appropriate message if no match is found.
Folder Structure
php
Copy code
rule-engine/
│
├── public/
│   ├── index.html        # Frontend HTML
│   ├── style.css         # Frontend CSS
│   ├── app.js            # Frontend JavaScript
│   ├── users.json        # JSON file with user data
│
├── server.js             # Node.js backend server
├── package.json          # Node.js project configuration
└── README.md             # Project instructions
Prerequisites
Node.js: Ensure you have Node.js installed. You can download it from https://nodejs.org/.
Setup Instructions
Clone the Repository: Clone this repository to your local machine using:

bash
Copy code
git clone <repository-url>
cd rule-engine
Install Dependencies: Run the following command to install the required dependencies (Express and Body-Parser):

bash
Copy code
npm install
Folder Setup: Ensure the users.json file is inside the public folder. It contains sample data for user information that will be matched based on the form input.

Running the Project
Start the Server: Start the server using the following command:

bash
Copy code
node server.js
The server will run on http://localhost:3000.

Access the Application: Open your browser and go to:

arduino
Copy code
http://localhost:3000
