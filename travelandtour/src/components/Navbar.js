import React from "react";
import './Navbar.css';
import styled from "styled-components";
import logo from "../assets/logo.png";
import {BsPerson} from "react-icons/bs";
import {IoSearchOutline} from "react-icons/io5";



export default function Navbar() {
    return(

      <Nav>
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <div className="toggle"></div>
          <div className="Links">
            <ul>
            <li> <a href="Services">Services</a> </li>
            <li> <a href="Destinations">Destinations</a> </li>
            <li> <a href="Offers">Offers</a></li>
            <li> <a href="Tours">Tours</a></li>
            <li> <a href="Blog">Blog</a></li>
            </ul>
          </div>
          <div className="account-info">
            <div className="account">
              <span>
                <BsPerson />
              </span>
              <span>
                My Account
              </span>
            </div>
          </div>
          <div className="search">
              <span>
                <IoSearchOutline />
              </span>
              <span>
                Explore
              </span>
          </div>
          </Nav>      
    );
}
const Nav = styled.nav`

`