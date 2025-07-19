import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewsCard = ({ news, user, onDelete }) => {
  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this news post?')) return;
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/news/${news._id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      onDelete(news._id);
      alert('News post deleted successfully');
    } catch (err) {
      console.error(err);
      alert('Failed to delete news post. Please try again.');
    }
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0', background: news.isBreaking ? '#ffe6e6' : 'white' }}>
      <h3>{news.title}</h3>
      <p>{news.content.substring(0, 100)}...</p>
      {news.isBreaking && <span style={{ color: 'red' }}>Breaking News</span>}
      <div>
        <Link to={`/news/${news._id}`} style={{ marginRight: '10px' }}>Read More</Link>
        {user && (
          <button
            onClick={handleDelete}
            style={{ padding: '5px', background: 'red', color: 'white', border: 'none', cursor: 'pointer' }}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
