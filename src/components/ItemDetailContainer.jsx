import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import { firestoreFetchOne } from "../utils/firestoreFetch";


const ItemDetailContainer = () => {

    const [cuadros, setCuadros] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
        .then(result => setCuadros(result))
        .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={cuadros} />
    );
}

export default ItemDetailContainer;
