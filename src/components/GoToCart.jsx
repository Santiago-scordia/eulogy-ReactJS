import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GoToCart = ({}) => {
    return (
        <>
            <Link to='/cart' style={{textDecoration: "none"}}><Button >CheckOut</Button></Link>
        </>
    );
}

export default GoToCart;