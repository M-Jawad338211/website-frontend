import './App.css';
import * as React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import Home from './pages/Home';
function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* Add other routes here */}
        </Routes>
    </Router>
  )
}

export default App;
