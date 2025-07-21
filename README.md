#  Instant Chat App

A full-stack real-time chat web application that allows users to register, log in, update profiles, and chat instantly with others. Built using **React**, **Node.js**, **MongoDB**, and **Socket.IO** for seamless messaging.

---

##  Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Live Demo](#live-demo)
- [Future Improvements](#future-improvements)
- [License](#license)

---

##  Features
<ul>
-  <li>JWT-based User Authentication (Signup/Login)</li>
- <li> Profile Management (Image + Bio + Name)</li>
-  <li>Real-Time 1-on-1 Chat using WebSockets</li>
-  <li>Live Online Status Indicator</li>
-  <li>Beautiful and Responsive UI</li>
-  <li>Toast Notifications for Errors & Success</li>
</ul>
---

##  Tech Stack

### Frontend
<ul>
- <li>**React.js** – for the dynamic UI</li>
- <li>**Tailwind CSS** – utility-first styling</li>
- <li>**Axios** – handling API requests</li>
</ul>
### Backend
<ul>
- <li>**Node.js + Express** – server and routing</li>
- <li>**MongoDB + Mongoose** – database & schema</li>
- <li>**Socket.IO** – real-time communication</li>
- <li>**JWT (jsonwebtoken)** – secure authentication</li>
</ul>
---

##  Installation

###  Prerequisites
<ul>
-<li> Node.js & npm</li>
- <li>MongoDB running locally or a cloud instance (MongoDB Atlas)</li>
- <li>Vite (optional, if you're using Vite for React)</li>
</ul>
###  Clone the Repository

git clone https://github.com/YOUR_USERNAME/instant-chat-app.git
cd instant-chat-app

🖥 Backend Setup

cd server
npm install
npm run dev

Note: Create a .env file in the /server directory with the following:

env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

 Frontend Setup

cd client
npm install
npm run dev

---

## Usage
<ul>
<li>Open your browser and go to http://localhost:5173</li>

<li>Register or login to your account</li>

<li>Chat with users in real time</li>

<li>Update your profile with name, bio, and image</li>
</ul>
---


## Project Structure
instant-chat-app/
---
<pre>
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── .env
│   └── server.js
---
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
</pre>

   
 
## Live Demo
 Try it Live Here →
 Instant Chat App Demo

---

##  Future Improvements  
<ul>
 <li>Group Chat Support  </li>
 <li>Media/File Sharing in Messages  </li>
 <li>Push Notifications  </li>
 <li>PWA Support for Mobile Devices  </li>
 <li>AI Bot Integration for Fun </li>
</ul>
---

## License
This project is licensed under the MIT License.
See the LICENSE file for more information.


