// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import ResponsiveAppBar from './components/Navbar';
import About from './components/About';
import Home from './Pages /home';
import ContactForm from './components/Contact ';
import SimpleBottomNavigation from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <ResponsiveAppBar />
          <div className="content">
            <Home />
            <Routes>
              <Route
                path="/about" element={<About />} />
              <Route path="/reactPortfolioElia-/src/components/Contact" element={<ContactForm />} />
              

            </Routes>
          </div>
      </div>
      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
