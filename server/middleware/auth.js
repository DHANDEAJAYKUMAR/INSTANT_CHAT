import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { Toaster } from "react-hot-toast";
import { AuthContext } from '../context/AuthContext';

const App = () => {
  const { authUser } = useContext(AuthContext);

  return (
    <div className="bg-[url('/bgImage.svg')] bg-contain min-h-screen">
      <Toaster />
      
      {authUser && (
        <div className="flex items-center gap-3 p-4">
          <img
            src={authUser.profilePic || "/default-user-icon.png"}
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover border border-white"
          />
          <span className="text-white text-lg font-semibold">
            Hi {authUser.fullName}
          </span>
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
};

export default App;
