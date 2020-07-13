import React, { useState } from "react";
import axios from "axios";
import searchLogo from "../../images/searchLogo.svg";
// import Search from "./Search";
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
            <a href="/">
                <img src={searchLogo} alt="logo" className="logo" />
            </a>
            {/* <Search value={query} onChange={onChange} onSubmit={searchItems} /> */}
            <>
                <form className="form" onSubmit={searchItems}>
                    <input
                        type="text"
                        className="input"
                        name="query"
                        value={query}
                        onChange={onChange}
                        placeholder="i.e. Dorahodora"
                    />
                    <button className="button" type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </>
            <SearchRes items={items} />
        </header>
    );
};

export default Header;
