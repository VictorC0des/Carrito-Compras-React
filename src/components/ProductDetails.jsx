// src/components/ProductDetails.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data';

function ProductDetails() {
    const { id } = useParams();
    const product = data.find(p => p.id === parseInt(id));
    const [selectedSize, setSelectedSize] = useState(product.details.sizes ? product.details.sizes[0] : '');
    const [selectedColor, setSelectedColor] = useState(product.details.colors[0]);

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="product-details">
            <img src={product.img} alt={product.nameProduct} className="product-image" />
            <h2>{product.nameProduct}</h2>
            <p>${product.price}</p>
            <p>{product.details.description}</p>
            <div className="product-options">
                {product.details.sizes && (
                    <div className="option-group">
                        <label htmlFor="size-select">Tallas disponibles:</label>
                        <select
                            id="size-select"
                            value={selectedSize}
                            onChange={(e) => setSelectedSize(e.target.value)}
                        >
                            {product.details.sizes.map(size => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                )}
                <div className="option-group">
                    <label htmlFor="color-select">Colores disponibles:</label>
                    <select
                        id="color-select"
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                    >
                        {product.details.colors.map(color => (
                            <option key={color} value={color}>{color}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
