import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList'
import { useParams } from 'react-router';
import { firestoreFetch } from '../utils/firestoreFetch';


const ItemListContainer = () => {

    const [cuadros, setCuadros] = useState([])
    const { idCategory } = useParams();


    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setCuadros(result))
            .catch(err => console.log(err));
    }, [idCategory]);

    useEffect(() => {
        return (() => {
            setCuadros([]);
        })
    }, []);

    return (
        <>
            <ItemList productos={cuadros} />
        </>
    );
}


export default ItemListContainer;