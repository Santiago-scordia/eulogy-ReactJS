import { Badge, Nav } from 'react-bootstrap';
import shoppingcart from '../assets/shopping-cart.png';



function CartWidget() {
    return (
      <>
        <Nav.Link>
            <img alt="" src={shoppingcart} width="30" height="auto"/>
            <Badge pill bg="danger">7</Badge>
        </Nav.Link>
      </>
    );
  }
  
  export default CartWidget;