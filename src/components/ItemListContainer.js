import ItemCount from './ItemCount';

const ItemListContainer = () => {

    const onAdd = (qty) => {
        alert("Agregaste " + qty + " items al carrito.");
    }

    return (
        <>
            
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </>
    );
    
}

export default ItemListContainer;