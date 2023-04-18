import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Nav,
  NavItem,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarText,
} from "reactstrap";


const Header = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <header>
      <Navbar fixed="top" expand color="dark" dark>
        <NavbarBrand href="/">Blurred Limes</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to="/about">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/fooditemindex">View Food Items</NavLink>
            </NavItem>
            {logged_in && (
              <>
                <NavItem>
                  <NavLink to="/myfooditems">My Food Items</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/fooditemnew">Add Food Item</NavLink>
                </NavItem>
                <NavItem>
                  <a href={sign_out_route}>Sign Out</a>
                </NavItem>
              </>
            )}
            {!logged_in && (
              <>
                <NavItem>
                  <a href={sign_in_route}>Sign In</a>
                </NavItem>
                <NavItem>
                  <a href={new_user_route}>Sign Up</a>
                </NavItem>
              </>
            )}
            
          </Nav>
          <NavbarText>Blurred Limes</NavbarText>
        </Collapse>
      </Navbar>
    </header>
  )
}

export default Header
