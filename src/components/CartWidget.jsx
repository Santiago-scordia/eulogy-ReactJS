import { Badge, Nav } from 'react-bootstrap';
import shoppingcart from '../assets/shopping-cart.png';
import { Link } from 'react-router-dom';


function CartWidget() {

    return (
      <>
        <Nav.Link>
        <Link to='/cart' style={{textDecoration: "none"}}>
            <img alt="" src={shoppingcart} width="30" height="auto"/>
            <Badge pill bg="danger">7</Badge>
        </Link>
        </Nav.Link>
      </>
    );
  }
  
  export default CartWidget;