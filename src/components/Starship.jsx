import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FavoriteButton from "./FavoriteButton";
function Starship() {
    const [starship, setStarship] = useState([]);
    const [eachStarship, setEachStarship] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const response = await fetch('https://www.swapi.tech/api/starships/');
        const data = await response.json();
        setStarship(data.results);
        const responses = await Promise.all(
            data.results.map(async starship => {
                const eachStarship = await fetch(starship.url);
                const dataStarship = await eachStarship.json();
                return dataStarship.result.properties;
            })
        );
        setEachStarship(responses);
    }

    return (
        <Container className="mt-4">
            <h1 className="text-center mb-4">Naves Espaciales de Star Wars</h1>
            <Row>
                {eachStarship.map((starship, indice) => (
                    <Col key={indice} xs={12} md={6} lg={4} className="mb-3">
                        <Card className="h-100 shadow-sm">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="text-center">{starship.name}</Card.Title>
                                <Card.Img variant="top" src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/04/cazas-tie-star-wars-2299707.jpg?tf=3840x" alt="Starship" />

                                <div className="mt-auto text-center">
                                    <Link to={`/starships/${indice + 1}`}>
                                        <Button variant="primary mt-1 mb-1">Ver Ficha Completa</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                            <FavoriteButton item={starship} />
                        </Card>

                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Starship; 