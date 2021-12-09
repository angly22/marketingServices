import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx'
import './App.css';
//import mkHeader from'./images/mkHeader.jpg'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from './components/Pages/Home/Home.jsx';

function App() {
  return (
    
      <Router>
    
    <Navbar/>
    
        <Routes>
          <Route path="/" element={<Home/>} />  
          {/* <Route path="/user/:userId" element={<User/>} />
          <Route path="/newUser" element={<NewUser/>} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/product/:productId" element={<Product/>} />
          <Route path="/newProduct" element={<NewProduct/>} /> */}

        </Routes> 
     
      </Router> 
     
  );
}

export default App;
