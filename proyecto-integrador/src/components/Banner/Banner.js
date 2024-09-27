import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Banner/styles.css"

function Banner() {
    const [oldSlide, setOldSlide] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeSlide2, setActiveSlide2] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => {
            setOldSlide(current);
            setActiveSlide(next);
        },
        afterChange: current => setActiveSlide2(current)
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img
                        className="slider-img"
                        src="./imgs/1.png"
                    />
                </div>
                <div>
                    <img
                        className="slider-img"
                        src="./imgs/2.png"
                    />
                </div>
                <div>
                    <img
                        className="slider-img"
                        src="./imgs/3.png"
                    />
                </div>
            </Slider>
        </div>

    )
}

export default Banner;