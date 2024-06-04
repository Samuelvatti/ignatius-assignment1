// Navbar.js
import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavbarComponent = () => (
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
);

export default NavbarComponent;
