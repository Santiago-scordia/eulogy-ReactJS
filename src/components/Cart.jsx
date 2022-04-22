import { useContext } from 'react';
import '../index.css';
import { CartContext } from './CartContext';
import { Button } from 'react-bootstrap';


const Cart = () => {
    const test = useContext(CartContext);

    return (
        <div className='WrapperCart'>
        <div className='TitleCart'>YOUR CART</div>
        <Button className='btnCart' onClick={test.clear}>ELIMINAR TODOS</Button>
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
                                        <b>Product:</b> {item.title}
                                    </span>
                                    <Button type="filled" onClick={() => test.deleteItem(item.id)}>ELIMINAR</Button>
                                </div>
                            </div>
                            <div className='PriceDetail'>
                                <div className='ProductAmountContainer'>
                                <p className='ProductAmount'>2 items</p>
                                </div>
                                <p className='ProductPrice'>$ {item.price}</p>
                            </div>
                            
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
