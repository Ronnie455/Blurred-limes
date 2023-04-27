import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png"
import {Nav, NavItem, Navbar, NavbarBrand} from "reactstrap";


const Header = ({logged_in, new_user_route, sign_in_route, sign_out_route, edit_user_registration_route, current_user}) => {
  return (
    <header>
      <Navbar className="nav-bar" fixed="relative" expand>
        <NavbarBrand href="/"><img style={{ width: 140, height: 90 }} src={Logo} alt='photo of logo' className='header-logo'/></NavbarBrand>
          <Nav className="nav-items" navbar>
          <NavItem>
              <NavLink to="/" style={{color:"#203611"}}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/aboutus" style={{color:"#203611"}}>Meet The Team</NavLink>
            </NavItem>
            {logged_in && (
              <>
                <NavItem>
                  <NavLink to="/protectedindex" style={{color:"#203611"}}>My Inventory</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/fooditemnew" style={{color:"#203611"}}>Add to Inventory</NavLink>
                </NavItem>
                <NavItem>
                  <a href={edit_user_registration_route} style={{color:"#203611"}}>Edit Profile</a>
                </NavItem>
                <NavItem>
                  <a href={sign_out_route} style={{color:"#203611"}}>Sign Out</a>
                </NavItem>
              </>
            )}
            {!logged_in && (
              <>
                <NavItem>
                  <a href={sign_in_route} style={{color:"#203611"}}>Sign In</a>
                </NavItem>
                <NavItem>
                  <a href={new_user_route} style={{color:"#203611"}}>Sign Up</a>
                </NavItem>
              </>
            )}
          </Nav>
      </Navbar>
    </header>
  )
}
export default Header
