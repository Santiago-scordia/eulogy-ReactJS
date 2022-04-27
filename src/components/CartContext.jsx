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
        console.log(cartList);
    }

    const itemsInCart = () => {
        return cartList.reduce((a,v) => a = a + v.qtyItem , 0);
    }

    const totalCart = () => {
        return cartList.reduce((a,v) => a = a + v.price * v.qtyItem , 0);
    }

    const clear = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.id != id);
        setCartList(result);
    }

    return (
        <CartContext.Provider value={{cartList, addItem, totalCart, clear, deleteItem, itemsInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;