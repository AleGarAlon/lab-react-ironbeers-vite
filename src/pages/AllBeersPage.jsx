import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
    const [beers, setBeers] = useState([]);

    const getAllBeers = async () => {
        try {
            const response = await axios.get(
                "https://ih-beers-api2.herokuapp.com/beers"
            );
            console.log("data", response.data);
            setBeers(response.data);
        } catch (error) {
            console.error("error", error);
        }
    };

    useEffect(() => {
        getAllBeers();
    }, []);

    return (
        <div>
            {beers.map((beer) => {
                return (
                    <Link key={beer._id} to={`/beers/${beer._id}`}>
                        <div >
                            <img src={beer.image_url} alt={beer.name} />
                            <h1> {beer.name}</h1>
                            <p>{beer.tagline}</p>
                            <p>{beer.contributed_by}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default AllBeersPage;