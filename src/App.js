import './App.css';
import React from 'react';
import { Router, Routes, Route, Link } from "react-router-dom";
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Threejs from './Threejs'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav>
            <ul id="navigation">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/threejs">Three.js</Link>
              </li>
            </ul>
          </nav>
        </div>
          <Routes>
            <Route
              exact path="/"
              element={(
                <Home/>
              )}
            />
             <Route
              path="/about"
              element={(
                <About/>
              )}
            />
             <Route
              path="/contact"
              element={(
                <Contact/>
              )}
            />
            <Route
              path="/threejs"
              element={(
                <Threejs/>
              )}
            />
            ...
          </Routes>
      </div>
    );
  }
}

export default App;