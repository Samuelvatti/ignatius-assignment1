import React from 'react';
import { Button, Table } from 'reactstrap';

const Cart = ({ cart, updateQuantity, removeFromCart, finalizePurchase }) => (
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

export default Cart;
