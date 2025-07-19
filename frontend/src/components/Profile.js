import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    if (!window.confirm('Are you sure you want to delete your account? This cannot be undone.')) return;
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setUser(null);
      localStorage.removeItem('token');
      navigate('/');
      alert('Account deleted successfully');
    } catch (err) {
      console.error(err);
      alert('Failed to delete account. Please try again.');
    }
  };

  if (!user) return <div>Please log in to view your profile.</div>;

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <button
        onClick={handleDeleteAccount}
        style={{ padding: '10px', background: 'red', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        Delete Account
      </button>
    </div>
  );
};

export default Profile;
