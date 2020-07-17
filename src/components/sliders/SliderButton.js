import React from "react";

const SliderButton = ({ onClick, type }) => {
    return (
        <button className={`slider-btn slider-btn--${type}`} onClick={onClick}>
            <span>
                <i className="fas fa-angle-down"></i>
            </span>
        </button>
    );
};

export default SliderButton;
