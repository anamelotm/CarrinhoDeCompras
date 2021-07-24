import React, { useState, useEffect } from 'react';
import './style.css';
import Swal from 'sweetalert2';

import api from '../../services/api';
interface Products {
    id: number;
    photo: string;
    name: string;
    description: string;
    price: number;
}

const Home: React.FC = () => {
    const [data, setData] = useState<Products[]>([]);
    useEffect(() => {
        api.get('').then(
            (            response: { data: React.SetStateAction<Products[]>; }) => {
                setData(response.data)
            }
        )
    }, [])

    const handleCart = ( index: number ) => {
        const productStore = JSON.stringify(data[index]);
        localStorage.setItem(`@Produto-${index}`, productStore);
        Swal.fire('Produto adicionado ao carrinho!');
    }

    return(
            <section className="home">
                <div className="container">
                {data.map(( prod, index) => (
                    <div className="product-content" key={prod.id} >
                        <img src={prod.photo} width="200px" height="auto"/>
                        <h4>{prod.name}</h4>
                        <p>{prod.description}</p>
                        <h4>{prod.price}</h4>
                        <button onClick={() => handleCart(index)}>Adicionar ao carrinho</button>
                    </div>
                ))}
                </div>
            </section>
    );
}

export default Home;