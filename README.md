# 📝 Task Manager

A full-stack task management platform built with **Node.js**, **Express**, **MongoDB**, and **React (Vite)**. Designed for teams and individuals to efficiently manage, track, and collaborate on tasks with a modern, responsive UI.

🚀 **Live Demo**:
- Backend: https://task-manager-3mwm.onrender.com
- Frontend: https://task-manager-1-koap.onrender.com

---

## 🔑 Key Features
- User dashboard with assigned tasks and progress tracking
- Create, update, and manage tasks with priorities and due dates
- Assign tasks to multiple users
- Download task reports
- Attach files to tasks
- Mobile responsive UI

---

## 🗂️ Project Structure

```
backend/
  package.json
  server.js
  config/
    db.js
  controllers/
    authController.js
    reportController.js
    taskController.js
    userController.js
  middlewares/
    authMiddleware.js
    uploadMiddleware.js
  models/
    Task.js
    User.js
  routes/
    authRoutes.js
    reportRoutes.js
    taskRoutes.js
    userRoutes.js
  scripts/
    fixImageUrls.js
  uploads/
    ...
frontend/
  Task-Manager/
    package.json
    vite.config.js
    index.html
    public/
      _redirects
      bg-img.png
      vite.svg
    src/
      App.jsx
      index.css
      main.jsx
      assets/
        react.svg
        images/
          auth-img.png
      components/
        AvatarGroup.jsx
        DeleteAlert.jsx
        Modal.jsx
        Progress.jsx
        TaskListTable.jsx
        TaskStatusTabs.jsx
        Cards/
          InfoCard.jsx
          TaskCard.jsx
          UserCard.jsx
        Charts/
          CustomBarChart.jsx
          CustomLegend.jsx
          CustomPieChart.jsx
          CustomTooltip.jsx
        Inputs/
          AddAttachmentsInput.jsx
          Input.jsx
          ProfilePhotoSelector.jsx
          SelectDropdown.jsx
          SelectUsers.jsx
          TodoListInput.jsx
      layouts/
        AuthLayout.jsx
        DashboardLayout.jsx
        Navbar.jsx
        SideMenu.jsx
      context/
        userContext.jsx
      hooks/
        useUserAuth.jsx
      pages/
        Admin/
          CreateTask.jsx
          Dashboard.jsx
          ManageTasks.jsx
          ManageUsers.jsx
        Auth/
          Login.jsx
          SignUp.jsx
        User/
          MyTasks.jsx
          UserDashboard.jsx
          ViewTaskDetails.jsx
      routes/
        PrivateRoute.jsx
      utils/
        apiPaths.js
        axiosInstance.js
        data.js
        helper.js
        uploadImage.js
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB (local or cloud)

---

### Backend Setup

```
cd backend
npm install
# Create a .env file and add:
# MONGODB_URI=your_mongodb_uri
# JWT_SECRET=your_jwt_secret
# CLIENT_URL=http://localhost:5173,http://localhost:5174,https://task-manager-1-koap.onrender.com
npm start
```

---

### Frontend Setup

```
cd frontend/Task-Manager
npm install
# Create a .env file and add:
# VITE_API_BASE_URL=http://localhost:8000
# For deployed usage, set VITE_API_BASE_URL=https://task-manager-3mwm.onrender.com in Render
# VITE_FRONTEND_URL=http://localhost:5173
# For deployed usage, set VITE_FRONTEND_URL=https://task-manager-1-koap.onrender.com in Render
npm run dev
```

---

## 🚀 Deployment on Render

### Backend
- Deploy as a **Web Service**
- Build Command: `npm install`
- Start Command: `npm start`
- Add environment variables in Render settings

### Frontend
- Build Command: `npm run build`
- Start Command: `npm run preview`
- Deploy the `dist` folder as a Static Site on Render
- Set `VITE_API_BASE_URL` in environment variables to your backend URL

---

## 🔐 Environment Variables

### Backend `.env`
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173,http://localhost:5174,https://task-manager-1-koap.onrender.com
```

### Frontend `.env`
```
VITE_API_BASE_URL=http://localhost:8000
# For deployed usage, set VITE_API_BASE_URL=https://task-manager-3mwm.onrender.com in Render
VITE_FRONTEND_URL=http://localhost:5173
# For deployed usage, set VITE_FRONTEND_URL=https://task-manager-1-koap.onrender.com in Render
```

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Developer

**Pushkar Kumar Saini**
