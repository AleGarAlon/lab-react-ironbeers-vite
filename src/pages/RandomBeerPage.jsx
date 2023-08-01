import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeersPage() {
    const [randomBeer, setRandomBeer] = useState({});

    const getRandomBeer = async () => {
        try {
            const response = await axios.get(
                "https://ih-beers-api2.herokuapp.com/beers/random"
            );
            setRandomBeer(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getRandomBeer();
    }, []);

    return randomBeer ? (
        <div>
            <img src={randomBeer.image_url} alt={randomBeer.name} />
            <p>{randomBeer.name}</p>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.first_brewed}</p>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>
        </div>
    ) : (
        <h1>Loading...</h1>
    );
}

export default RandomBeersPage;