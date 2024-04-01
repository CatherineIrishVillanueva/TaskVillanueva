import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Welcome = () => {
  const history = useHistory();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
    setUserData(parsedUserData);
  }, []);

  const handleLogout = () => {
    history.push('/loginregistration');
  };

  return (
    <div className="gradient-gray h-screen w-screen relative flex justify-center items-center">
      <div>
        <h1 className="text-5xl font-bold mb-4 text-center text-white">PROFILE</h1>
        <h5 className="text-2xl font-bold mb-4 text-center text-white">Welcome! Here is your account Information:</h5>
        {userData && (
          <div className='flex flex-col items-center justify-center py-2 bg-gray-10 bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm'>
            <div className="rounded-lg p-9 shadow-lg">
              <br />
              <p className='text-2xl text-white'>Name: {userData.name}</p>
              <p className='text-2xl text-white'>Email: {userData.email}</p>
              <p className='text-2xl text-white'>Mobile: {userData.mobile}</p>
              <p className='text-2xl text-white'>Address: {userData.address}</p>
              <p className='text-2xl text-white'>Gender: {userData.gender}</p>
              <p className='text-2xl text-white'>Birthdate: {userData.birthdate}</p>
            </div>
            </div>
        )}
        <br />
        <div className='text-center'>
          <button
            className="bg-blue-500 align-item-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
