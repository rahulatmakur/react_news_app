# 📰 The Mic – Full Stack News App

**Developed by:** Rahul Aathmakur & Aadi Jain  
**Mentor:** Gagandeep Sethi  
**Training Duration:** June – July 2025  

---

## 📌 Overview

**The Mic** is a full-stack news platform that allows users to:

- Sign up and log in
- Post news articles
- View and comment on news
- Mark articles as *Breaking News*

It’s a multi-user, text-based web app built using the **MERN stack (MongoDB, Express, React, Node.js)**.

---

## 🚀 Features

- 🔐 User Authentication (Login / Signup)
- 📰 News Feed with post form and listings
- 🧾 News Detail page with dynamic route and comment section
- 💬 Commenting system (per news article)
- 🔴 Breaking News indicator
- 👤 User Profile support
- 🌐 React Router navigation

---

## 🛠️ Tech Stack

| Frontend | Backend | Database | Other |
|----------|---------|----------|-------|
| React    | Node.js (Express) | MongoDB | Axios, React Router, dotenv |

---

## 📁 Folder Structure (Frontend)

news-app-frontend/
├── public/
├── src/
│ ├── components/
│ │ ├── Header.js
│ │ ├── NewsForm.js
│ │ ├── NewsList.js
│ │ ├── CommentSection.js
│ │ └── Profile.js
│ ├── pages/
│ │ ├── Home.js
│ │ ├── NewsDetail.js
│ │ └── Auth.js
│ ├── App.js
│ └── index.js

yaml
Copy
Edit

---

## 🧪 API Routes (Express Backend)

| Route | Method | Description |
|-------|--------|-------------|
| `/api/auth/signup` | POST | Register new user |
| `/api/auth/login` | POST | Login user |
| `/api/news` | GET | Get all news |
| `/api/news/:id` | GET | Get news by ID |
| `/api/news` | POST | Create a news post |
| `/api/comments/:newsId` | GET | Get comments for a news |
| `/api/comments/:newsId` | POST | Add a comment |

---

## 📸 Screenshots

### 🖼️ Frontend  
- [ ] Home Page  
- [ ] Login / Signup Page  
- [ ] News Detail Page  
- [ ] Profile Page

### 🔧 Backend  
- [ ] API Routes (Postman screenshots)  
- [ ] Code snippets of route files  
- [ ] Terminal logs (server running)

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/news-app.git
cd news-app
2. Setup frontend
bash
Copy
Edit
cd news-app-frontend
npm install
npm start
3. Setup backend
bash
Copy
Edit
cd news-app-backend
npm install
npm run dev
Make sure to create a .env file in the backend with:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
