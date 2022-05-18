import { useContext } from 'react';
import '../index.css';
import { CartContext } from './CartContext';
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from 'firebase/firestore';
import db from '../utils/firebaseConfig';


const Cart = () => {
    const test = useContext(CartContext);

    const subtotal = (item) => {
        return item.price * item.qtyItem;
    }

    const taxes = (item) => {
        return test.totalCart(item) * 0.05;
    }

    const checkout = () => {
        const itemsForDB = test.cartList.map(item => ({
          id: item.id,
          title: item.title,
          price: item.price,
          qty: item.qtyItem
        }));
    
        test.cartList.forEach(async (item) => {
          const itemRef = doc(db, "products", item.id);
          await updateDoc(itemRef, {
            stock: increment(-item.qtyItem)
          });
        });
    
        let order = {
          buyer: {
            name: "Pepe Argento",
            email: "Pepe@gmail.com",
            phone: "1137081848"
          },
          total: test.totalCart(),
          items: itemsForDB,
          date: serverTimestamp()
        };

        console.log(order);
    
        const createOrderInFirestore = async () => {
          // Add a new document with a generated id
          const newOrderRef = doc(collection(db, "orders"));
          await setDoc(newOrderRef, order);
          return newOrderRef;
        }
    
        createOrderInFirestore()
          .then(result => alert('Tu orden ha sido creada con exito! Por favor toma nota del numero de orden.\nNumero de ORDEN: ' + result.id + '\n\n'))
          .catch(err => console.log(err));
    
        test.clear();
    
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
                <>
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
                                                            
                                </div>
                            
                            )
                            
                        }
                        </div>
                            <Card style={{ width: '28rem' }}>
                                <Card.Body>
                                    <Card.Title>RESUMEN DEL PEDIDO</Card.Title>
                                        <Card.Text>TAXES $ {taxes()}</Card.Text>
                                        <Card.Text>DESCUENTOS $ -{taxes()}</Card.Text>
                                            <Card.Title>TOTAL
                                                $ {test.totalCart()}
                                            </Card.Title>
                                                <Button onClick={checkout}>FINALIZAR COMPRA</Button>
                                </Card.Body>
                            </Card> 
                        </>
                )
                }
        </div>
        
    
);
}


export default Cart;
