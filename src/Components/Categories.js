import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Categories.css'
// Custom arrow components
const Categories=()=>{
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
              ...style,
               display: 'flex', // Add this to center the middle button
               justifyContent: 'center', // Add this to center the middle button
               alignItems: 'center', // Add this to center the middle button
               background: '#412f93',
               borderRadius: '50%',
               width: '40px', // adjust size as needed
               height: '40px', // adjust size as needed
               position: 'elative', // Add this to position the hole button
             }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
              ...style,
               display: 'flex', // Add this to center the middle button
               justifyContent: 'center', // Add this to center the middle button
               alignItems: 'center', // Add this to center the middle button
               background: '#412f93',
               borderRadius: '50%',
               width: '40px', // adjust size as needed
               height: '40px', // adjust size as needed
               position: 'elative', // Add this to position the hole button
               marginRight: 10, // Add a margin to create a gap
             }}
            onClick={onClick}
        />
    );
};

const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Adjust settings for tablet and below
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 768, // Adjust settings for mobile and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 480, // Adjust settings for small mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ],
	autoplay: true,
    autoplaySpeed:2000,
  };

    return (
        <div>
        <section className="categories" id="categories">
	<header className="section-header">
		<h1>Brouse Courses By Categories</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</header>  
	<div className="categories-contents">
    <Slider {...settings}>		
		<div className="category-item">
			<div className="category-icon">
				<i className="fa-solid fa-palette"></i>
			</div>
			<div className="category-desc">
				<h3>Designing</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
		</div>

		<div className="category-item">
			<div className="category-icon">
				<i className="fa-solid fa-code"></i>
			</div>
			<div className="category-desc">
				<h3>Development</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
		</div>

		<div className="category-item">
			<div className="category-icon">
				<i className="fa-solid fa-bullhorn"></i>
			</div>
			<div className="category-desc">
				<h3>Marketing</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
		</div>

		<div className="category-item">
			<div className="category-icon">
				<i className="fa-solid fa-camera"></i>
			</div>
			<div className="category-desc">
				<h3>Photography</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
		</div>
        </Slider>
	</div>
</section>
</div>
        
    );
};

export default Categories;