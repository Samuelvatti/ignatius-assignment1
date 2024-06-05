import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Account = ({ user, updateUser }) => {
    const [formData, setFormData] = useState(user || {});

    useEffect(() => {
        setFormData(user);
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(formData);
        alert('Account details saved successfully!');
    };

    return (
        <div>
            <h2>Account</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input type="text" name="name" id="name" value={formData.name || ''} onChange={handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input type="email" name="email" id="email" value={formData.email || ''} onChange={handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="address">Address:</Label>
                    <Input type="text" name="address" id="address" value={formData.address || ''} onChange={handleInputChange} />
                </FormGroup>
                <Button type="submit">Save</Button>
            </Form>
        </div>
    );
};

export default Account;
