import React from "react";
import searchLogo from "../../images/searchLogo.svg";
import Search from "./Search";

const Header = () => {
    return (
        <header className="header">
            <img src={searchLogo} alt="logo" className="logo" />
            <Search />
        </header>
    );
};

export default Header;
