import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import '../index.css';
import '../App.css';
import GoToCart from "./GoToCart";
import { CartContext } from "./CartContext";


const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        alert("Agregaste " + qty + " items al carrito.");
        setItemCount(qty);
        test.addItem(item,qty);
    }

    console.log()

    return (
        <>  {
            item && item.img
            ?
        
            <div className="card mb-3 margincrt container-xxxl" >
                <div className="row g-0">
                <div className="col-md-4">
                <img src={item.img}  className="img-fluid rounded-start" alt="cuadro" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                     <h2 className="card-title text-center">{item.title}</h2>
                            <p className="card-text text-center">{item.description}</p>
                             <h4 className="card-text text-center">${item.price}</h4>
                             <p className="marginbtn">{
                                itemCount === 0
                                ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                                : <GoToCart/>
                            }</p>
                    </div>  
                 </div>
                </div>
            </div>
            :<div className="App">  
                <br /><br /><br /><br />
                <Spinner  size="bg" animation="border" role="status">
                <span className="visually-hidden ">Loading...</span>
                </Spinner>
            </div> 
            }
        </>
    );
}

export default ItemDetail;