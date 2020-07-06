import React from "react";

const SliderItem = ({ item }) => {
    return (
        <div className="item">
            <img src={item.image.medium} className="" alt={item.name} />
            <button className="show-details-btn">
                <span>
                    <i className="fas fa-angle-down"></i>
                </span>
            </button>
        </div>
    );
};

export default SliderItem;
