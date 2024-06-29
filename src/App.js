/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Services from './components/Services';
// import Login from './components/Login';
import Navbar from './Components/Navbar';
import Btech_Home from './Btech/Btech_Home';
import Mtech_Home from './Mtech/Mtech_Home';

const App = () => {
    return (
        <Router>
            
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Btech_Course" element={<Btech_Home/>} />
                <Route path='/Mtech_Course' element={<Mtech_Home/>}/>
                {/* <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/login" element={<Login />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
