import React, { useState } from 'react';
import Header from './Header';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Tapsilog from './Images/TapsilogOrderingSystem.png';
import HRDOIS from './Images/HRDOIS.png';
import Calculator from './Images/BasicCalculator.png';
import pdfFile from './File/VILLANUEVA-RESUME.pdf';

const posts = [
  {
    id: 1,
    title: 'Tapsilog Fast Food Ordering System',
    href: '#',
    imageSrc: Tapsilog,
    description:
      'Tapsilog Ordering System was developed using the programming language Java NetBeans and uses mySQL as a database in the year 2020. The system allows users to order food and drinks from the menu, pay via GCash and PayMaya, receive a receipt and reset the orders.',
    hardware: 
        'Java NetBeans | Oracle Database',
    cv: ''
  },
  {
    id: 2,
    title: 'Basic Calculator',
    href: '#',
    imageSrc: Calculator,
    description:
      'Basic Calculator was developed using the programming language Java NetBeans in the year 2020. The project allows users to perform basic arithmetic operations with numbers. ',
    hardware: 
      'Java NetBeans',
    cv: ''
  },
  {
    id: 3,
    title: 'Human Resource Development Office Information System',
    href: '#',
    imageSrc: HRDOIS,
    description:
      'Human Resource Development Office Information System (HRDOIS) was developed using the programming language PHP, JAVASCRIPT, CSS, Bootstrap and XAMPP SQL as a localhost in the year 2020. This system is divided into four units such as RSP, L&D, PRM, and Lastly, R&R. Furthermore, this system is a solution to assist HRDO on their traditional way of processing, transactions and services.',
    hardware: 
      'PHP | JAVASCRIPT | CSS | XAMPP SQL | BOOTSTRAP',
    cv: ''
  },
];

export default function Example() {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  const goToNextPost = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex === posts.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevPost = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex === 0 ? posts.length - 1 : prevIndex - 1));
  };

  const currentPost = posts[currentPostIndex];

  return (
    <div>
      <Header />
      <div className="gradient-grey h-screen w-screen relative flex justify-center overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center">
              <div className="flex flex-col items-center">
                <div className="relative max-w-4xl mx-auto">
                  <h1 className="mt--5 text-2xl font-bold leading-6 text-gray-900 text-center mt-10">{currentPost.title}</h1>
                  <div className="flex justify-center items-center mt-5">
                    <button onClick={goToPrevPost} className="mr-4 px-3 py-2 focus:outline-none rounded-full bg-gray-200 w-12 h-12 shadow-md hover:bg-gray-400 hover:text-white transition duration-300 ease-in-out">
                      <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
                    </button>
                    <img src={currentPost.imageSrc} alt={currentPost.title} className="mt--15" />
                    <div className='ml-4'>
                      <button onClick={goToNextPost} className="px-3 py-2 focus:outline-none rounded-full bg-gray-200 w-12 h-12 shadow-md hover:bg-gray-400 hover:text-white transition duration-300 ease-in-out">
                        <ChevronRightIcon className="h-6 w-6 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{currentPost.description}</p>
                  <p className="text-gray-600">Development Tool: {currentPost.hardware}</p>
                  <p className="text-gray-600">Developer's Resume:  <button onClick={() => window.open(pdfFile)} className="bg-gray-600 rounded-lg text-white" style={{ width: '100px', lineHeight: '25px', fontWeight: 'bold' }}> Resume PDF</button></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
