import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
const { data } = require('../data');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    useEffect(() => {
        customFetch(2000, data[2])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;
