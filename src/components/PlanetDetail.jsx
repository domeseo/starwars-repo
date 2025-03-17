import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import FavoriteButton from './FavoriteButton';

function PlanetDetail() {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlanet = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPlanet(data.result.properties);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchPlanet();
    }, [id]);

    if (loading) {
        return (
            <Container className="text-center mt-5">
                <h2>Cargando...</h2>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="text-center mt-5">
                <h2>Error: {error}</h2>
                <Link to="/planets">
                    <Button variant="primary">Volver a la lista de planetas</Button>
                </Link>
            </Container>
        );
    }

    if (!planet) {
        return (
            <Container className="text-center mt-5">
                <h2>Planeta no encontrado</h2>
                <Link to="/planets">
                    <Button variant="primary">Volver a la lista de planetas</Button>
                </Link>
            </Container>
        );
    }

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow">
                        <Row className="g-0">
                            <Col md={4}>
                                <div className="planet-image-placeholder">
                                    <img
                                        src={`/images/planets/${id}.jpg`}
                                        alt={planet.name}
                                        className="img-fluid rounded-start"
                                        onError={(e) => {
                                            e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbGtgOJSJua-IwZHv5qPVhrGQMThdb9PPFMNoqJDB5mcReOpMDVgS-FsjFkfzpSrf5ZRk&usqp=CAU';
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title className="h2 mb-4">{planet.name}</Card.Title>
                                    <div className="planet-details">
                                        <h4>Características</h4>
                                        <p><strong>Diámetro:</strong> {planet.diameter} km</p>
                                        <p><strong>Clima:</strong> {planet.climate}</p>
                                        <p><strong>Terreno:</strong> {planet.terrain}</p>
                                        <p><strong>Período de rotación:</strong> {planet.rotation_period} horas</p>
                                        <p><strong>Período orbital:</strong> {planet.orbital_period} días</p>

                                        <h4 className="mt-4">Información Adicional</h4>
                                        <p><strong>Población:</strong> {planet.population}</p>
                                        <p><strong>Gravedad:</strong> {planet.gravity}</p>

                                        <div className="mt-4">
                                            <Link to="/planets">
                                                <Button variant="secondary">Volver a la lista</Button>
                                            </Link>
                                            <FavoriteButton item={planet} />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default PlanetDetail; 