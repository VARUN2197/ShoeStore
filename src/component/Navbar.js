import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';

class Navbar extends React.Component {
	render() {
		return (
			<div>
				<ul className="nav">
					<li className="nav-item slam-left"><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>The ShoeStore</Link></li>
					<li className="nav-item"><Link className="link" to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
					<li className="nav-item"><Link className="link" to="/Cart" style={{ textDecoration: 'none', color: 'white' }}>My Cart</Link></li>
				</ul>	
			</div>
			
		);
	}
}

export default Navbar;
