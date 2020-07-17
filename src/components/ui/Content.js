import React from "react";

const Content = ({ item, onClose }) => {
    return (
        <div className="content">
            {item.name}
            {item.summary}
        </div>
    );
};

export default Content;
