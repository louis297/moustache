import React, { useState } from 'react';
import { Navbar, Container, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.scss';
import NavCartComponent from './cart/NavCartComponent';
import { CartContext } from '../App';

export default function NavMenu(){
  const [collapsed, setCollapsed] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  }

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
        <Container>
          <NavbarBrand tag={Link} to='/'>Moustache</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row" isOpen={!collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to='/'>Home</NavLink>
              </NavItem>
            </ul>

          </Collapse>
          <ul className="navbar-nav navbar-right">
            <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
              <CartContext.Consumer>
                { 
                ({itemsInCart, setItemsInCart}) =>
                  <NavCartComponent itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} />
                }
              </CartContext.Consumer>
            </Dropdown> 
          </ul>
        </Container>
      </Navbar>
    </header>
  )
}
