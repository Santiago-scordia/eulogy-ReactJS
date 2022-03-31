import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';
import logo from '../assets/logo.png';





function NavBar() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                     <img
                     alt=""
                     src={logo}
                     width="60"
                     height="auto"
                     className="d-inline-block"
                     />{' '}
                     Ǝ U ᒧ O ⅁ Y
                </Navbar.Brand>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                    <Nav.Link href="/home">Categoria 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/home">Categoria 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/home">Categoria 3</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/home">Categoria 4</Nav.Link>
                    </Nav.Item>
                 </Nav>
              <CartWidget />
            </Container>
         </Navbar>
      </>
    );
  }
  
  export default NavBar;