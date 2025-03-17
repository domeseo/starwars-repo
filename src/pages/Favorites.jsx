import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import FavoriteButton from '../components/FavoriteButton';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    const handleFavoriteClick = (favorite) => {
        const updatedFavorites = favorites.includes(favorite)
            ? favorites.filter(f => f !== favorite)
            : [...favorites, favorite];

        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            const parsedFavorites = JSON.parse(storedFavorites);
            console.log(parsedFavorites); // Verifica los datos en la consola
            setFavorites(parsedFavorites);
        }
    }, []);

    return (
        <Container>
            <h1>Favoritos</h1>
            <Row>
                {favorites.map((favorite, index) => (
                    <Col key={index} xs={12} md={6} lg={4} className="mb-3">
                        <Card>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqoX3uV4sC_AE_h2H3OzwtgaUCEmG_5770Q&s" alt={favorite.title || favorite.name} />
                            <Card.Body>
                                <Card.Title>{favorite.title || favorite.name}</Card.Title>
                                {favorite.director && (
                                    <p><strong>Director:</strong> {favorite.director}</p>
                                )}
                                {favorite.model && (
                                    <p><strong>Modelo:</strong> {favorite.model}</p>
                                )}
                                {favorite.release_date && (
                                    <p><strong>Fecha de lanzamiento:</strong> {favorite.release_date}</p>
                                )}
                                {favorite.manufacturer && (
                                    <p><strong>Fabricante:</strong> {favorite.manufacturer || favorite.film}</p>
                                )}
                                {favorite.population && (
                                    <p><strong>Población:</strong> {favorite.population} habitantes</p>
                                )}
                                {favorite.height && (
                                    <p><strong>Altura:</strong> {favorite.height}cm</p>
                                )}
                                {favorite.mass && (
                                    <p><strong>Peso:</strong> {favorite.mass}kg</p>
                                )}
                                {favorite.diameter && (
                                    <p><strong>Diámetro:</strong> {favorite.diameter}km</p>
                                )}
                                {favorite.gravity && (
                                    <p><strong>Gravedad:</strong> {favorite.gravity}</p>
                                )}
                                {favorite.rotation_period && (
                                    <p><strong>Período de rotación:</strong> {favorite.rotation_period} horas</p>
                                )}
                                {favorite.orbital_period && (
                                    <p><strong>Período orbital:</strong> {favorite.orbital_period} días</p>
                                )}
                                {favorite.climate && (
                                    <p><strong>Clima:</strong> {favorite.climate}</p>
                                )}
                                {favorite.residents && (
                                    <p><strong>Residentes:</strong> {favorite.residents.length}</p>
                                )}
                                {favorite.films && (
                                    <p><strong>Películas:</strong> {favorite.films.length}</p>
                                )}
                                {favorite.starships && (
                                    <p><strong>Naves espaciales:</strong> {favorite.starships.length}</p>
                                )}
                                {favorite.vehicles && (
                                    <p><strong>Vehículos:</strong> {favorite.vehicles.length}</p>
                                )}
                                {favorite.species && (
                                    <p><strong>Especies:</strong> {favorite.species.length}</p>
                                )}
                                {favorite.gender && (
                                    <p><strong>Género:</strong> {favorite.gender}</p>
                                )}
                                {favorite.hair_color && (
                                    <p><strong>Color de pelo:</strong> {favorite.hair_color}</p>
                                )}
                                {favorite.skin_color && (
                                    <p><strong>Color de piel:</strong> {favorite.skin_color}</p>
                                )}
                                {favorite.starship_class && (
                                    <p><strong>Clase de nave espacial:</strong> {favorite.starship_class}</p>
                                )}
                                {favorite.cargo_capacity && (
                                    <p><strong>Capacidad de carga:</strong> {favorite.cargo_capacity}kg</p>
                                )}


                                <Button variant="danger" onClick={() => handleFavoriteClick(favorite)}>
                                    Remover de Favoritos
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Container>
    );
};


export default Favorites;

