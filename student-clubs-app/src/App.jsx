import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Clubs from './pages/Clubs';
import Contact from './pages/Contact';
import ClubDetails from './pages/ClubDetails'; 

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/clubs/:id" element={<ClubDetails />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;