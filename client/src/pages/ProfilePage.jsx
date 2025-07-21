import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../assets/assets';
import { AuthContext } from '../context/AuthContext';

const ProfilePage = () => {
  const { authUser, updateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState(null);
  const [fullName, setFullName] = useState(authUser.fullName || '');
  const [bio, setBio] = useState(authUser.bio || '');

  useEffect(() => {
    if (!authUser) navigate('/');
  }, [authUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile(fullName, bio, selectedImg);
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <div className="flex flex-col items-center">
          <label htmlFor="profileImgInput">
            <img
              src={selectedImg ? URL.createObjectURL(selectedImg) : authUser.profilePic || assets.avatar}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover cursor-pointer"
            />
          </label>
          <input
            type="file"
            id="profileImgInput"
            className="hidden"
            onChange={(e) => setSelectedImg(e.target.files[0])}
          />
        </div>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
          />
          <input
            type="text"
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
