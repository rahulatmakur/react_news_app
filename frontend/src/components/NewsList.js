import React from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ user, news, onDelete }) => {

  return (
    <div>
      {news && news.map(item => (
        <NewsCard key={item._id} news={item} user={user} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NewsList;
