import './App.css';
import React from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Threejs from './Threejs'

class App extends React.Component {

  constructor(props) {
    super(props);
    // Create a ref to the div we want to apply styles to
    this.appDiv = React.createRef();
  }

  handleResize = () => {
    this.appDiv.current.style.height = `${window.innerHeight}px`;
    this.appDiv.current.style.width = `${window.innerWidth}px`;
  };

  componentDidMount() {
    // Listen for resize events
    window.addEventListener('resize', this.handleResize);
    // Set the initial size
    this.handleResize();
  }

  componentWillUnmount() {
    // Stop listening for resize events
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div className="App" ref={this.appDiv}>
        <div>
          <nav>
            <ul id="navigation">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "nav-active" : "nav-link")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "nav-active" : "nav-link")}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "nav-active" : "nav-link")}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/threejs"
                  className={({ isActive }) => (isActive ? "nav-active" : "nav-link")}
                >
                  Threejs
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route
            exact path="/"
            element={(
              <Home />
            )}
          />
          <Route
            path="/about"
            element={(
              <About />
            )}
          />
          <Route
            path="/contact"
            element={(
              <Contact />
            )}
          />
          <Route
            path="/threejs"
            element={(
              <Threejs />
            )}
          />
          ...
        </Routes>
      </div>
    );
  }
}

export default App;