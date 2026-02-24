# Scalable Web App with Authentication & Dashboard

## Overview

This project is a full-stack scalable web application built with **React.js**, **Node.js**, **Express**, and **SQLite**. It provides secure authentication using JWT, a protected dashboard, and full CRUD functionality for managing tasks. The application follows best practices for security, modular architecture, and scalability.

---

## Tech Stack

### Frontend

* React.js
* TailwindCSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt (Password hashing)

### Database

* SQLite

---

## Features

### Authentication

* User registration with hashed passwords
* Secure login with JWT token
* Logout functionality
* Protected routes

### Dashboard

* View logged-in user profile
* Create tasks
* View tasks
* Update tasks
* Delete tasks
* Search and filter tasks

### Security

* Password hashing using bcrypt
* JWT-based authentication
* Protected backend routes
* Token validation middleware

### UI/UX

* Responsive design using TailwindCSS
* Clean and modern dashboard layout
* User-friendly forms

---

## Project Structure

```
primetrade_assignment/
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── tasks.js
│   │   └── profile.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   └── database.db
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── Dashboard.js
│   │   ├── components/
│   │   │   └── ProtectedRoute.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

## Installation and Setup

### Backend Setup

Navigate to backend folder:

```
cd backend
```

Install dependencies:

```
npm install
```

Start backend server:

```
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

### Frontend Setup

Navigate to frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start frontend:

```
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## API Endpoints

### Authentication

POST `/auth/signup`
Register new user

POST `/auth/login`
Login user and receive JWT

---

### Profile

GET `/profile`
Fetch logged-in user profile

---

### Tasks

GET `/tasks`
Get all tasks

POST `/tasks`
Create new task

PUT `/tasks/:id`
Update task

DELETE `/tasks/:id`
Delete task

---

## Security Implementation

* Passwords hashed using bcrypt
* JWT tokens used for authentication
* Protected backend routes using middleware
* Tokens stored securely in browser localStorage

---

