import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import SkillsandKnowledge from './components/SkillsandKnowledge';
import LoginRegistration from "./components/LoginRegistration";
import File from "./components/File/VILLANUEVA-RESUME.pdf";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/projects" component={Projects} />
        <Route path="/skillsandknowledge" component={SkillsandKnowledge} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/file" component={File} />
        <Route path="/" render={() => (
          <div className="App gradient-grey h-screen w-screen relative flex justify-center items-center">
            <div className="flex flex-col items-center justify-center py-2 bg-gray-10 bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
              <LoginRegistration />
            </div>
          </div>
        )} /> 
      </Switch>
    </Router>
  );
}

export default App;
