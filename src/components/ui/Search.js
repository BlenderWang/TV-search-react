import React, { useState } from "react";
import axios from "axios";

const Search = () => {
    const [query, setQuery] = useState("");
    const [items, setItems] = useState([]);

    const searchItems = async (e) => {
        e.preventDefault();

        const url = `http://api.tvmaze.com/search/shows?q=${query}`;

        try {
            const res = await axios(url);

            console.log(res.data);
            setItems(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <form className="form" onSubmit={searchItems}>
                <label htmlFor="query" className="label"></label>
                <input
                    type="text"
                    className="input"
                    name="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="i.e. Dorahodora"
                />
                <button className="button" type="submit">
                    Search
                </button>
            </form>

            <div className="results-container">
                {items
                    .filter((item) => item.show.name)
                    .map((item) => (
                        <div className="card" key={item.show.id}>
                            <img
                                src={item.show.image.medium}
                                alt={item.show.name}
                            />
                            <div className="card__content">
                                <h3 className="card__title">
                                    {item.show.name}
                                </h3>
                                <p>Rating: {item.show.rating.average}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Search;
