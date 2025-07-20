import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsList from '../components/NewsList';
import NewsForm from '../components/NewsForm';

const Home = ({ user }) => {
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/news`)
      .then(res => {
        // Sort news by creation date, newest first, to show the latest post on top
        const sortedNews = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setNews(sortedNews);
      })
      .catch(err => console.error(err));
  };
  useEffect(() => {
    fetchNews();
  }, []); 

  const handleDelete = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/news/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(() => {
    
      setNews(currentNews => currentNews.filter(item => item._id !== id));
    })
    .catch(err => {
      console.error("Failed to delete news", err);
      alert('Failed to delete the news post.');
    });
  };

  return (
    <div>
      <h2>Latest News</h2>
      {user && <NewsForm user={user} onPostSuccess={fetchNews} />}
      <NewsList user={user} news={news} onDelete={handleDelete} />
    </div>
  );
};

export default Home;