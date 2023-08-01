import { useState } from "react";

function AddBeerPage() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [descreption, setDescreption] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewerTip, setBrewerTip] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState("");

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
                </label>
                <label>
                    {" "}
                    Tagline
                    <input
                        name="tagline"
                        type="text"
                        value={tagline}
                        onChange={(event) => setTagline(event.target.value)}
                    />
                </label>
                <label>
                    {" "}
                    Description
                    <textarea
                        name="description"
                        type="text"
                        value={descreption}
                        onChange={(event) => setDescreption(event.target.value)}
                    ></textarea>
                </label>
                <label>
                    {" "}
                    First Brewed
                    <input
                        name="first_brewed"
                        type="text"
                        value={firstBrewed}
                        onChange={(event) => setFirstBrewed(event.target.value)}
                    />
                </label>
                <label>
                    {" "}
                    Brewer's Tips
                    <input
                        name="brewers_tips"
                        type="text"
                        value={brewerTip}
                        onChange={(event) => setBrewerTip(event.target.value)}
                    />
                </label>
                <label>
                    {" "}
                    Attenuation Level
                    <input
                        name="attenuation_level"
                        type="number"
                        value={attenuationLevel}
                        onChange={(event) =>
                            setAttenuationLevel(event.target.value)
                        }
                    />
                </label>
                <label>
                    {" "}
                    Contributed By
                    <input
                        name="contributed_by"
                        type="text"
                        value={contributedBy}
                        onChange={(event) =>
                            setContributedBy(event.target.value)
                        }
                    />
                </label>
                <button type="submit"> Add Beer</button>
            </form>
        </div>
    );
}

export default AddBeerPage;