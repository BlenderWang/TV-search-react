import React from "react";

const SearchRes = ({ items }) => {
    return (
        <div className="slider-wrapper result">
            <div className="slider__container" style={{ marginTop: "6rem" }}>
                {items
                    .filter((item) => item.show.name)
                    .map((item) => (
                        <div className="item" key={item.show.id}>
                            {item.show.image && (
                                <img
                                    src={item.show.image.medium}
                                    alt={item.show.name}
                                />
                            )}
                            {/* <div className="card__content">
                                    <h3 className="card__title">
                                        {item.show.name}
                                    </h3>
                                    <p>Rating: {item.show.rating.average}</p>
                                </div> */}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default SearchRes;
