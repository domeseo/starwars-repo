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

export default GetDataStarWarsApi;