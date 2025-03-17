import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CharacterDetail() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
                const data = await response.json();
                setCharacter(data.result.properties);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
                setLoading(false);
            }
        };

        fetchCharacter();
    }, [id]);

    if (loading) {
        return <div className="text-center mt-5">Cargando...</div>;
    }

    if (!character) {
        return <div className="text-center mt-5">Personaje no encontrado</div>;
    }

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow">
                        <Row className="g-0">
                            <Col md={4}>
                                <div className="character-image-placeholder">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbGtgOJSJua-IwZHv5qPVhrGQMThdb9PPFMNoqJDB5mcReOpMDVgS-FsjFkfzpSrf5ZRk&usqp=CAU"
                                        alt={character.name}
                                        className="img-fluid rounded-start"
                                        onError={(e) => {
                                            e.target.src = '/images/placeholder.jpg';
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title className="h2 mb-4">{character.name}</Card.Title>
                                    <div className="character-details">
                                        <h4>Características Físicas</h4>
                                        <p><strong>Altura:</strong> {character.height} cm</p>
                                        <p><strong>Peso:</strong> {character.mass} kg</p>
                                        <p><strong>Color de pelo:</strong> {character.hair_color}</p>
                                        <p><strong>Color de piel:</strong> {character.skin_color}</p>
                                        <p><strong>Color de ojos:</strong> {character.eye_color}</p>

                                        <h4 className="mt-4">Información Personal</h4>
                                        <p><strong>Año de nacimiento:</strong> {character.birth_year}</p>
                                        <p><strong>Género:</strong> {character.gender}</p>

                                        <div className="mt-4">
                                            <Link to="/">
                                                <Button variant="secondary">Volver a la lista</Button>
                                            </Link>
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

export default CharacterDetail; 