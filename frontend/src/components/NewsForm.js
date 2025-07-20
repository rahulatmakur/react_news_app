import React, { useState } from 'react';
import axios from 'axios';

const NewsForm = ({ user, onPostSuccess }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isBreaking, setIsBreaking] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/news`,
        { title, content, isBreaking },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setTitle('');
      setContent('');
      setIsBreaking(false);
      alert('News posted successfully!');
      if (onPostSuccess) {
        onPostSuccess();
      }
    } catch (err) {
      console.error(err);
      alert('Failed to post news. Please try again.');
    }
  };

  if (!user) return null;

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
      <h2>Post News</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        style={{ display: 'block', margin: '10px 0', padding: '5px' }}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
        style={{ display: 'block', margin: '10px 0', padding: '5px', width: '100%' }}
      />
      <label>
        <input
          type="checkbox"
          checked={isBreaking}
          onChange={e => setIsBreaking(e.target.checked)}
        />
        Mark as Breaking News
      </label>
      <button type="submit" style={{ padding: '10px', marginTop: '10px' }}>Post News</button>
    </form>
  );
};

export default NewsForm;
