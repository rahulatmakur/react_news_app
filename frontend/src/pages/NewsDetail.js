import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentSection from '../components/CommentSection';

const NewsDetail = ({ user }) => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/news/${id}`)
      .then(res => setNews(res.data))
      .catch(err => {
        console.error(err);
        setError('Failed to load news article. Please try again.');
      });
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!news) return <div>Loading...</div>;

  return (
    <div>
      <h2>{news.title}</h2>
      {news.isBreaking && <span style={{ color: 'red' }}>Breaking News</span>}
      <p>{news.content}</p>
      <CommentSection newsId={id} user={user} />
    </div>
  );
};

export default NewsDetail;
