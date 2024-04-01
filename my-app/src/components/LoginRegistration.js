import React, { useState } from 'react';
import SignIn from './SignIn';
import Registration from './SignUp';
import '../App.css';

const LoginRegistration = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="rounded-lg p-9 shadow-lg">
        {isSignIn ? (
          <SignIn />
        ) : (
          <Registration />
        )}
        <p className="mt--45 text-center">
          {isSignIn ? "Don't have an account?" : 'Already have an account?'}
          <button
            onClick={toggleForm}
            className="text-blue-700 ml-1 font-bold focus:outline-none"
          >
            {isSignIn ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginRegistration;
