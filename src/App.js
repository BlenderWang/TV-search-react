import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/ui/Header";
import SliderWrapper from "./components/sliders/SliderWrapper";

function App() {
    const [items, setItems] = useState([]);
    const [genres, setGenres] = useState([]);
    const [premiered, setPremiered] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://api.tvmaze.com/shows`);
            // based on rating
            const topTenshows = result.data
                .filter((show) => show.rating.average)
                .sort((a, b) => (a.rating.average > b.rating.average ? -1 : 1))
                .slice(0, 9);
            console.log(topTenshows);

            // based on genres of comedy
            const genres = result.data
                .filter((show) => show.genres.includes("Comedy"))
                .slice(0, 9);
            console.log(genres);

            // based on premiered dates
            const premiered = result.data
                .filter((show) => show.premiered.split("-").join(""))
                .sort((a, b) => (a.premiered > b.premiered ? -1 : 1))
                .slice(0, 9);
            console.log(premiered);

            setItems(topTenshows);
            setGenres(genres);
            setPremiered(premiered);
            setIsLoading(false);
        };

        fetchItems();
    }, []);

    return (
        <div className="container">
            <Header />

            <SliderWrapper isLoading={isLoading} items={items} />

            <section className="slider-wrapper">
                <h2 className="slider__title">Comedy</h2>

                <div className="slider__container">
                    <span>
                        <i className="fas fa-angle-left"></i>
                    </span>
                    {genres.map((genre) => (
                        <div className="item" key={genre.id}>
                            <img src={genre.image.medium} alt={genre.name} />
                        </div>
                    ))}
                    <span>
                        <i className="fas fa-angle-right"></i>
                    </span>
                </div>
            </section>

            <section className="slider-wrapper">
                <h2 className="slider__title">Already Ended</h2>

                <div className="slider__container">
                    <span>
                        <i className="fas fa-angle-left"></i>
                    </span>
                    {premiered.map((date) => (
                        <div className="item" key={date.id}>
                            <img src={date.image.medium} alt={date.name} />
                        </div>
                    ))}
                    <span>
                        <i className="fas fa-angle-right"></i>
                    </span>
                </div>
            </section>
        </div>
    );
}

export default App;
