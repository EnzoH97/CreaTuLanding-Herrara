import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import Logo from '../../assets/logo.svg'
import CartWidget from '../CartWidget/CartWidget'

function BasicExample() {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home">
            <img src={Logo}  className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        <CartWidget label={'1'}/>
        </Container>
    </Navbar>
    );
}

export default BasicExample;