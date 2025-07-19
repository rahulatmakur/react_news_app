import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';

const NewsList = ({ user }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/news`)
      .then(res => setNews(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    setNews(news.filter(item => item._id !== id));
  };

  return (
    <div>
      {news.map(item => (
        <NewsCard key={item._id} news={item} user={user} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default NewsList;
