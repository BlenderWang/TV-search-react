import React from "react";

const SliderButton = ({ onClick, type }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`slider-btn slider-btn--${type}`}
        >
            <span>
                <i className="fas fa-angle-down"></i>
            </span>
        </button>
    );
};

export default SliderButton;
