import { ButtonGroup, Button, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import '../index.css';


const ItemCount = ({ stock, initial,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[initial]);

    const add = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
      <Container className="buttonw">
          <ButtonGroup aria-label="Basic example" >
            <Button variant="secondary" onClick={decrement}>-</Button>
            <Button variant="secondary">{count}</Button>
            <Button variant="secondary" className="buttong"  onClick={add}>+</Button>
          </ButtonGroup>
          {
              stock
              ? <Button variant="primary" color="primary" onClick={() => onAdd(count)}>Add to Cart</Button>
              : <Button variant="primary" disabled>Out of stock</Button>
          }
      </Container>
  );
}
export default ItemCount;