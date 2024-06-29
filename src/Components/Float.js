import React from 'react';
import './Float.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Float() {
    return (
        <section className="services section2" id="services">
            <div className='Choose'>
                <h1>Why Choose Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
            <div className="services-contents">
                <div className="service-box">
                    <div className="service-icon">
                        <i className="fa-solid fa-calendar"></i>
                    </div>
                    <div className="service-desc">
                        <h2>Admission Guidance</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className="service-box">
                    <div className="service-icon">
                        <i className="fa-solid fa-users"></i>
                    </div>
                    <div className="service-desc">
                        <h2>Scholarship Information</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className="service-box">
                    <div className="service-icon">
                        <i className="fa-solid fa-clock"></i>
                    </div>
                    <div className="service-desc">
                        <h2>24/7 Live Support</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Float;
