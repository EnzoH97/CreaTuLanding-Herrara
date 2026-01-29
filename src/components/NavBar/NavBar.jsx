
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import Logo from '../../assets/logo.svg?react'


function ColorSchemesExample() {
    return (
    <>
        <Navbar>
            <Container className='conteiner'>
                <Navbar.Brand>
                    <Logo  className='logo'/>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#promos">Promos</Nav.Link>
                    <Nav.Link href="#bebidas">Bebidas</Nav.Link>
                    <Nav.Link href="#panaderia">Panaderia</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
    );
}

export default ColorSchemesExample;