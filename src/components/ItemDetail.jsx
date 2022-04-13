import ItemCount from './ItemCount';
import { Spinner } from 'react-bootstrap';
import '../index.css';
import '../App.css';


const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
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
                             <p className="marginbtn"><ItemCount  stock={item.stock}  initial={1} onAdd={onAdd} /></p>
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