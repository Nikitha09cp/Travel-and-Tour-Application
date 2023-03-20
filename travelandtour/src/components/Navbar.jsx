import React from "react";
import './Navbar.css';
import styled from "styled-components";
import logo from'../assets/logo.png';
import {BsPerson} from "styled-components";
import {IoSearchOOutline} from "styled-components";

export default function Navbar() {
    return(
        <Nav>
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <div className="toggle"></div>
          <div className="Links">
            <ul>
            <li> <a href="#">Services</a> </li>
            <li> <a href="#">Destinations</a> </li>
            <li> <a href="#"></a>Offers</li>
            <li> <a href="#"></a>Tours</li>
            <li> <a href="#"></a>Blog</li>
            </ul>
          </div>
        </Nav>
    );
}
const Nav = styled.nav`

`