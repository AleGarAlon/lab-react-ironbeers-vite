import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
    const { beerId } = useParams();
    console.log(beerId);
    const [beer, setBeer] = useState({});

    const oneBeer = async () => {
        try {
            const response = await axios.get(
                `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
            );
            setBeer(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        oneBeer();
    }, []);

    return beer ? (
        <div>
            <img src={beer.image_url} alt={beer.name} />
            <p>{beer.name}</p>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    ) : (
        <h1>Loading...</h1>
    );
}

export default BeerDetailsPage;