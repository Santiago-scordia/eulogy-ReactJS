import React from 'react'
import { Card, Col } from 'react-bootstrap';
import ItemCount from './ItemCount'
import '../index.css';

const onAdd = (qty) => {
    alert("Agregaste " + qty + " items al carrito.");
}

export default function Item ({ id,title,price,img }){
    return(
        <>
        <Col>
        <Card className="margincrt" key={id}  border="secondary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                    <Card.Text>{price}</Card.Text>
            </Card.Body>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </Card>
        </Col>
        </>
    )
}