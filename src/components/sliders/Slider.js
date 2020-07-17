import React, { useState } from "react";
import SliderContext from "../context";
import SliderItem from "./SliderItem";
import SliderButton from "./SliderButton";
import Content from "../ui/Content";

const Slider = ({ isLoading, items, activeSlide }) => {
    const [currentSlide, setCurrentSlide] = useState(activeSlide);
    const [view, setView] = useState(0);

    const handlePrev = () => {
        setView(view - 1);
    };

    const handleNext = () => {
        setView(view + 1);
    };

    const handleClose = () => {
        setCurrentSlide(null);
    };

    return isLoading ? (
        <h1>loading...</h1>
    ) : (
        <SliderContext.Provider>
            <div className="slider__container">
                {items.map((item, index) => (
                    <SliderItem key={item.id} item={item} />
                ))}
            </div>
            <SliderButton type="prev" onClick={handlePrev} />
            <SliderButton type="next" onClick={handleNext} />

            {currentSlide && (
                <Content movie={currentSlide} onClose={handleClose} />
            )}
        </SliderContext.Provider>
    );
};

export default Slider;
