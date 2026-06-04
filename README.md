<p align="center">
  <h1 align="center">📅 Full Stack Booking Appointment App</h1>
</p>

<p align="center">
  <h3 align="center">Appointment Booking System using Node.js, Express.js, MySQL & Sequelize ORM</h3>
</p>

<p align="center">
  A Full Stack Web Application that allows users to book appointments, view all appointments, and delete appointments using a modern MVC architecture.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-green" />
  <img src="https://img.shields.io/badge/Express.js-Framework-black" />
  <img src="https://img.shields.io/badge/MySQL-Database-blue" />
  <img src="https://img.shields.io/badge/Sequelize-ORM-teal" />
  <img src="https://img.shields.io/badge/MVC-Architecture-orange" />
</p>

---

# 📖 Overview

This project demonstrates how to build a Full Stack Appointment Booking Application using:

* Node.js
* Express.js
* MySQL
* Sequelize ORM
* MVC Architecture
* HTML, CSS, JavaScript

The application allows users to:

✅ Add Appointment Users

✅ View All Appointments

✅ Delete Appointments

✅ Store Data in MySQL Database

✅ Connect Frontend with Backend APIs

✅ Use Sequelize ORM instead of raw SQL queries

✅ Follow MVC Architecture

---

# 🛠️ Tech Stack

| Technology   | Purpose             |
| ------------ | ------------------- |
| Node.js      | Runtime Environment |
| Express.js   | Backend Framework   |
| MySQL        | Relational Database |
| Sequelize    | ORM                 |
| HTML         | Frontend Structure  |
| CSS          | Styling             |
| JavaScript   | Frontend Logic      |
| Git & GitHub | Version Control     |

---

# 📂 Project Structure

```text
booking-appointment-app/
│
├── controllers/
│   └── userController.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── userRoutes.js
│
├── utils/
│   └── db.js
│
├── public/
│   ├── images
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

# ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yashav-shukla/booking-appointment-app.git
```

### Move into Project

```bash
cd booking-appointment-app
```

### Install Dependencies

```bash
npm install
```

---

# 📦 Required Packages

```bash
npm install express sequelize mysql2 cors
```

Development Dependency:

```bash
npm install nodemon --save-dev
```

---

# 🗄️ Database Setup

Create Database:

```sql
CREATE DATABASE booking_app;
```

Verify Database:

```sql
SHOW DATABASES;
```

Use Database:

```sql
USE booking_app;
```

---

# 🔌 Sequelize Database Connection

### utils/db.js

```javascript
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "booking_app",
    "root",
    "YOUR_PASSWORD",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

module.exports = sequelize;
```

---

# 📄 User Model

### models/User.js

```javascript
const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false
        },

        phone: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
);

module.exports = User;
```

---

# ▶️ Run Application

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
node index.js
```

Expected Output:

```bash
Database Connected Successfully
Server Running On Port 3000
```

---

# 📮 API Endpoints

## ➕ Add User

```http
POST /users
```

Request Body:

```json
{
  "name": "Yashav Shukla",
  "email": "yashav@gmail.com",
  "phone": "9876543210"
}
```

Response:

```json
{
  "message": "User Added Successfully"
}
```

---

## 📋 Get All Users

```http
GET /users
```

Response:

```json
[
  {
    "id": 1,
    "name": "Yashav Shukla",
    "email": "yashav@gmail.com",
    "phone": "9876543210"
  }
]
```

---

## 🗑️ Delete User

```http
DELETE /users/:id
```

Response:

```json
{
  "message": "User Deleted Successfully"
}
```

---

# 🧪 Testing with Postman

### Create User

```http
POST http://localhost:3000/users
```

### Get Users

```http
GET http://localhost:3000/users
```

### Delete User

```http
DELETE http://localhost:3000/users/1
```

---

# 🎯 Assignment Deliverables Covered

✅ Create User Table using Sequelize

✅ Insert User Data using create()

✅ Retrieve Users using findAll()

✅ Delete User using destroy()

✅ Express.js REST APIs

✅ Frontend Integration (HTML/CSS/JS)

✅ MVC Architecture

✅ Sequelize ORM

✅ MySQL Database Connectivity

✅ CORS Integration

✅ express.json() Middleware

✅ JSON API Responses

---

# ⚠️ Error Handling

The application handles:

* Invalid Database Connection
* Missing User Data
* User Not Found
* API Failures
* Internal Server Errors

Example:

```json
{
  "message": "User Not Found"
}
```

---

# 🚀 Future Improvements

* Edit Appointment Feature
* Appointment Date & Time Selection
* Authentication & Authorization
* Email Notifications
* Search & Filter Appointments
* Pagination
* Environment Variables (.env)

---

## 👨‍💻 Author

### Yashav Shukla

GitHub: [@yashavshukla](https://github.com/yashav-shukla)

---

## ⭐ Show Your Support

If you found this project useful, consider giving it a ⭐ on GitHub.

Happy Coding! 🚀
