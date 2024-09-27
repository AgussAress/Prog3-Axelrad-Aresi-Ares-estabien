import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Banner/styles.css"

function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img
                        className="slider-img"
                        src="./imgs/1.png"
                        alt="imagen"
                    />
                </div>
                <div>
                    <img
                        className="slider-img"
                        src="./imgs/2.png"
                        alt="imagen"
                    />
                </div>
                <div>
                    <img
                        className="slider-img"
                        src="./imgs/3.png"
                        alt="imagen"
                    />
                </div>
            </Slider>
        </div>

    )
}

export default Banner;