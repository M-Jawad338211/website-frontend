

import './App.css';
import * as React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Portfolio from './pages/Portfolio';
import Animations from './pages/Animations';
import Footer from './components/Footer';
import Avlab from './pages/Avlab';
import { useLocation } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  console.log('Current location:', location.pathname); 

  // Hide header/footer on specific pages
  const hideHeaderFooter = location.pathname.includes("/avlab");

  return (
    <>
      {/* Conditionally render Header */}
      {!hideHeaderFooter && <Header />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/animations" element={<Animations />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/avlab/:id" element={<Avlab />} />
        {/* Add a default route to catch unmatched paths */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>

      {/* Conditionally render Footer */}
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
