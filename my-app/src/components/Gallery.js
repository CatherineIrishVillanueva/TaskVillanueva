import React, { useState, useEffect} from 'react';
import Header from './Header';
import shs1 from './Images/shs1.jpg';
import shs from './Images/shs.jpg';
import BasicCalculator from './Images/BasicCalculator1.png';
import RegisterLogin from './Images/RegisterLogin.png';
import college from './Images/college.jpg';
import cavsu from './Images/cavsu.png';
import OnlineClass from './Images/OnlineClass.jpg';
import PythonGUI from './Images/PythonGUI.png';
import Tapsilog from './Images/TapsilogOrderingSystem.png';
import HRDOIS from './Images/HRDOIS.png';
import closeIcon from './Images/closeIcon.png';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedText, setSelectedText] = useState('');

  const openModal = (image, text) => {
    setSelectedImage(image);
    setSelectedText(text);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedText('');
  };

  useEffect(() => {
    const header = document.querySelector('.animate-header');
    header.classList.add('fade-in');
    return () => {
      header.classList.remove('fade-in');
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="gradient-grey h-screen w-screen relative flex justify-center items-center overflow-hidden">
        <div>
          <h1 className="animate-header text-4xl font-bold mb-4 text-center text-black" style={{ marginTop: '-80px' }}>My Journey</h1>
          <div className="grid grid-cols-5 gap-2">
            <img src={shs} className="rounded-lg object-cover" style={{ width: '285px', height: '285px', marginLeft: '-14px'}} title='click for more details' onClick={() => openModal(shs, "I started this path when I choose to enrolled in senior high school in strand 'Information, Communication and Technology'. My parents said that ICT jobs are indemand in this era, this is the reason why I choose this strand.")} />
            <img src={shs1} className="rounded-lg object-cover" style={{ width: '285px', height: '285px', marginLeft: '-11px' }} title='click for more details' onClick={() => openModal(shs1, "At first I don't have any idea with this strand, but to be able to fit with this strand I started to do advance study with programming language Java.")} />
            <img src={BasicCalculator} className="rounded-lg object-cover"  style={{ width: '285px', height: '285px', marginLeft: '-7px' }} title='click for more details' onClick={() => openModal(BasicCalculator, "The image above shows my first and favorite application made using Java Programming Language, a Basic Calculator.")} />
            <img src={cavsu} className="rounded-lg object-cover"  style={{ width: '285px', height: '285px', marginLeft: '-4px' }} title='click for more details' onClick={() => openModal(cavsu, "In the year 2020, I enrolled to a course 'Bachelor of Science and Information Technology' in Cavite State University - Main Campus.")} />
            <img src={OnlineClass} className="rounded-lg object-cover" style={{ width: '285px', height: '285px', marginLeft: '-2px'}} title='click for more details' onClick={() => openModal(OnlineClass, "Due to the covid 19 pandemic, I attended online classes. At first, I found it difficult to adapt with the mode of learning. I barely understand the programming lessons.")} />
            <img src={PythonGUI} className="rounded-lg object-cover" style={{ width: '285px', height: '285px', marginLeft: '-14px' }} title='click for more details' onClick={() => openModal(PythonGUI, "I learned from 1st year in College on how to use python as a programming language. The image above shows the first grapical user interface I created using python.")} />
            <img src={Tapsilog} className="rounded-lg object-cover" style={{ width: '285px', height: '285px', marginLeft: '-9px' }} title='click for more details' onClick={() => openModal(Tapsilog, "In the 2st year of College, we use Java Netbeans. The image above shows the final project I develop entitled 'Tapsilog Fast Food Ordering System'. This system allows users to order foods and drinks from the menu and can pay and receive a receipt. Moreover, I also learned how to design website using html and css.")} />
            <img src={college} className="rounded-lg object-cover" style={{ width: '285px', height: '285px', marginLeft: '-7px' }} title='click for more details' onClick={() => openModal(college," 3rd year in College, our first face to face classes. I learned how to use php, designing website, and securing data using cryptography.")} />
            <img src={HRDOIS} className="rounded-lg object-cover" style={{ width: '285px', height: '285px', marginLeft: '-4px' }} title='click for more details' onClick={() => openModal(HRDOIS, "In the last year of my college, we need to developed a system called capstone project. This image above shows our developed system entitled 'Human Resource Development Office Information System'. This system is divided into four units Recruiptment, Selection, and Placement (RSP),Learning and development (L&D), Performance and Records Management (PRM), and Lastly, Rewards and Recognation (R&R). Furthermore, this system is a solution to assist HRDO on their traditional way of processing, transactions and services.")} />
            <img src={RegisterLogin} className="rounded-lg object-cover"  style={{ width: '285px', height: '285px', marginLeft: '-2px' }} title='click for more details' onClick={() => openModal(RegisterLogin, "The image above shows the Registration Page, a project I currently enhancing. This project is developed using React JS, Tailwind CSS, Redux, Formik, and Crypto JS.")} />
          </div>
        </div>
      </div>
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="max-w-2xl p-3 bg-white rounded-lg relative">
         <img src={selectedImage} style={{ width: '630px', heightt: '380px'}} />
         <p style={{ width: '630px', textAlign: 'justify'}}>{selectedText}</p>
          <button className="absolute top-0 right-0 m-4" onClick={closeModal}>
            <img src={closeIcon} className="w-8 h-8" />
          </button>
        </div>
      </div>
      
      )}
    </div>
  );
};

export default Projects;
