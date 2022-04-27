import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Col, Button } from 'react-bootstrap';
import '../index.css';


export default function Item ({ id,title,price,img}){
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
        </Card>
        </Col>
        </>
    )
}