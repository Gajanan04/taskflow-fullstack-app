# TaskFlow Fullstack App

A modern full-stack Task Management application built using React.js, Node.js, Express.js, MongoDB, and JWT Authentication.

---

# 🚀 Live Demo

Frontend:
https://taskflow-fullstack-app-green.vercel.app

Backend:
https://taskflow-fullstack-app-sc8y.onrender.com

GitHub Repository:
https://github.com/Gajanan04/taskflow-fullstack-app

---

# 📌 Features

## Authentication

* User Registration
* User Login
* JWT Authentication
* Password Hashing using bcryptjs
* Protected Routes

## Task Management

* Create Task
* Get Tasks
* Update Task
* Delete Task

## Security

* JWT Token Protection
* Role-based Middleware
* Input Validation
* Error Handling

## Frontend

* Modern UI Design
* Responsive Layout
* Dashboard Interface
* API Integration

## Backend

* REST APIs
* API Versioning
* MongoDB Atlas Database
* Logging using Morgan
* Modular Project Structure

---

# 🛠 Tech Stack

## Frontend

* React.js
* Axios
* CSS3

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* Morgan

## Deployment

* Vercel (Frontend)
* Render (Backend)

---

# 📂 Project Structure

taskflow-fullstack-app/
│
├── frontend/
│ ├── src/
│ ├── public/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
├── server.js
├── package.json

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/Gajanan04/taskflow-fullstack-app.git
```

## Install Backend Dependencies

```bash
npm install
```

## Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

# ▶️ Run Backend

```bash
npm run dev
```

---

# ▶️ Run Frontend

```bash
cd frontend
npm start
```

---

# 🔐 Environment Variables

Create a `.env` file in root directory:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=5000
```

---

# 📮 API Endpoints

## Authentication

### Register

POST `/api/v1/auth/register`

### Login

POST `/api/v1/auth/login`

---

## Tasks

### Create Task

POST `/api/v1/tasks`

### Get Tasks

GET `/api/v1/tasks`

### Update Task

PUT `/api/v1/tasks/:id`

### Delete Task

DELETE `/api/v1/tasks/:id`

---

# 📘 API Documentation

Postman Collection included in repository.

---

# 📈 Scalability Notes

This project follows a scalable modular architecture:

* Separate controllers, routes, middleware
* JWT-based authentication
* Easily extendable modules
* Cloud database integration
* Deployment-ready structure

Future improvements:

* Redis caching
* Docker support
* Advanced state management
* CI/CD pipelines

---

# 👨‍💻 Author

Gajanan Ghirnikar

---
