import './App.css';
import * as React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Portfolio from './pages/Portfolio';
function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    </Router>
  )
}

export default App;
