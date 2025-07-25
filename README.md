#  Instant Chat - Real-Time Messaging Web App

A full-stack real-time chat web application where users can register, login, update their profiles, and chat instantly with others. Built using **MERN Stack** with **Socket.IO** for live messaging.

##  Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Live Demo](#live-demo)
- [Future Improvements](#future-improvements)



##  Features
<ul>
 <li>JWT-based User Authentication (Signup/Login)</li>
 <li> Profile Management (Image + Bio + Name)</li>
  <li>Real-Time 1-on-1 Chat using WebSockets</li>
  <li>Live Online Status Indicator</li>
  <li>Beautiful and Responsive UI</li>
  <li>Toast Notifications for Errors & Success</li>
</ul>


##  Tech Stack

### Frontend
<ul>
 <li>React.js – for the dynamic UI</li>
 <li>Tailwind CSS – utility-first styling</li>
 <li>Axios – handling API requests</li>
</ul>

### Backend
<ul>
 <li>Node.js + Express – server and routing</li>
 <li>MongoDB + Mongoose – database & schema</li>
 <li>Socket.IO – real-time communication</li>
 <li>JWT (jsonwebtoken) – secure authentication</li>
</ul>


##  Installation

###  Prerequisites
<ul>
<li> Node.js & npm</li>
 <li>MongoDB running locally or a cloud instance (MongoDB Atlas)</li>
 <li>Vite</li>
</ul>

<prev>
 
###  Clone the Repository

git clone <a href="https://instant-chat-frontend-side-git-main-ajay-kumar-dhandes-projects.vercel.app/" target="_blank">https://instant-chat-frontend-side-git-main-ajay-kumar-dhandes-projects.vercel.app/</a>
```
cd instant-chat-app

Backend Setup
cd server
npm install
npm run dev
```
**Note**: Create a .env file in the /server directory with the following:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Frontend Setup
cd client
npm install
npm run dev

```

## Usage
<ul>
<li>Open your browser and navigate to the URL displayed in the terminal</li>

<li>Register or login to your account</li>

<li>Chat with users in real time</li>

<li>Update your profile with name, bio, and image</li>
</ul>



## Project Structure
instant-chat-app/

<pre>
instant-chat-app/
│
├── server/                          # Backend server for API and socket logic
│   ├── controllers/                # Handle business logic for routes (e.g., user auth, messages)
│   ├── middleware/                # Custom middleware like auth checks, error handlers
│   ├── models/                    # Mongoose/Sequelize models for DB schema (User, Message, etc.)
│   ├── routes/                    # API endpoint definitions (e.g., /api/users, /api/messages)
│   ├── socket/                    # Socket.io logic for real-time messaging
│   ├── .env                       # Environment variables (DB URI, PORT, secrets)
│   └── server.js                  # Entry point for Express server and Socket.io integration
│
└── client/                         # Frontend using React + Vite
    ├── public/                    # Static files like index.html, favicon
    ├── src/                       # Main source code folder
    │   ├── assets/                # Images, icons, and other media assets
    │   ├── components/            # Reusable UI components (e.g., ChatBox, InputField)
    │   ├── context/               # React Context for global state (e.g., user/auth context)
    │   ├── pages/                 # Pages like Login, Register, Chat, etc.
    │   └── App.jsx                # Root component with routing and layout setup
    ├── .env                       # Frontend environment variables (e.g., API URL)
    └── vite.config.js             # Vite configuration for bundling the frontend

</pre>

   

## **Live Demo**
<p>Try it Live Here → <a href="https://instant-chat-frontend-side-git-main-ajay-kumar-dhandes-projects.vercel.app/" target="_blank">https://instant-chat-frontend-side-git-main-ajay-kumar-dhandes-projects.vercel.app/</a></p>

**Demo Video**
 → <a href="https://drive.google.com/file/d/13scE17wpIXxGR5eGrWZ2UMwdS0512GYI/view" target="_blank">Click to Open</a>

##  Future Improvements  
<ul>
 <li>Group Chat Support  </li>
 <li>Media/File Sharing in Messages  </li>
 <li>Push Notifications  </li>
 <li>PWA Support for Mobile Devices  </li>
 <li>AI Bot Integration for Fun </li>
</ul>





