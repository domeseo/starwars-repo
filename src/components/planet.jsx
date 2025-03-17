import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

function Planets() {
    const [planet, setPlanet] = useState([]);
    const [eachPlanet, setEachPlanet] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const response = await fetch('https://www.swapi.tech/api/planets/');
        const data = await response.json();
        setPlanet(data.results);
        const responses = await Promise.all(
            data.results.map(async planet => {
                const eachPlanet = await fetch(planet.url);
                const dataPlanet = await eachPlanet.json();
                return dataPlanet.result.properties;
            })
        );
        setEachPlanet(responses);
    }

    return (
        <Container className="mt-4">
            <h1 className="text-center mb-4">Planetas de Star Wars</h1>
            <Row>
                {eachPlanet.map((planeta, indice) => (
                    <Col key={indice} xs={12} md={6} lg={4} className="mb-3">
                        <Card className="h-100 shadow-sm">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="text-center">{planeta.name}</Card.Title>
                                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="Character" />
                                <Card.Text>
                                    <strong>Diametro:</strong> {planeta.diameter} cm<br />
                                    <strong>Población:</strong> {planeta.population}<br />
                                </Card.Text>
                                <div className="mt-auto text-center">
                                    <Link to={`/planets/${indice + 1}`}>
                                        <Button variant="primary">Ver Ficha Completa</Button>
                                    </Link>
                                    <FavoriteButton item={planeta} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Planets; 