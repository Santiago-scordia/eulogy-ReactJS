import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GoToCart = ({}) => {
    return (
        <>
            <Link to='/cart' style={{textDecoration: "none"}}><Button >Ir al Carrito</Button></Link>
        </>
    );
}

export default GoToCart;