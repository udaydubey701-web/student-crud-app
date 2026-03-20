# Student Management System (CRUD Application)

A fully functional web-based CRUD (Create, Read, Update, Delete) application built as a Web Development Minor Project. This application allows users to manage student records efficiently through a clean and responsive user interface.

## 🚀 Overview
This project demonstrates the core concepts of Full-Stack development by connecting a frontend user interface to a backend server. It performs real-time data operations on a persistent storage file.

## ✨ Features
- **Create**: Add new students to the list with a name.
- **Read**: View the complete list of students fetched from the server.
- **Update**: (Base structure ready for future expansion).
- **Delete**: Remove student records permanently from the database.

## 🛠️ Tech Stack
- **Frontend**: 
  - **HTML5**: For the structural layout.
  - **CSS3**: For custom styling and a modern user interface.
  - **JavaScript (Vanilla)**: For handling DOM manipulation and API calls using `fetch()`.
- **Backend**:
  - **Node.js**: The runtime environment.
  - **Express.js**: A minimal web framework used to create the REST API.
- **Database**:
  - **JSON File (`data.json`)**: Used as a local, lightweight database to store student information persistently.

## 📂 Project Structure
- `server.js`: The main backend file containing API routes and server logic.
- `index.html`: The frontend user interface.
- `script.js`: Contains logic to communicate with the backend.
- `style.css`: Styles for the application.
- `data.json`: The storage file where student data is saved.

## ⚙️ How to Run Locally
1. Clone the repository: `git clone https://github.com/udaydubey701-web/student-crud-app`
2. Open the terminal in the project folder.
3. Install dependencies: `npm install`
4. Run the server: `node server.js`
5. Open your browser and go to: `http://localhost:3000`

## 🎓 Learning Outcomes
- Understanding the Client-Server model.
- Implementing RESTful API endpoints (GET, POST, DELETE).
- Handling JSON data in a local file system.
- Connecting a frontend interface to a backend API using Fetch.
