import { useEffect, useState } from 'react';
import {getData} from '../data';
import ItemList from './ItemList'

const ItemListContainer = () => {

    const [cuadros, setCuadros] = useState ([]);

    useEffect(() => {
        async function pedirDatos() {
            let datosLlegando = await getData();
            setCuadros(datosLlegando)
        }
        pedirDatos()
    }, [2000])

    console.log(cuadros, "Soy la data");

    return (
        <>
            <ItemList productos={cuadros}/>
            
        </>
    );
    
}

export default ItemListContainer;