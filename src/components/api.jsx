import React, { useState, useEffect } from "react";

export function GetDataStarWarsApi() {
    const urlPeople = 'https://www.swapi.tech/api/people/';
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchDataPeople = async () => {
            try {
                const response = await fetch(urlPeople);
                if (!response.ok) {
                    throw new Error(`response status: ${response.status}`);
                }
                const data = await response.json();
                setPeople(data.results);
            } catch (err) {
                setError(err.message);
                console.error('Error fetching data', err);
            }
        };

        fetchDataPeople();
    }, []);

    return (
        <>
            <ul>
                {people.map((person) => (
                    <li key={person.uid}>{person.name}</li>
                ))}
            </ul>
        </>
    );
}

function CardComponent() {

    return (
        <div classNameName="card" style={{ width: "18rem;" }}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    )
}

export default GetDataStarWarsApi;