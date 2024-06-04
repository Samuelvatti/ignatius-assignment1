import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button, FormGroup, Label, Input } from 'reactstrap';

const Products = ({ addToCart }) => {
    // Hardcoded product data
    const products = [
        { id: 1, name: 'Iphone 15 Pro Max', description: 'The iPhone 15 Pro Max features a stunning design, advanced A17 Bionic chip, enhanced camera system, and exceptional battery life.', image: '/images/iphone15_pro_max.jpg' },
        { id: 2, name: 'Google Pixel 8 Pro', description: 'The Google Pixel 8 Pro offers a sleek design, Tensor G3 chip, advanced AI features, and a superior camera experience.', image: '/images/pxiel8pro.webp' },
        { id: 3, name: 'Samsung Flip 4', description: 'The Samsung Flip 4 boasts a foldable design, Snapdragon 8+ Gen 1 processor, vibrant display, and versatile camera capabilities.', image: '/images/Flip4_Carousel_ProductKV_Blue_MO.webp' },
        { id: 4, name: 'Samsung S24 Ultra', description: 'The Samsung S24 Ultra features a stunning display, powerful Exynos 2400 chip, advanced camera system, and long-lasting battery life.', image: '/images/s24ultra.jpg' },
        { id: 5, name: 'Nothing Phone (2)', description: 'The Nothing Phone (2) offers a unique transparent design, Snapdragon 8+ Gen 1 chip, vibrant display, and impressive dual cameras.', image: '/images/nothing2.jpg' },
        { id: 6, name: 'Oneplus Open', description: 'The OnePlus Open features a sleek foldable design, Snapdragon 8 Gen 2 processor, vibrant display, and versatile camera system.', image: '/images/oneplusopen.jpg' },
    ];

    // State to track selected quantities
    const [quantities, setQuantities] = useState({});

    // Function to handle quantity change
    const handleQuantityChange = (productId, quantity) => {
        console.log(`Changing quantity of product ${productId} to ${quantity}`);
        setQuantities({ ...quantities, [productId]: quantity });
    };

    // Function to handle adding product to cart
    const handleAddToCart = (product) => {
        const quantity = quantities[product.id] || 1; // Default quantity is 1 if not selected
        console.log(`Adding to cart: Product: ${product.name}, Quantity: ${quantity}`);
        addToCart(product, quantity);
    };

    return (
        <div>
            <h2>Products</h2>
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-md-4 mb-3">
                        <Card>
                            <CardImg top width="100%" src={product.image} alt={product.name} />
                            <CardBody>
                                <CardTitle tag="h5">{product.name}</CardTitle>
                                <CardText>{product.description}</CardText>
                                <FormGroup>
                                    <Label for={`quantity_${product.id}`}>Quantity:</Label>
                                    <Input
                                        type="number"
                                        id={`quantity_${product.id}`}
                                        value={quantities[product.id] || 1}
                                        onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                                        min="1"
                                    />
                                </FormGroup>
                                <Button color="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
