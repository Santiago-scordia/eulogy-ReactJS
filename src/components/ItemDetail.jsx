import ItemCount from './ItemCount';
import { Container } from 'react-bootstrap';

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    console.log()

    return (
        <>  
        <Container>
            <div className='DetailContainer'>
                <div className='WrapperDetail'>
                    <div className='ImgContainer'>
                        <img alt="" className='ImageDetail' src={item.img} />
                    </div>
                    <div className='InfoContainer'>
                        <div>{item.title}</div>
                        <div>{item.description}</div>
                        <div>$ {item.price}</div>
                        <div>{item.stock} unidades en stock</div>
                    </div>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                </div>
            </div>
            </Container>
        </>
    );
}

export default ItemDetail;