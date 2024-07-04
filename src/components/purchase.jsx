import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';

function Purchase() {
    const [allProducts, setAllProducts] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);
    const [street, setStreet] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [colonia, setColonia] = useState('');

    useEffect(() => {
        const savedProducts = localStorage.getItem('allProducts');
        const savedSubtotal = localStorage.getItem('subtotal');
        const savedTotal = localStorage.getItem('total');
        const savedCountProducts = localStorage.getItem('countProducts');

        if (savedProducts) setAllProducts(JSON.parse(savedProducts));
        if (savedSubtotal) setSubtotal(parseFloat(savedSubtotal));
        if (savedTotal) setTotal(parseFloat(savedTotal));
        if (savedCountProducts) setCountProducts(parseInt(savedCountProducts, 10));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const doc = new jsPDF();
        doc.text('Resumen de Compra', 10, 10);
        doc.text(`Total de productos: ${countProducts}`, 10, 20);
        doc.text(`Subtotal: $${subtotal}`, 10, 30);
        doc.text(`Total: $${total}`, 10, 40);
        doc.text(`Calle: ${street}`, 10, 50);
        doc.text(`Código Postal: ${postalCode}`, 10, 60);
        doc.text(`Método de Pago: ${paymentMethod}`, 10, 70);
        doc.text(`Colonia: ${colonia}`, 10, 80);
        doc.text('Gracias por su compra', 10, 90);
        doc.save('recibo_de_compra.pdf');
    };

    return (
        <div id="purchase-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div id="purchase-summary">
                <h2>Resumen de Compra</h2>
                <p id="total-products">Total de productos: {countProducts}</p>
                
                <p id="subtotal">Subtotal: ${subtotal}</p>
                <p id="total">Total: ${total}</p>
            </div>
            <div id="shipping-payment-info">
                <h2>Información de Envío y Pago</h2>
                <form id="payment-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="street">Calle:</label>
                        <input type="text" id="street" className="form-control" value={street} onChange={(e) => setStreet(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postalCode">Código Postal:</label>
                        <input type="text" id="postalCode" className="form-control" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="colonia">Colonia:</label>
                        <input type="text" id="colonia" className="form-control" value={colonia} onChange={(e) => setColonia(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="paymentMethod">Método de Pago:</label>
                        <select id="paymentMethod" className="form-select" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                            <option value="">Seleccione un método de pago</option>
                            <option value="paypal">PayPal</option>
                            <option value="creditCard">Tarjeta de Crédito</option>
                            <option value="cash">Efectivo en Oxxo</option>
                        </select>
                    </div>
                    <button type="submit" className="submit-btn">Confirmar Compra</button>
                </form>
            </div>
        </div>
    );
}

export default Purchase;