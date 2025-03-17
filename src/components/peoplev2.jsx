import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
function PeopleV2() {
    const [personas, setPersonas] = useState([]);
    const [eachPerson, setEachPerson] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const response = await fetch('https://www.swapi.tech/api/people/');
        const data = await response.json();
        setPersonas(data.results);
        const responses = await Promise.all(
            data.results.map(async people => {
                const eachPeople = await fetch(people.url);
                const dataPeople = await eachPeople.json();
                return dataPeople.result.properties;
            })
        );
        setEachPerson(responses);
    }

    return (
        <Container className="mt-4">
            <h1 className="text-center mb-4">Personajes de Star Wars</h1>
            <Row>
                {eachPerson.map((personaje, indice) => (
                    <Col key={indice} xs={12} md={6} lg={4} className="mb-3">
                        <Card className="h-100 shadow-sm">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="text-center">{personaje.name}</Card.Title>
                                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="Character" />
                                <Card.Text>
                                    <strong>Altura:</strong> {personaje.height} cm<br />
                                    <strong>Peso:</strong> {personaje.mass} kg<br />
                                </Card.Text>
                                <div className="mt-auto text-center">
                                    <Link to={`/character/${indice + 1}`}>
                                        <Button variant="primary">Ver Ficha Completa</Button>
                                    </Link>
                                    <FavoriteButton item={personaje} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default PeopleV2; 