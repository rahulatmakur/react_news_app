import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentSection = ({ newsId, user }) => {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/comments/${newsId}`)
      .then(res => setComments(res.data))
      .catch(err => console.error(err));
  }, [newsId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/comments`,
        { newsId, content },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setContent('');
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert('Failed to post comment. Please try again.');
    }
  };

  return (
    <div>
      <h3>Comments</h3>
      {comments.map(comment => (
        <div key={comment._id} style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>
          <p><strong>{comment.userId.username}</strong>: {comment.content}</p>
        </div>
      ))}
      {user ? (
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Add a comment"
            value={content}
            onChange={e => setContent(e.target.value)}
            required
            style={{ width: '100%', margin: '10px 0' }}
          />
          <button type="submit">Post Comment</button>
        </form>
      ) : (
        <p>Please <a href="/auth">login</a> to post a comment.</p>
      )}
    </div>
  );
};

export default CommentSection;
