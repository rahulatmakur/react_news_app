import React from 'react';
import NewsList from '../components/NewsList';
import NewsForm from '../components/NewsForm';

const Home = ({ user }) => (
  <div>
    <h2>Daily News</h2>
    <NewsForm user={user} />
    <NewsList user={user} />
  </div>
);

export default Home;
