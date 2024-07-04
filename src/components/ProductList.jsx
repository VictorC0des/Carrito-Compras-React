import React from 'react';
import { data } from "../data.js";
import Swal from 'sweetalert2';


export const ProductList = ({
    allProducts,
    setAllProducts,
    subtotal,
    setSubtotal,
    total,
    setTotal,
    countProducts,
    setCountProducts,
}) => {
    const IVA = 0.16;

    const onAddProduct = product => {
        let productExists = allProducts.find(item => item.id === product.id);
        let newProducts;
        if (productExists) {
            newProducts = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            Swal.fire({
                title: 'Producto actualizado',
                text: `${product.nameProduct} cantidad actualizada en el carrito.`,
                icon: 'info',
                confirmButtonText: 'Ok'
            });
        } else {
            newProducts = [...allProducts, { ...product, quantity: 1 }];
            Swal.fire({
                title: 'Producto agregado',
                text: `${product.nameProduct} agregado al carrito.`,
                icon: 'success',
                confirmButtonText: 'Ok'
            });
        }

        setAllProducts(newProducts);

        let newSubtotal = newProducts.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
        setSubtotal(newSubtotal);

        let newTotal = newSubtotal * (1 + IVA);
        setTotal(newTotal);

        let newCountProducts = newProducts.reduce((acc, curr) => acc + curr.quantity, 0);
        setCountProducts(newCountProducts);
    };

    return (
        <div className='container-items'>
            {data.map(product => (
                <div className='item' key={product.id}>
                    <figure>
                        <img src={product.img} alt={product.nameProduct} />
                    </figure>
                    <div className='info-product'>
                        <h2>{product.nameProduct}</h2>
                        <p className='price'>${product.price}</p>
                        <button onClick={() => onAddProduct(product)}>
                            Añadir al carrito
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};