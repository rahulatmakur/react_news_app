import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

const Auth = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      {isLogin ? <Login setUser={setUser} /> : <Signup setUser={setUser} />}
      <button onClick={() => setIsLogin(!isLogin)}>
        Switch to {isLogin ? 'Signup' : 'Login'}
      </button>
    </div>
  );
};

export default Auth;
