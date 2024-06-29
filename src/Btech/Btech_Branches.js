import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
//import './Carousel.css'; // Make sure to include your CSS file for additional styling

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust settings for tablet and below
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768, // Adjust settings for mobile and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480, // Adjust settings for small mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ],
	autoplay: true,
    autoplaySpeed:2000,
  };

  return (
    <section className="categories" id="categories">
      <header className="section-header">
        <h1>Specializations in B.Tech</h1>
      </header>
      <div className="categories-contents">
        <Slider {...settings}>
          <div className="category-item">
            <div className="category-icon">
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <div className="category-desc">
              <h3>Computer Science Engineering</h3>
            </div>
          </div>

          <div className="category-item">
            <div className="category-icon">
              <i className="fa-solid fa-code"></i>
            </div>
            <div className="category-desc">
              <h3>Information Technology</h3>
            </div>
          </div>

          <div className="category-item">
            <div className="category-icon">
              <i className="fa-solid fa-bullhorn"></i>
            </div>
            <div className="category-desc">
              <h3>Artificial Intelligence and Machine Learning</h3>
            </div>
          </div>

          <div className="category-item">
            <div className="category-icon">
              <i className="fa-solid fa-database"></i>
            </div>
            <div className="category-desc">
              <h3>Artificial Intelligence and Data Science</h3>
            </div>
          </div>

          <div className="category-item">
            <div className="category-icon">
              <i className="fa-solid fa-broadcast-tower"></i>
            </div>
            <div className="category-desc">
              <h3>Electronics and Communication Engineering</h3>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
