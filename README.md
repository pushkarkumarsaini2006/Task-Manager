# 📝 Task Manager

A full-stack task management platform built with **Node.js**, **Express**, **MongoDB**, and **React (Vite)**. Designed for teams and individuals to efficiently manage, track, and collaborate on tasks with a modern, responsive UI.

🚀 **Live Demo**: [https://task-manager-1-u4qh.onrender.com](https://task-manager-1-u4qh.onrender.com)

---

## 🔑 Key Features

### 👤 User Dashboard
- View assigned tasks, track progress, and get task insights.

### ✅ Task Management
- Create, update, and track tasks with due dates and priorities.
- Automated status updates based on checklist completion.

### 👥 Team Collaboration
- Assign tasks to multiple users and track completion.

### 🏷️ Priority & Progress Tracking
- Categorize tasks by priority and monitor completion levels.

### 📥 Task Report Downloads
- Export task data for analysis and tracking.

### 📎 Attachments Support
- Add and access task-related file links easily.

### 📱 Mobile Responsive UI
- Seamless experience on desktop, tablet, and mobile.

---

## 🗂️ Project Structure

```bash
backend/
  server.js
  config/
  controllers/
  middlewares/
  models/
  routes/
  uploads/
  scripts/
  utils/

frontend/
  Task-Manager/
    src/
      components/
      pages/
      context/
      routes/
      utils/
      assets/
    public/
    index.html
    package.json
```

---

## ⚙️ Getting Started

### ✅ Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB (local or cloud)

---

### 🔧 Backend Setup

```bash
cd backend
npm install
# Create a .env file and add the following:
# MONGODB_URI=your_mongodb_uri
# JWT_SECRET=your_jwt_secret
npm start
```

---

### 💻 Frontend Setup

```bash
cd frontend/Task-Manager
npm install
# Create a .env file and add:
# VITE_API_BASE_URL=https://your-backend-url
npm run dev
```

---

## 🚀 Deployment on Render

### 🔁 Backend
- Deploy as a **Web Service**.
- Add environment variables in Render settings.
- Build Command:
```bash
npm install
```
- Start Command:
```bash
npm start
```

### 🌐 Frontend
- Build Command:
```bash
npm run build
```
- Start Command:
```bash
npm run preview
```
- Deploy the `dist` folder as a Static Site on Render.
- Set `VITE_API_BASE_URL` in environment variables to your backend URL.

---

## 🔐 Environment Variables

### Backend `.env`
```bash
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### Frontend `.env`
```bash
VITE_API_BASE_URL=https://your-backend-url
```

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Developer

**Pushkar Kumar Saini**
