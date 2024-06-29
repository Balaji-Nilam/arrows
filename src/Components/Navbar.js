import React, { useEffect } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('nav');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        const handleResize = () => {
            const checkBox = document.getElementById('check');
            const navItems = document.querySelector('nav ol');
            if (window.innerWidth > 768) {
                navItems.style.display = 'flex';
                checkBox.checked = false;
            } else {
                navItems.style.display = 'none';
            }
        };

        const handleMenuToggle = () => {
            const checkBox = document.getElementById('check');
            const navItems = document.querySelector('nav ol');
            if (checkBox.checked) {
                navItems.style.display = 'block';
            } else {
                navItems.style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial state based on current window size

        const checkBox = document.getElementById('check');
        checkBox.addEventListener('change', handleMenuToggle);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            checkBox.removeEventListener('change', handleMenuToggle);
        };
    }, []);

    return (
        <div className='Navbar'>
            <header>
                <input type="checkbox" id="check" />
                <nav>
                    <div className="icon"><img src='ed.png' alt='img'></img></div>
                    <div className="search_boxes">
                        <input type="search" placeholder="Search here" />
                        <span className="fa fa-search"></span>
                    </div>
                    <ol>
                        <li><Link to='/'><a href="#">home</a></Link></li>
                        <li><Link to="/Btech_Course">Courses</Link></li>
                        <li><Link to='/'><a href="#">contact</a></Link></li>
                        <li><Link to='/'><a href="#">services</a></Link></li>
                        <li><a href="#footer">about</a></li>
                    </ol>
                    <label htmlFor="check" className="bar">
                        <span className="fa fa-bars" id="bars"></span>
                        <span className="fa fa-times" id="times"></span>
                    </label>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
