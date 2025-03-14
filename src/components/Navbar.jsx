import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">StarWars DB</span>
				</Link>
				<div className="ml-auto">
					<Link to="/movies">
						<button className="btn btn-primary mx-1">Movies</button>
					</Link>
					<Link to="/characters">
						<button className="btn btn-primary mx-1">Characters</button>
					</Link>
					<Link to="/planets">
						<button className="btn btn-primary mx-1">Planets</button></Link>

				</div>
			</div>
		</nav>
	);
};