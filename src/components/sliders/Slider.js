import React from "react";
import SliderItem from "./SliderItem";
import SliderButton from "./SliderButton";

const Slider = ({ isLoading, items }) => {
    return isLoading ? (
        <h1>loading...</h1>
    ) : (
        <>
            <div className="slider__container">
                {items.map((item, index) => (
                    <SliderItem key={item.id} item={item} />
                ))}
            </div>
            <SliderButton type="prev" />
            <SliderButton type="next" />
        </>
    );
};

export default Slider;
