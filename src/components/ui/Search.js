import React from "react";
// import axios from "axios";
// import SearchRes from "./SearchRes";

const Search = ({ query, onChange, onSubmit }) => {
    return (
        <>
            <form className="form" onSubmit={onSubmit}>
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
    );
};

export default Search;
