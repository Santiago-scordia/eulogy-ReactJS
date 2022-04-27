import { useContext } from 'react';
import '../index.css';
import { CartContext } from './CartContext';
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Cart = () => {
    const test = useContext(CartContext);

    const subtotal = (item) => {
        return item.price * item.qtyItem;
    }

    const taxes = (item) => {
        return test.totalCart(item) * 0.05;
    }

    return (
        <div className='WrapperCart'>
            <div className='TitleCart'>TU CARRITO</div>
            <div className="btnsection">
            <Link to='/'>
            <Button className='btnCart2' variant="secondary" >CONTINUAR COMPRANDO</Button></Link>
            {
                (test.cartList.length > 0)
                ? <Button className='btnCart' onClick={test.clear}>ELIMINAR TODOS</Button>
                : <h4> Tu carrito esta vacio </h4>
            }
            </div>
                {
                test.cartList.length > 0 && (
                    <div className='ContentCart'>
                        {
                            test.cartList.map( item => 
                                <div className='Product'>
                                    <div className='ProductDetail'>
                                        <img  className='ImageCart' src={item.img} alt="hola"/>
                                        <div className='Details'>
                                            <span>
                                                <b>Producto:</b> {item.title}
                                            </span>
                                            <Button type="filled" onClick={() => test.deleteItem(item.id)}>ELIMINAR</Button>
                                        </div>
                                    </div>
                                    <div className='PriceDetail'>
                                        <div className='ProductAmountContainer'>
                                        <p className='ProductAmount'>Cantidad: {item.qtyItem}</p>
                                        <p className='ProductAmount'>Precio: $ {item.price}</p>
                                        </div>
                                        <p className='ProductPrice'>Subtotal: $ {subtotal(item)}</p>
                                    </div>
                                    <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>RESUMEN DEL PEDIDO</Card.Title>
                                    <Card.Text>TAXES $ {taxes(item)}</Card.Text>
                                    <Card.Text>DESCUENTOS $ -{taxes(item)}</Card.Text>
                                    <Card.Title>TOTAL
                                     $ {test.totalCart(item)}
                                    </Card.Title>
                                    <Button >FINALIZAR COMPRA</Button>
                                </Card.Body>
                                </Card>
                                </div>
                            
                            )
                        }
                    </div>
                )
                }
        </div>
        
    
);
}


export default Cart;
