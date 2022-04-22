import React from 'react';
import { useEffect, useState } from 'react';
import customFetch from "../utils/customFetch";
import ItemList from './ItemList'
import { useParams } from 'react-router';
const {data} = require('../data');

const ItemListContainer = () => {

    const [cuadros, setCuadros] = useState([])
    const { idCategory } = useParams();


    useEffect(() => {
        customFetch(2000, data.filter(item => {
            if(idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
        .then(result => setCuadros(result))
        .catch(err => console.log(err))
    }, [cuadros]);

    return (
        <>
            <ItemList productos={cuadros} />
        </>
    );
}

export default ItemListContainer;