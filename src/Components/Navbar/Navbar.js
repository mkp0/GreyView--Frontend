import React, { useState, useEffect, useContext } from "react";
import { AuthContext, SetAuthContext } from "../../App";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import Cookies from "universal-cookie";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
} from "./Navbar.elements";

const cookies = new Cookies();

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const auth = useContext(AuthContext);
  const logout = useContext(SetAuthContext);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const loggedInNavbar = (
    <>
      <NavItem>
        <NavLinks to="/create" onClick={closeMobileMenu}>
          Add
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks to="/allpost" onClick={closeMobileMenu}>
          Update Posts
        </NavLinks>
      </NavItem>
      <NavItemBtn>
        {button ? (
          <NavBtnLink to="/login">
            <Button
              primary
              onClick={() => {
                logout(false);
                cookies.set("token", "", { path: "/" });
              }}
              fontBig
            >
              Logout
            </Button>
          </NavBtnLink>
        ) : (
          <NavBtnLink to="/login">
            <Button
              onClick={() => {
                logout(false);
                cookies.set("token", "", { path: "/" });
              }}
              fontBig
              primary
            >
              Logout
            </Button>
          </NavBtnLink>
        )}
      </NavItemBtn>
    </>
  );

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              GreyView
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/legends" onClick={closeMobileMenu}>
                  Legends
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about" onClick={closeMobileMenu}>
                  About
                </NavLinks>
              </NavItem>
              {!auth ? (
                <NavItemBtn>
                  {button ? (
                    <NavBtnLink to="/login">
                      <Button primary>Admin Login</Button>
                    </NavBtnLink>
                  ) : (
                    <NavBtnLink to="/login">
                      <Button onClick={closeMobileMenu} fontBig primary>
                        Admin Login
                      </Button>
                    </NavBtnLink>
                  )}
                </NavItemBtn>
              ) : (
                loggedInNavbar
              )}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
