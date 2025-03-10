import React, { useState, useEffect } from "react";

const baseUrl = "https://www.swapi.tech/api/people/";

function Characters() {
    const [people, setPeople] = useState([]);
    const ids = Array.from({ length: 10 }, (_, i) => i + 1); // Crea IDs del 1 al 10

    useEffect(() => {
        async function fetchCharacters() {
            try {
                const responses = await Promise.all(
                    ids.map(id => fetch(`${baseUrl}${id}`).then(response => response.json()))
                );
                const characters = responses.map(data => data.result.properties);
                setPeople(characters); // Guarda los datos en el estado
            } catch (error) {
                console.error("Error en el fetch:", error);
            }
        }

        fetchCharacters();
    }, []); // Se ejecuta solo una vez

    return (
        <>
            <h1>Star Wars Characters</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {people.map((person, index) => (
                    <div key={index} className="card" style={{ width: "18rem", margin: "10px" }}>
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="Character" />
                        <div className="card-body">
                            <h5 className="card-title">{person.name}</h5>
                            <p className="card-text"><strong>Gender:</strong> {person.gender}</p>
                            <p className="card-text"><strong>Height:</strong> {person.height} cm</p>
                            <p className="card-text"><strong>Birth Year:</strong> {person.birth_year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Characters;
