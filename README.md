🗂️ Task Manager Application

A comprehensive full-stack Task Manager web application built using React, Tailwind CSS, Node.js, and MongoDB. It supports user authentication, robust task management, real-time updates, dashboard analytics, and report generation.

🔗 Live App: task-manager-application-0hup.onrender.com
📺 Video Walkthrough: YouTube Demo
📂 GitHub Repository: pushkarkumarsaini2006/Task-Manager

✨ Features
🔐 User Authentication: Sign up, login, and secure profile management with image uploads

✅ Task Management: Create, update, filter, and delete tasks with support for priorities and status

📊 Dashboard Analytics: Visualize task distribution and priorities using charts

📤 Report Generation: Download task reports in multiple formats

👥 User Management: Admin can manage users and view task history

🧾 Todo Checklist & Task Status: Update task progress interactively

📱 Responsive UI: Built with Tailwind CSS and optimized for all devices

🧱 Tech Stack
Frontend	Backend	Database	Others
React	Node.js + Express	MongoDB	Tailwind CSS, Axios, Chart.js, JWT

📁 Folder Structure
bash
Copy
Edit
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
🎬 Development Timeline
📦 Backend
24:01 – Backend project setup

28:33 – MongoDB configuration

31:13 – User & Task schemas

33:39 – Authentication APIs (Login, Sign-Up, Profile, etc.)

52:21 – User Management APIs

59:14 – Task Management APIs (CRUD operations)

01:27:23 – Report Generation APIs

🎨 Frontend
11:30 – React setup

13:46 – Tailwind CSS setup

17:02 – File/folder structure

18:36 – Route definitions

Authentication
01:36:34 – Login Form UI

01:49:27 – Sign-Up Form UI

02:01:28 – API integrations for Auth

🧾 Dashboard & Features
02:19:38 – Dashboard layout

02:31:00 – Summary & charts

02:57:39 – Create Task form & validation

03:41:13 – Manage Tasks page

04:03:24 – Update/Delete tasks

👥 User Management & Reports
04:12:51 – Manage Users UI

04:19:47 – Download reports

👤 User Dashboard
04:25:58 – Personal dashboard, My Tasks, task details, checklist

🚀 Getting Started
📌 Prerequisites
Node.js v18+

MongoDB Atlas/local

Yarn or npm

📥 Installation
bash
Copy
Edit
# Clone the repository
git clone https://github.com/pushkarkumarsaini2006/Task-Manager.git
cd Task-Manager

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
⚙️ Environment Setup
Create a .env file in the server/ directory with:

ini
Copy
Edit
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
▶️ Running the App
bash
Copy
Edit
# Start backend server
cd server
npm run dev

# Start frontend
cd ../client
npm start
📸 UI Screenshots
(You can add screenshots here if available — Login page, Dashboard, Charts, etc.)

📈 Future Enhancements
📨 Email notifications

🔔 Push notifications

🌐 Internationalization

📅 Calendar integration for deadlines

🙌 Credits
Built with ❤️ by Pushkar Kumar Saini
📺 Watch the full video tutorial on YouTube

📝 License
This project is licensed under the MIT License.
Feel free to use, share, and contribute!