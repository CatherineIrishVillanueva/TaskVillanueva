import React, { useState, useEffect } from 'react';
import Header from './Header';
import java_logo from './Images/java-icon.png';
import python_logo from './Images/python-icon.png';
import c_logo from './Images/c++-icon.png';
import html_logo from './Images/html-icon.png';
import php_logo from './Images/php-icon.png';
import javascript_logo from './Images/javaScript-icon.png';
import css_logo from './Images/css-icon.png';
import tailwind_logo from './Images/tailwind-icon.png';
import bootstrap_logo from './Images/bootstrap-icon.png';
import react_logo from './Images/react-icon.png';
import xampp_logo from './Images/xampp-icon.png';
import oracle_logo from './Images/oracle-icon.png';
import mySQL_logo from './Images/mySQL-icon.png';
import '../App.css';


const Projects = () => {
  const [activeContent, setActiveContent] = useState(1); 

  const handleButtonClick = (contentNumber) => {
    setActiveContent(contentNumber);
  };

  const renderContent = () => {
    switch (activeContent) {
      case 1:
        return (
          <div className="grid grid-cols-3 gap-4">
            <div>
              <img src={java_logo} className="mx-auto mb-2" style={{ width: '75px', height: '7s5px', marginTop: '8px' }} />
              <p className="text-center">Java</p>
              <p className="text-center">The first programming language I learned and used to developed projects and system.</p>
            </div>
            <div>
              <img src={python_logo} className="mx-auto mb-2" style={{ width: '75px', height: '75px', marginTop: '8px' }}/>
              <p className="text-center">Python</p>
              <p className="text-center">I learned basics of python, but this is my least favorite programming language.</p>
            </div>
            <div>
              <img src={c_logo} className="mx-auto mb-2" style={{ width: '75px', height: '75px', marginTop: '8px' }} />
              <p className="text-center">C++</p>
              <p className="text-center">I learned basics of C++, this programming language is similar to Java Syntax.</p>
            </div>
            <div>
              <img src={html_logo} className="mx-auto mb-2" style={{ width: '165px', height: '75px', marginTop: '5px' }} />
              <p className="text-center">HTML</p>
              <p className="text-center">I learned how to create a front-end website using HTML.</p>
            </div>
            <div>
              <img src={php_logo} className="mx-auto mb-2" style={{ width: '125px', height: '75px', marginTop: '5px'  }}/>
              <p className="text-center">PHP</p>
              <p className="text-center">I learned how to use PHP and developed a system entitled 'Graduate Tracer System'.</p>
            </div>
            <div>
              <img src={javascript_logo} className="mx-auto mb-2" style={{ width: '165px', height: '75px', marginTop: '5px'  }}/>
              <p className="text-center">JavaScript</p>
              <p className="text-center">I learned how to enhance and more functional a project using JavaScript.</p>
            </div>
            <div>
              <img src={css_logo} className="mx-auto mb-2" style={{ width: '145px', height: '75px', marginTop: '5px'  }} />
              <p className="text-center">CSS</p>
              <p className="text-center">I learned how to design a project using CSS for more userfriendly and interactive interface. </p>
            </div>
            <div>
              <img src={tailwind_logo} className="mx-auto mb-2" style={{ width: '125px', height: '75px', marginTop: '5px'  }} />
              <p className="text-center">Tailwind CSS</p>
              <p className="text-center">I learned how to use Tailwind CSS, a library that allows user to easily design web pages.</p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <img src={bootstrap_logo} className="mx-auto mb-2" style={{ width: '75px', height: '75px', marginTop: '8px' }}/>
              <p className="text-center">Bootstrap</p>
              <p className="text-center">The first framework I used in my previous projects that is created using HTML, PHP, JavaScript and CSS.</p>
            </div>
            <div>
              <img src={react_logo} className="mx-auto mb-2" style={{ width: '75px', height: '75px', marginTop: '8px' }} />
              <p className="text-center">React JS</p>
              <p className="text-center">I'm still learning how to use React JS framework and libraries. This framework is easy to use and create a website easily and hassle free.</p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="grid grid-cols-3 gap-4">
            <div>
              <img src={oracle_logo} className="mx-auto mb-2" style={{ width: '165px', height: '75px', marginTop: '8px' }}/>
              <p className="text-center">Oracle Database</p>
              <p className="text-center">The first database I practice to use. I learned the syntax on how to manipulate the data stored in database.</p>
            </div>
            <div>
              <img src={mySQL_logo} className="mx-auto mb-2" style={{ width: '165px', height: '75px', marginTop: '8px' }} />
              <p className="text-center">mySQL</p>
              <p className="text-center">mySQL is my current database used in my system entitled 'Human Resource Development Office Information System', this is free and more easy to use other than other databases.</p>
            </div>
            <div>
              <img src={xampp_logo} className="mx-auto mb-2" style={{ width: '75px', height: '75px', marginTop: '8px' }} />
              <p className="text-center">XAMPP</p>
              <p className="text-center">XAMPP is a localhost server i used in my developed system entitled 'Human Resource Development Office Information System'.</p>
            </div>
          
          </div>
        );
      default:
        return null;
    }
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
      <div className="gradient-grey h-screen w-screen relative flex justify-center overflow-hidden">
        <div>
          <h1 className="animate-header text-4xl font-bold mb-4 text-center text-black mt-5">Skills and Knowledge</h1>
          <div className="container mx-auto pl-4 pr-4">
            <div className="flex justify-center mb-4">
              <button 
                className={`text-center text-black bg-blue-300 hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md ${activeContent === 1 ? 'text-white bg-blue-800' : ''}`} 
                onClick={() => handleButtonClick(1)}
                title='Click to View All Programming Language that I know.'
                style={{ marginRight: '8px' }} 
              >
                Website | Application Programming Language
              </button>
              <button 
                className={`text-center text-black bg-blue-300 hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md ${activeContent === 2 ? 'text-white bg-blue-800' : ''}`} 
                onClick={() => handleButtonClick(2)}
                title='Click to View the framework I used.'
                style={{ marginRight: '8px' }} 
              >
                Framework
              </button>
              <button 
                className={`text-center text-black bg-blue-300 hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md ${activeContent === 3 ? 'text-white bg-blue-800' : ''}`} 
                onClick={() => handleButtonClick(3)}
                title='Click to View the databases that I learned to use.'
              >
                Database | Localhost
              </button>
            </div>
            <hr/>
            {renderContent()} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
