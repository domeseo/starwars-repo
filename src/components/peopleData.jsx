import React, { useState } from "react";

function Characters() {
    const [people, setPeople] = useState({});  // Stato iniziale come oggetto
    const [description, setDescription] = useState("");  // Stato per la descrizione

    async function getPeopleData() {
        try {
            const response = await fetch('https://www.swapi.tech/api/people/1');
            if (!response.ok) {
                throw new Error(`Errore nella richiesta: ${response.status}`);
            }
            const data = await response.json();
            
            setPeople(data.result.properties);  // Salva solo `properties`
            setDescription(data.result.description);  // Salva `description`
        } catch (error) {
            console.error("Errore nel fetch:", error);
        }
    }

    return (
        <>
            <button onClick={getPeopleData} className="btn btn-success">Get Character</button>

            {people.name && (  // Mostra la card solo se `people` ha dati
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src="https://via.placeholder.com/150" alt="Character" />
                    <div className="card-body">
                        <h5 className="card-title">{people.name}</h5>
                        <p className="card-text"><strong>Gender:</strong> {people.gender}</p>
                        <p className="card-text"><strong>Height:</strong> {people.height} cm</p>
                        <p className="card-text"><strong>Birth Year:</strong> {people.birth_year}</p>
                        <p className="card-text">{description}</p>
                        <a href={people.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            More Info
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}

export default Characters;
