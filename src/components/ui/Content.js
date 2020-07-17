import React from "react";
import marked from "marked";

const Content = ({ item, onClose }) => {
    const summary = marked(item.summary);

    return (
        <div className="content">
            <div className="content__background">
                <div className="content__background__shadow" />
                <div
                    className="content__background__image"
                    style={{ backgroundImage: `url(${item.image.medium})` }}
                />
            </div>
            <div className="content__area">
                <div className="content__area__container">
                    <div className="content__title">{item.name}</div>
                    <div className="content__description">
                        <p dangerouslySetInnerHTML={{ __html: summary }} />
                    </div>
                </div>
                <button className="content__close" onClick={onClose}>
                    <span>
                        <i className="fas fa-angle-down"></i>
                    </span>
                </button>
            </div>
            {item.name}
            {item.summary}
        </div>
    );
};

export default Content;
