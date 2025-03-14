import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import FavoriteButton from './FavoriteButton';

function StarshipDetails() {
    const { id } = useParams();
    const [Naves, setNaves] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNaves = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/starships/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setNaves(data.result.properties);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchNaves();
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
                <Link to="/starships">
                    <Button variant="primary">Volver a la lista de naves</Button>
                </Link>
            </Container>
        );
    }

    if (!Naves) {
        return (
            <Container className="text-center mt-5">
                <h2>Nave no encontrada</h2>
                <Link to="/starships">
                    <Button variant="primary">Volver a la lista de naves</Button>
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
                                        src={`/images/starships/${id}.jpg`}
                                        alt={Naves.name}
                                        className="img-fluid rounded-start"
                                        onError={(e) => {
                                            e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbGtgOJSJua-IwZHv5qPVhrGQMThdb9PPFMNoqJDB5mcReOpMDVgS-FsjFkfzpSrf5ZRk&usqp=CAU';
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title className="h2 mb-4">{Naves.name}</Card.Title>
                                    <div className="planet-details">
                                        <h4>Características</h4>
                                        <p><strong>Capacidad:</strong> {Naves.cargo_capacity} kg</p>
                                        <p><strong>Ancho:</strong> {Naves.length} m</p>
                                        <p><strong>Producción:</strong> {Naves.manufacturer}</p>
                                        <p><strong>Model:</strong> {Naves.model} horas</p>
                                        <p><strong>Clase:</strong> {Naves.starship_class}</p>

                                        <div className="mt-4">
                                            <Link to="/starships">
                                                <Button variant="secondary">Volver a la lista</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Col>
                            <FavoriteButton item={Naves} onFavoriteClick={handleFavoriteClick} />
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default StarshipDetails; 