# 💬 Instant Chat App

A full-stack real-time chat web application that allows users to register, log in, update profiles, and chat instantly with others. Built using **React**, **Node.js**, **MongoDB**, and **Socket.IO** for seamless messaging.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#️-installation)
- [Usage](#️-usage)
- [Project Structure](#-project-structure)
- [Live Demo](#-live-demo)
- [Future Improvements](#-future-improvements)
- [License](#-license)

---

## ✨ Features

- 🔐 JWT-based User Authentication (Signup/Login)
- ✍️ Profile Management (Image + Bio + Name)
- 💬 Real-Time 1-on-1 Chat using WebSockets
- 📡 Live Online Status Indicator
- 🚀 Beautiful and Responsive UI
- ⚠️ Toast Notifications for Errors & Success

---

## 🧰 Tech Stack

### Frontend
- **React.js** – for the dynamic UI
- **Tailwind CSS** – utility-first styling
- **Axios** – handling API requests

### Backend
- **Node.js + Express** – server and routing
- **MongoDB + Mongoose** – database & schema
- **Socket.IO** – real-time communication
- **JWT (jsonwebtoken)** – secure authentication

---

## ⚙️ Installation

### 🧾 Prerequisites
- Node.js & npm
- MongoDB running locally or a cloud instance (MongoDB Atlas)
- Vite (optional, if you're using Vite for React)

### 🔄 Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/instant-chat-app.git
cd instant-chat-app
🖥️ Backend Setup

bash
Copy
Edit
cd server
npm install
npm run dev
Note: Create a .env file in the /server directory with the following:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
🌐 Frontend Setup

bash
Copy
Edit
cd client
npm install
npm run dev
🖥️ Usage
Open your browser and go to http://localhost:5173

Register or login to your account

Chat with users in real time

Update your profile with name, bio, and image

🗂️ Project Structure
pgsql
Copy
Edit
instant-chat-app/
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── .env
│   └── server.js
│
└── client/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── context/
    │   ├── pages/
    │   └── App.jsx
    ├── .env
    └── vite.config.js
🌍 Live Demo
🚀 Try it Live Here →
👉 Instant Chat App Demo

🔮 Future Improvements
💡 Group Chat Support
🖼️ Media/File Sharing in Messages
🔔 Push Notifications
📱 PWA Support for Mobile Devices
🧠 AI Bot Integration for Fun 🤖

📜 License
This project is licensed under the MIT License.
See the LICENSE file for more information.
