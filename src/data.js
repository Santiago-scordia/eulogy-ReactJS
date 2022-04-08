import cuadro1 from './assets/products/producto1.jpg';
import cuadro2 from './assets/products/producto2.jpg';
import cuadro3 from './assets/products/producto3.jpg';
import cuadro4 from './assets/products/producto4.jpg';
import cuadro5 from './assets/products/producto5.jpg';
import cuadro6 from './assets/products/producto6.jpg';
import cuadro7 from './assets/products/producto7.jpg';
import cuadro8 from './assets/products/producto8.jpg';

const data = [
    {
        id: 1,
        title:"Cuadro 1",
        price:"$100",
        img:cuadro1
    },
    {
        id: 2,
        title:"Cuadro 2",
        price:"$200",
        img:cuadro2
    },
    {
        id: 3,
        title:"Cuadro 3",
        price:"$300",
        img:cuadro3
    },
    {
        id: 4,
        title:"Cuadro 4",
        price:"$1000",
        img:cuadro4
    },
    {
        id: 5,
        title:"Cuadro 5",
        price:"$5000",
        img:cuadro5
    },
    {
        id: 6,
        title:"Cuadro 6",
        price:"$6000",
        img:cuadro6
    },
    {
        id: 7,
        title:"Cuadro 7",
        price:"$7000",
        img:cuadro7
    },
    {
        id: 8,
        title:"Cuadro 8",
        price:"$9000",
        img:cuadro8
    }
]

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(data);
        }, 2000)
    })
}