import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx'
import './App.css';
//import mkHeader from'./images/mkHeader.jpg'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from './components/Pages/Home/Home.jsx';
import About from './components/Pages/About/About.jsx';
import Blog from './components/Pages/Blog/Blog.jsx';
import Testimonials from './components/Pages/Testimonials/Testimonials.jsx';
import Contact from './components/Pages/Contact/Contact.jsx';

function App() {
  return (
    
      <Router>
    
    <Navbar/>
    
        <Routes>
          <Route path="/" element={<Home/>} />  
          <Route path="/about" element={<About/>} /> 
          <Route path="/blog" element={<Blog/>} /> 
          <Route path="/testi" element={<Testimonials/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes> 
     
      </Router> 
     
  );
}

export default App;
