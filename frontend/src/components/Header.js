import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header style={{ padding: '10px', background: '#333', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <h1>THE MIC</h1>
      <nav>
        <Link to="/" style={{ color: 'white', marginRight: '10px' }}>Home</Link>
        {user ? (
          <>
            <Link to="/profile" style={{ color: 'white', marginRight: '10px' }}>Profile</Link>
            <span>Welcome, {user.username}</span>
            <button onClick={handleLogout} style={{ marginLeft: '10px' }}>Logout</button>
          </>
        ) : (
          <Link to="/auth" style={{ color: 'white' }}>Login/Signup</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
