import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';
import LoginRegistration from "./components/LoginRegistration";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/welcome" component={Welcome} />
      </Switch>
      <div className="App gradient-gray h-screen w-screen relative flex justify-center items-center">
        <div className="flex flex-col items-center justify-center py-2 bg-gray-10 bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
          <LoginRegistration />
        </div>
      </div>
    </Router>

  );
}

export default App;
