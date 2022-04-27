import { Badge, Nav } from 'react-bootstrap';
import shoppingcart from '../assets/shopping-cart.png';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { useContext } from 'react';


function CartWidget() {

  const test = useContext(CartContext);
  

    return (
      <>
      
        <Nav.Link>
        <Link to='/cart' style={{textDecoration: "none"}}>
            <img alt="" src={shoppingcart} width="30" height="auto"/>
            {
              test.itemsInCart() === 0
                ? <Link to='/cart' style={{display: "none"}}></Link>
                : <Badge pill bg="danger">{test.itemsInCart()}</Badge>
                }
        </Link>
        </Nav.Link>
        
      </>
    );
  }
  
  export default CartWidget;