import './Nav.css';
import { Link, NavLink } from 'react-router-dom';
// import useAuth from '../../auth/useAuth';

//menu lateral con NavLink de reat router dom v6
let activeStyle = {
    textDecoration: "underline",
	color: "lightblue"
  };



const NavBar = () => {
	// const auth = useAuth();

	return (
		<nav className="Navigation">
			<NavLink to="/" style={({isActive }) => isActive ? activeStyle : undefined } className="nav-link">
				Home
			</NavLink>
			<NavLink to="/coins" className="nav-link" >
				Coins
			</NavLink>
			<NavLink to="/about" className="nav-link" >
				About
			</NavLink>
			<NavLink to="/contact" style={({isActive }) => isActive ? activeStyle : undefined } className="nav-link">
				Contacto 
			</NavLink>
			<NavLink to="/ruta-que-no-existe" style={({isActive }) => isActive ? activeStyle : undefined } className="nav-link">
				Desconocido 
			</NavLink>
			<NavLink to='/under_construction' className="nav-link" >Under Construction</NavLink>
			
		</nav>
	);

	
};

export default NavBar;