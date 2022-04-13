import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Col, Button } from 'react-bootstrap';
import ItemCount from './ItemCount'
import '../index.css';

const onAdd = (qty) => {
    alert("Agregaste " + qty + " items al carrito.");
}

export default function Item ({ id,title,price,img,stock}){
    return(
        <>
        <Col>
        <Card className="margincrt" key={id}  border="secondary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                    <Card.Text>${price}</Card.Text>
            </Card.Body>
            <Link to={`/item/${id}`}><Button variant="dark" className="buttonw marginleft">Ver Mas</Button></Link>
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        </Card>
        </Col>
        </>
    )
}