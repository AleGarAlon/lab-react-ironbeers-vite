import { useState } from "react";
import axios from "axios";

function AddBeerPage() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirst_brewed] = useState("");
    const [brewer_tip, setBrewer_tip] = useState("");
    const [attenuation_level, setAttenuation_level] = useState(0);
    const [contributed_by, setContributed_by] = useState("");

    async function handleSubmit (event) {
        event.preventDefault();
        const newBeer = {
            name,
            tagline,
            description,
            first_brewed,
            brewer_tip,
            attenuation_level,
            contributed_by
        };
        await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
        setName("")
        setTagline("")
        setDescription("")
        setFirst_brewed("")
        setBrewer_tip("")
        setAttenuation_level(0)
        setContributed_by("")
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    {" "}
                    Name
                    <input
                        name="name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label> <br />
                <label>
                    {" "}
                    Tagline
                    <input
                        name="tagline"
                        type="text"
                        value={tagline}
                        onChange={(event) => setTagline(event.target.value)}
                    />
                </label><br />
                <label>
                    {" "}
                    Description
                    <textarea
                        name="description"
                        type="text"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    ></textarea>
                </label><br />
                <label>
                    {" "}
                    First Brewed
                    <input
                        name="first_brewed"
                        type="text"
                        value={first_brewed}
                        onChange={(event) => setFirst_brewed(event.target.value)}
                    />
                </label><br />
                <label>
                    {" "}
                    Brewer's Tips
                    <input
                        name="brewers_tips"
                        type="text"
                        value={brewer_tip}
                        onChange={(event) => setBrewer_tip(event.target.value)}
                    />
                </label><br />
                <label>
                    {" "}
                    Attenuation Level
                    <input
                        name="attenuation_level"
                        type="number"
                        value={attenuation_level}
                        onChange={(event) =>
                            setAttenuation_level(event.target.value)
                        }
                    />
                </label><br />
                <label>
                    {" "}
                    Contributed By
                    <input
                        name="contributed_by"
                        type="text"
                        value={contributed_by}
                        onChange={(event) =>
                            setContributed_by(event.target.value)
                        }
                    />
                </label><br />
                <button type="submit"> Add Beer</button>
            </form>
        </div>
    );
}

export default AddBeerPage;