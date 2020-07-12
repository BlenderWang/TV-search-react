import React, { useState } from "react";
import axios from "axios";
import searchLogo from "../../images/searchLogo.svg";
import Search from "./Search";
import SearchRes from "./SearchRes";

const Header = () => {
    const [query, setQuery] = useState("");
    const [items, setItems] = useState([]);

    const onChange = (e) => {
        setQuery(e.target.value);
    };

    const searchItems = async (e) => {
        e.preventDefault();

        const url = `http://api.tvmaze.com/search/shows?q=${query}`;

        try {
            const res = await axios(url);

            console.log(res.data);
            setItems(res.data);
            setQuery("");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <header className="header">
            <img src={searchLogo} alt="logo" className="logo" />
            <Search onChange={onChange} onSubmit={searchItems} />
            <SearchRes items={items} />
        </header>
    );
};

export default Header;
