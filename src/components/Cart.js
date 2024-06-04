import React, { useEffect } from 'react';
import { Button, Table } from 'reactstrap';

const Cart = ({ cart, updateQuantity, removeFromCart, finalizePurchase }) => {
    // Log the cart prop when the component mounts
    useEffect(() => {
        console.log('Cart component mounted with cart:', cart);
    }, [cart]);

    // Log the cart prop whenever it updates
    useEffect(() => {
        console.log('Cart prop updated:', cart);
    }, [cart]);

    // Log the cart length for quick check
    useEffect(() => {
        console.log('Cart length:', cart.length);
    }, [cart]);

    return (
        <div>
            <h2>Cart</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
                                    min="1"
                                />
                            </td>
                            <td>
                                <Button onClick={() => removeFromCart(item.product.id)}>Remove</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button onClick={finalizePurchase}>Place Order</Button>
        </div>
    );
};

export default Cart;
