import React, { useState } from "react";
// import SliderContext from "../context";
// import useSliding from '../useSliding'
import SliderItem from "./SliderItem";
import SliderButton from "./SliderButton";

const Slider = ({ isLoading, items }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        console.log("previous");
    };

    const handleNext = () => {
        setCurrentSlide(currentSlide + `100px`);
    };

    return isLoading ? (
        <h1>loading...</h1>
    ) : (
        <>
            <div className="slider__container">
                {items.map((item, index) => (
                    <SliderItem key={item.id} item={item} />
                ))}
            </div>
            <SliderButton type="prev" onClick={handlePrev} />
            <SliderButton type="next" onClick={handleNext} />
        </>
    );
};

export default Slider;
