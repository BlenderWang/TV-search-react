import React from "react";
import SliderItem from "./SliderItem";

const SliderWrapper = ({ items, isLoading }) => {
    return isLoading ? (
        <h1>loading...</h1>
    ) : (
        <section className="slider-wrapper">
            <div className="slider__container">
                {items.map((item, index) => (
                    <SliderItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default SliderWrapper;
