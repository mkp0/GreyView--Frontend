import React, { useState } from "react";
import {MenuLink, Nav , Logo , Menu , Hamburger} from "./Navbar.style"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo >
        Eli<span>Codes</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink >Our Work</MenuLink>
        <MenuLink >About</MenuLink>
        <MenuLink >Careers</MenuLink>
        <MenuLink >Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

