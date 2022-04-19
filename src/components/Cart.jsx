import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = ({}) => {
    return (
        <>
            <Link to='/cart' style={{textDecoration: "none"}}><Button >CheckOut</Button></Link>
        </>
    );
}

export default Cart;