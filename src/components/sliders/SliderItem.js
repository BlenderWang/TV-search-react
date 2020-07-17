import React from "react";
// import SliderButton from "./SliderButton";

const SliderItem = ({ item }) => {
    return (
        <>
            <div className="item">
                <img src={item.image.medium} alt="" />
            </div>
            {/* <SliderButton onClick={() => console.log("click")} /> */}
        </>
    );
};

export default SliderItem;
