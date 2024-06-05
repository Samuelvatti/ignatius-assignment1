import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import Cart from './components/Cart';
import Account from './components/Account';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const App = () => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.product.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                return [...prevCart, { product, quantity }];
            }
        });
    };

    const updateQuantity = (productId, quantity) => {
        setCart(cart.map(item =>
            item.product.id === productId ? { ...item, quantity } : item
        ));
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.product.id !== productId));
    };

    const finalizePurchase = () => {
        alert('Order is Placed');
        setCart([]);
        localStorage.removeItem('cart');
    };

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Smart Shop</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/cart">Cart</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/account">Account</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

            <Routes>
                <Route path="/" element={<Products addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} finalizePurchase={finalizePurchase} />} />
                <Route path="/account" element={<Account />} />
            </Routes>
        </div>
    );
};

export default App;
