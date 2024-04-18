import React, { useEffect, useState } from 'react';
import Header from './Header';
import Villanueva from './Images/Villanueva.png';
import Travel2 from './Images/Travel2.png';
import Travel3 from './Images/Travel3.png';
import Travel4 from './Images/Travel4.png';
import DitBuilding from './Images/DitBuilding.png';
import LayaDiwa from './Images/layaDiwaBackGround.png';
import cavsu from './Images/cavsu.png';
import basketball from './Images/basketball.png';
import basketball1 from './Images/basketball1.png';
import biking from './Images/biking.png';

const Welcome = () => {
  const [indexEducation, setIndexEducation] = useState(0);
  const [indexSports, setIndexSports] = useState(0);
  const [indexQuotationImages, setIndexQuotationImages] = useState(0);

  const education = [cavsu, LayaDiwa, DitBuilding];
  const sports = [basketball, basketball1, biking];
  const quotationImages = [Travel2, Travel3, Travel4];

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
    setUserData(parsedUserData);
  }, []);

  useEffect(() => {
    const intervalEducation = setInterval(() => {
      setIndexEducation((prevIndex) => (prevIndex + 1) % education.length);
    }, 3000); 

    return () => clearInterval(intervalEducation);
  }, [education.length]);

  useEffect(() => {
    const intervalSports = setInterval(() => {
      setIndexSports((prevIndex) => (prevIndex + 1) % sports.length);
    }, 3000); 

    return () => clearInterval(intervalSports);
  }, [sports.length]);

  useEffect(() => {
    const intervalQuotationImages = setInterval(() => {
      setIndexQuotationImages((prevIndex) => (prevIndex + 1) % quotationImages.length);
    }, 3000); 

    return () => clearInterval(intervalQuotationImages);
  }, [quotationImages.length]);

  return (
    <div className='gradient-grey h-screen w-screen overflow-hidden'>
      <Header />
      <div className="flex justify-start items-start h-full p-8">
        <div className="overflow-hidden p-8 mr-8 border border-black rounded-lg bg-white" style={{ width: '400px'}}>
          <h1 className="text-3xl font-bold mb-15 text-center text-black typing-text">PROFILE</h1>
          <div className="flex justify-center">
            <img src={Villanueva} alt="Profile" className="rounded-full mt-5" style={{ width: '185px', height: '185px' }} />
          </div>
          {userData && (
            <div className='flex flex-col items-center justify-center py-2 bg-gray-10 bg-opacity-10 relative z-2 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm'>
              <br />
              <p className='text-1xl text-black' style={{ fontSize: '17px', marginLeft: '-1px' }}>Name: {userData.name}</p>
              <p className='text-1xl text-black' style={{ fontSize: '16px', marginLeft: '-1px' }}>Email: {userData.email}</p>
              <p className='text-1xl text-black' style={{ fontSize: '17px', marginLeft: '-1px' }}>Mobile: {userData.mobile}</p>
              <p className='text-1xl text-black' style={{ fontSize: '17px', marginLeft: '-1px' }}>Address: {userData.address}</p>
              <p className='text-1xl text-black' style={{ fontSize: '17px', marginLeft: '-1px' }}>Gender: {userData.gender}</p>
              <p className='text-1xl text-black' style={{ fontSize: '17px', marginLeft: '-1px' }}>Birthdate: {userData.birthdate}</p>
            </div>
          )}
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg relative" style={{ height: '500px', width: '360px' }}>
          {education.map((imageSrc, idx) => (
            <img
              key={idx}
              className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500"
              src={imageSrc}
              alt={`Education ${idx + 1}`}
              style={{ opacity: indexEducation === idx ? 1 : 0 }}
            />
          ))}
          <div className="px-6 py-4 absolute bottom-0 left-0 w-full text-center bg-white bg-opacity-65">
            <div className="font-bold text-xl mb-2">Education</div>
            <p className="text-gray-700 text-base">
              Course: Bachelor in Science and Information Technology
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg relative" style={{ height: '500px', width: '360px', marginLeft: '15px' }}>
          {sports.map((imageSrc, idx) => (
            <img
              key={idx}
              className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500"
              src={imageSrc}
              alt={`Sports ${idx + 1}`}
              style={{ opacity: indexSports === idx ? 1 : 0 }}
            />
          ))}
          <div className="px-6 py-4 absolute bottom-0 left-0 w-full text-center bg-white bg-opacity-65">
            <div className="font-bold text-xl mb-2">Sports</div>
            <p className="text-gray-700 text-base">
              Basketball 
            </p>
            <p className="text-gray-700 text-base">
              Biking
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg relative" style={{ height: '500px', width: '360px', marginLeft: '15px' }}>
          {quotationImages.map((imageSrc, idx) => (
            <img
              key={idx}
              className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500"
              src={imageSrc}
              alt={`Quotation Image ${idx + 1}`}
              style={{ opacity: indexQuotationImages === idx ? 1 : 0 }}
            />
          ))}
           <div className="px-6 py-4 absolute bottom-0 left-0 w-full text-center bg-white bg-opacity-65">
            <div className="font-bold text-xl mb-2">Quotation</div>
            <p className="text-gray-700 text-base">
              'I'll do whatever it takes.' 
            </p>
            <p className="text-gray-700 text-base">
              'I think, Therefore I am.'
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
