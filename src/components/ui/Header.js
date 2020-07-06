import React from "react";
import laptop from "../../images/laptop.svg";
import Search from "./Search";

const Header = () => {
    return (
        <header className="header">
            <img src={laptop} alt="laptop" className="logo" />
            <Search />
        </header>
    );
};

export default Header;
