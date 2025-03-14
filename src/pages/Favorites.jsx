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
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqoX3uV4sC_AE_h2H3OzwtgaUCEmG_5770Q&s" alt={favorite.title} />
                            <Card.Body>
                                <Card.Title>{favorite.title}</Card.Title>
                                <p><strong>Director:</strong> {favorite.director}</p>
                                <p><strong>Release Date:</strong> {favorite.release_date}</p>
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

