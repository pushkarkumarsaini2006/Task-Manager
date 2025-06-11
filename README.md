# 🗂️ Task Manager Application

![Task Manager Banner](https://img.shields.io/badge/Task%20Manager-Full%20Stack%20App-blue)  
A comprehensive full-stack Task Manager web application built using **React**, **Tailwind CSS**, **Node.js**, and **MongoDB**. It supports user authentication, robust task management, real-time updates, dashboard analytics, and report generation.

🔗 **Live App**: [task-manager-application-0hup.onrender.com](https://task-manager-application-0hup.onrender.com)

📂 **GitHub Repository**: [pushkarkumarsaini2006/Task-Manager](https://github.com/pushkarkumarsaini2006/Task-Manager)

---

## ✨ Features

- 🔐 **User Authentication**: Sign up, login, and secure profile management with image uploads
- ✅ **Task Management**: Create, update, filter, and delete tasks with support for priorities and status
- 📊 **Dashboard Analytics**: Visualize task distribution and priorities using charts
- 📤 **Report Generation**: Download task reports in multiple formats
- 👥 **User Management**: Admin can manage users and view task history
- 🧾 **Todo Checklist & Task Status**: Update task progress interactively
- 📱 **Responsive UI**: Built with Tailwind CSS and optimized for all devices

---

## 🧱 Tech Stack

| Frontend     | Backend         | Database | Others          |
|--------------|----------------|----------|-----------------|
| React        | Node.js + Express | MongoDB  | Tailwind CSS, Axios, Chart.js, JWT |

---

## 📁 Folder Structure

```bash
Task-Manager/
│
├── client/             # React frontend
│   ├── src/
│   ├── public/
│   └── tailwind.config.js
│
├── server/             # Node.js backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middlewares/
│   └── config/
│
├── .env
└── README.md
```
## 🚀 Getting Started

### 📌 Prerequisites

Node.js v18+
MongoDB Atlas/local
Yarn or npm

### 📥 Installation

```bash
# Clone the repository
git clone https://github.com/pushkarkumarsaini2006/Task-Manager.git
cd Task-Manager

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```
### ⚙️ Environment Setup
Create a .env file in the server/ directory with:
```bash
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
```

### ▶️ Running the App
```bash
# Start backend server
cd server
npm run dev

# Start frontend
cd ../client
npm start
```

## 🙌 Credits
Built with ❤️ by Pushkar Kumar Saini

## 📝 License
This project is licensed under the MIT License.
Feel free to use, share, and contribute!
