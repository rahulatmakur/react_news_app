import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NewsDetail from './pages/NewsDetail';
import Auth from './pages/Auth';
import Profile from './components/Profile';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="app">
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/news/:id" element={<NewsDetail user={user} />} />
          <Route path="/auth" element={<Auth setUser={setUser} />} />
          <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
        </Routes>
        <footer>
          <p>Developed by Aadi and Rahul</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
