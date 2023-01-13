import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React, { Component }  from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './pages/Porfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;