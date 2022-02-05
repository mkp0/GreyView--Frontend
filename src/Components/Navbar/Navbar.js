import React from "react";
import { NavbarWrapper, UlWrapper } from "./Navbar.style";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <NavbarWrapper>
            <UlWrapper>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/legends">
                    <li>Legends</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/login">
                    <li>Login</li>
                </Link>
            </UlWrapper>
        </NavbarWrapper>
    );
}