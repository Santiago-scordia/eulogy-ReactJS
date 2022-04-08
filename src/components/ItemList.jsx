import React from 'react'
import Item from './Item'
import { Container, Row } from 'react-bootstrap';


export default function ItemList({productos}) {
    return (
        <>
        <Container fluid="md">
            <Row>
                
                    {productos.map((product) => (
                        <Item key={product.id} {...product} />
                        ))
                    }

            </Row>
        </Container>
        </>
    )
}
