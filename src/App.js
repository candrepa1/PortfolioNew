import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/overwrite.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import About from './components/About.js';

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Route path="/" exact component={Home}/>
        <Route path="/projects" exact component={Projects}/>
        <Route path="/about-me" exact component={About}/>
      </BrowserRouter>
  );
}

export default App;
