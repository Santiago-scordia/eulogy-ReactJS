import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList'
import { useParams } from 'react-router';
import { collection, getDocs } from "firebase/firestore";
import db from '../utils/firebaseConfig';


const ItemListContainer = () => {

    const [cuadros, setCuadros] = useState([])
    const { idCategory } = useParams();


    useEffect(() => {
        const fetchFromFirestore = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataFromFirestore = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            return dataFromFirestore;
        }
        fetchFromFirestore()
            .then(result => setCuadros(result))
            .catch(err => console.log(err));

    }, [cuadros]);

    return (
        <>
            <ItemList productos={cuadros} />
        </>
    );
}

export default ItemListContainer;