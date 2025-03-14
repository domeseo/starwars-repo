import React, { useState, useEffect } from "react";

const baseUrl = "https://www.swapi.tech/api/films/";

function Films() {
    const [movie, setMovie] = useState([]);
    const ids = Array.from({ length: 10 }, (_, i) => i + 1); // Crea IDs del 1 al 10

    useEffect(() => {
        async function fetchFilms() {
            try {
                const responses = await Promise.all(
                    ids.map(id => fetch(`${baseUrl}${id}`).then(response => response.json()))
                );
                const film = responses
                    .filter(data => data.result) // Filtra las respuestas que tienen 'result'
                    .map(data => data.result.properties);
                setMovie(film); // Guarda los datos en el estado
            } catch (error) {
                console.error("Error en el fetch:", error);
            }
        }

        fetchFilms();
    }, []); // Se ejecuta solo una vez

    return (
        <>
            <h1>Star Wars Movies</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {movie.map((movie, index) => (
                    <div key={index} className="card" style={{ width: "18rem", margin: "10px" }}>
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="Character" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text"><strong>Director:</strong> {movie.director}</p>
                            <p className="card-text"><strong>Year:</strong> {movie.release_date} cm</p>
                            <p className="card-text"><strong>Episode:</strong> {movie.episode_id}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Films;
