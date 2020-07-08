import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/ui/Header";
import SliderWrapper from "./components/sliders/SliderWrapper";
import Slider from "./components/sliders/Slider";
import Title from "./components/ui/Title";

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

            <SliderWrapper>
                <Title title={"Top Show"} />
                <Slider isLoading={isLoading} items={items} />
            </SliderWrapper>

            <SliderWrapper>
                <Title title={"Comedy"} />
                <Slider isLoading={isLoading} items={genres} />
            </SliderWrapper>

            <SliderWrapper>
                <Title title={"Already Ended"} />
                <Slider isLoading={isLoading} items={premiered} />
            </SliderWrapper>
        </div>
    );
}

export default App;
