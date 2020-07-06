import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/ui/Header";
import SliderWrapper from "./components/sliders/SliderWrapper";

function App() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://api.tvmaze.com/shows`);
            const topTenshows = result.data
                .filter((show) => show.rating.average)
                .sort((a, b) => (a.rating.average > b.rating.average ? -1 : 1))
                .slice(0, 9);

            console.log(topTenshows);

            setItems(topTenshows);
            setIsLoading(false);
        };

        fetchItems();
    }, []);

    return (
        <div className="container">
            <Header />
            <SliderWrapper isLoading={isLoading} items={items} />
        </div>
    );
}

export default App;
