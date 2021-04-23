import './Header.css'
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import Image from '../../img/icon/shopping-bag.png';


const Header = (props) => {

    const cart = props.cart;
  

    return (
        <div>
        <Navbar className="fixed-top mb-5" bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="#home"> <h3 className="brand-name"> Online Class </h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="#">
                <img src= {Image} width = {24} height ={24} alt="cart-icon"/> 
                <span className="count">
                {cart.length}
                </span>
            </Nav.Link>
            <Nav.Link href="#signIn">
                <Button variant="outline-primary"> Sign in </Button> 
                </Nav.Link>
            <Nav.Link href="#signUp">
            <Button> Sign up </Button>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        
        </div>
    );
};

export default Header;