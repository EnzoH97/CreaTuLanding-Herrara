import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBarStyles.css'
import Logo from '../../assets/logo.svg'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router';

function NavBar({ categories }) {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand as={Link} to="/">
            <img src={Logo}  className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <div className="dropdown-categorias">
                    {categories.map(cat => (
                        <NavDropdown.Item 
                        as={NavLink} 
                        to={`/category/${cat}`} 
                        key={cat}
                        className= {({ isActive }) => isActive ? "active" : " "}>
                            {cat}
                            </NavDropdown.Item>))}
                </div>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        <CartWidget />
        </Container>
    </Navbar>
    );
}

export default NavBar;

