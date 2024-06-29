import React from 'react';
import './Video.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';

const Video = () => {
  const typingElementRef = useRef(null);

  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.reveal', {
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom',
    });

    // Initialize Typed.js
    const typed = new Typed(typingElementRef.current, {
      strings: ["Hello, world!", "Welcome to my website.", "Enjoy your stay!"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    // Cleanup Typed.js instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="video-container">
      <video className="background-video" autoPlay loop muted>
        <source src="2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
      <h1 className="reveal">Welcome to My Website</h1>
      <h3><div id="typing-element" ref={typingElementRef}></div></h3>
    </div>
      <div className="search-overlay">
        <div className="search_box">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <i className="fas fa-search"></i>
        </div>
      </div>
    </div>
  );
};

export default Video;