import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../assets/assets';
import { AuthContext } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import axios from 'axios';

const ProfilePage = () => {
  const { authUser, updateProfile } = useContext(AuthContext);
  const [selectedImg, setSelectedImg] = useState(null);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser) {
      setName(authUser.name || '');
    }
  }, [authUser]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImg(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) return toast.error("Name is required");

    const formData = new FormData();
    formData.append("name", name);
    if (selectedImg) {
      formData.append("profileImg", selectedImg);
    }

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/api/user/update-profile`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${authUser.token}`,
          },
        }
      );

      updateProfile(res.data.user);
      toast.success("Profile updated");
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.error || "Update failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg"
      >
        <h2 className="text-xl font-semibold text-center mb-4">Edit Profile</h2>
        <div className="flex flex-col items-center mb-4">
          <label htmlFor="profile" className="cursor-pointer">
            <img
              src={
                selectedImg
                  ? URL.createObjectURL(selectedImg)
                  : authUser?.profileImg || assets.profile
              }
              className="w-24 h-24 rounded-full object-cover border border-gray-300"
              alt="Profile"
            />
          </label>
          <input
            type="file"
            id="profile"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
        <input
          type="text"
          placeholder="Your name"
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
