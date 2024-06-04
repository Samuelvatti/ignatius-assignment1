import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import Cart from './components/Cart';
import Account from './components/Account';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const App = () => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        console.log('Cart updated:', cart); // Log the cart whenever it changes
    }, [cart]);

    const addToCart = (product, quantity) => {
      console.log('addToCart called');
      console.log('Product:', product);
      console.log('Quantity:', quantity);
        console.log(`addToCart called with Product: ${product.name}, Quantity: ${quantity}`);
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.product.id === product.id);
            if (existingItem) {
                const updatedCart = prevCart.map(item => 
                    item.product.id === product.id ? { ...item, quantity: item.quantity + parseInt(quantity) } : item
                );
                console.log('Updated cart:', updatedCart);
                return updatedCart;
            } else {
                const newCart = [...prevCart, { product, quantity: parseInt(quantity) }];
                console.log('New cart:', newCart);
                return newCart;
            }
        });
    };

    const updateQuantity = (productId, quantity) => {
        console.log(`updateQuantity called with Product ID: ${productId}, Quantity: ${quantity}`);
        const updatedCart = cart.map(item => item.product.id === productId ? { ...item, quantity: parseInt(quantity) } : item);
        console.log('Updated cart:', updatedCart);
        setCart(updatedCart);
    };

    const removeFromCart = (productId) => {
        console.log(`removeFromCart called with Product ID: ${productId}`);
        const updatedCart = cart.filter(item => item.product.id !== productId);
        console.log('Updated cart:', updatedCart);
        setCart(updatedCart);
    };

    const finalizePurchase = () => {
        alert('Order is Placed');
        console.log('Finalizing purchase, clearing cart');
        setCart([]);
    };

    const updateUser = (newUser) => {
        setUser(newUser);
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
                <Route path="/account" element={<Account user={user} updateUser={updateUser} />} />
            </Routes>
        </div>
    );
};

export default App;
