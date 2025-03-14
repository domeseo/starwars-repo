import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home = () => {
	return (
		<Container className="mt-5">
			<h1 className="text-center mb-5">Star Wars Universe</h1>
			<Row className="justify-content-center">
				<Col md={4} className="mb-4">
					<Card className="h-100 shadow-sm hover-card">
						<Card.Body className="d-flex flex-column">
							<Card.Title className="text-center mb-4">Películas</Card.Title>
							<Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="Character" />
							<Card.Text className="text-center">
								Explora todas las películas de la saga Star Wars
							</Card.Text>
							<div className="mt-auto text-center">
								<Link to="/movies" className="btn btn-primary">
									Ver Películas
								</Link>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col md={4} className="mb-4">
					<Card className="h-100 shadow-sm hover-card">
						<Card.Body className="d-flex flex-column">
							<Card.Title className="text-center mb-4">Personajes</Card.Title>
							<Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="Character" />
							<Card.Text className="text-center">
								Conoce todos los personajes del universo Star Wars
							</Card.Text>
							<div className="mt-auto text-center">
								<Link to="/characters" className="btn btn-primary">
									Ver Personajes
								</Link>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col md={4} className="mb-4">
					<Card className="h-100 shadow-sm hover-card">
						<Card.Body className="d-flex flex-column">
							<Card.Title className="text-center mb-4">Planetas</Card.Title>
							<Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="Character" />
							<Card.Text className="text-center">
								Descubre los planetas de la galaxia Star Wars
							</Card.Text>
							<div className="mt-auto text-center">
								<Link to="/planets" className="btn btn-primary">
									Ver Planetas
								</Link>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4} className="mb-4">
					<Card className="h-100 shadow-sm hover-card">
						<Card.Body className="d-flex flex-column">
							<Card.Title className="text-center mb-4">Naves</Card.Title>
							<Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="Character" />
							<Card.Text className="text-center">
								Descubre las naves de la galaxia Star Wars
							</Card.Text>
							<div className="mt-auto text-center">
								<Link to="/starships" className="btn btn-primary">
									Ver Naves
								</Link>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

