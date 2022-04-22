import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addItem = (item, quantity) => {
        let found = cartList.find(product => product.id === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    id: item.id,
                    img: item.img,
                    title: item.title,
                    price: item.price,
                    qtyItem: quantity
                }
            ]); 
        } else {
            found.qtyItem += quantity;
        }
    }

    const clear = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.id != id);
        setCartList(result);
    }

    return (
        <CartContext.Provider value={{cartList, addItem, clear, deleteItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;