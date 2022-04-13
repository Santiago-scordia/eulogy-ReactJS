import React from 'react'
import Item from './Item'
import { Container, Row, Spinner } from 'react-bootstrap';
import '../App.css';


export default function ItemList({productos}) {

    return (
        <>
        <Container fluid="md">
            <Row>
                
                 {   
                    productos.length > 0
                    ? productos.map(item => <Item key={item.id} id={item.id} title={item.title} price={item.price} img={item.img} stock={item.stock}/>)
                    : <div className="App">  
                        <br /><br /><br /><br />
                        <Spinner  size="bg" animation="border" role="status">
                        <span className="visually-hidden ">Loading...</span>
                        </Spinner>
                    </div> 
                }

            </Row>
        </Container>
        </>
    )
}
