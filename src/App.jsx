import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import Purchase from './components/purchase';
import Footer from './components/Footer'; 

function App() {
    const [allProducts, setAllProducts] = useState(() => {
        const savedProducts = localStorage.getItem('allProducts');
        return savedProducts ? JSON.parse(savedProducts) : [];
    });

    const [subtotal, setSubtotal] = useState(() => {
        return localStorage.getItem('subtotal') ? parseFloat(localStorage.getItem('subtotal')) : 0;
    });

    const [total, setTotal] = useState(() => {
        return localStorage.getItem('total') ? parseFloat(localStorage.getItem('total')) : 0;
    });

    const [countProducts, setCountProducts] = useState(() => {
        return localStorage.getItem('countProducts') ? parseInt(localStorage.getItem('countProducts'), 10) : 0;
    });

    useEffect(() => {
        localStorage.setItem('allProducts', JSON.stringify(allProducts));
        localStorage.setItem('subtotal', subtotal.toString());
        localStorage.setItem('total', total.toString());
        localStorage.setItem('countProducts', countProducts.toString());
    }, [allProducts, subtotal, total, countProducts]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <Header
                            allProducts={allProducts}
                            setAllProducts={setAllProducts}
                            subtotal={subtotal}
                            total={total}
                            setTotal={setTotal}
                            countProducts={countProducts}
                            setCountProducts={setCountProducts}
                        />
                        <ProductList
                            allProducts={allProducts}
                            setAllProducts={setAllProducts}
                            subtotal={subtotal}
                            setSubtotal={setSubtotal}
                            total={total}
                            setTotal={setTotal}
                            countProducts={countProducts}
                            setCountProducts={setCountProducts}
                        />
                    </>
                } />
                <Route path="/purchase" element={<Purchase />} />
            </Routes>
            <Footer /> 
        </Router>
    );
}

export default App;