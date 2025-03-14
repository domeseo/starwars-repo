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
			</Row>

			<style>
				{`
					.hover-card {
						transition: transform 0.3s ease;
					}
					.hover-card:hover {
						transform: translateY(-10px);
					}
					.card {
						background-color: rgba(255, 255, 255, 0.9);
						border: none;
						border-radius: 15px;
					}
					.btn-primary {
						background-color: #007bff;
						border: none;
						padding: 10px 20px;
						border-radius: 5px;
					}
					.btn-primary:hover {
						background-color: #0056b3;
					}
				`}
			</style>
		</Container>
	);
};

