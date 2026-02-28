import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import Logo from '../../assets/logo.svg'
import CartWidget from '../CartWidget/CartWidget'


function NavBar({ categories }) {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home">
            <img src={Logo}  className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <div className="dropdown-categorias">
                    {categories.map(cat => <NavDropdown.Item key={cat}>{cat}</NavDropdown.Item>)}
                </div>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        <CartWidget label={'0'}/>
        </Container>
    </Navbar>
    );
}

export default NavBar;

