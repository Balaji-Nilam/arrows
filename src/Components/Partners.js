import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Partners.css'; // Import the custom CSS file
const Partner = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true,
                },
            },
        ],
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <section className="partners">
            <h3>Our trusted partners around the world</h3>
            <div className="partners-slider">
                <Slider {...settings}>
                    <div className="item brand-item">
                        <img alt="" src="images/brand-logos/matoontapa.png" />
                    </div>
                    <div className="item brand-item">
                        <img alt="" src="images/brand-logos/khostan.png" />
                    </div>
                    <div className="item brand-item">
                        <img alt="" src="images/brand-logos/etimadya.png" />
                    </div>
                    <div className="item brand-item">
                        <img alt="" src="images/brand-logos/torghar.png" />
                    </div>
                    <div className="item brand-item">
                        <img alt="" src="images/brand-logos/nadershakot.png" />
                    </div>
                    <div className="item brand-item">
                        <img alt="" src="images/brand-logos/almarah.png" />
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Partner;