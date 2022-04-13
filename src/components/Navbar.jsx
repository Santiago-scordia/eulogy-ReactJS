import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";


function NavBar() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                <Link to='/' style={{textDecoration: "none", color: "white"}} >
                     <img
                     alt=""
                     src={logo}
                     width="60"
                     height="auto"
                     className="d-inline-block"
                     />{' '}
                     Ǝ U ᒧ O ⅁ Y
                     </Link>
                </Navbar.Brand>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                    <Nav.Link href="/home"><Link to='/category/1' style={{textDecoration: "none", color: "white"}}>Psicodelicos</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/home"><Link to='/category/2' style={{textDecoration: "none", color: "white"}}>Geometricos</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/home"><Link to='/category/3' style={{textDecoration: "none", color: "white"}}>Estructurales</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/home"><Link to='/category/4' style={{textDecoration: "none", color: "white"}}>Formas</Link></Nav.Link>
                    </Nav.Item>
                 </Nav>
              <CartWidget />
            </Container>
         </Navbar>
      </>
    );
  }
  
  export default NavBar;