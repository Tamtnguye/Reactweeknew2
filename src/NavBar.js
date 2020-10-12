import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import styled from "styled-components";

function Navbar() {
    return (
      <NavBar>
          <NavMenu>
        <Link to="/">Home </Link>
        
        
        <Link to="/About">About Us </Link>
        </NavMenu>
      </NavBar>
    );
  };
 
  const NavBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: #333;
  min-height: 50px;
  font-size: 1.2rem;
  font-weight: 500;
  color: skyblue;
  list-style: none;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const NavLink = styled.div`
  display: block;
  padding: 1rem;
  transition: 250ms ease background-color;
  &:hover {
    cursor: pointer;
    background-color: maroon;
  }
`;

const NavToggle = styled(NavLink)`
  text-decoration: underline;
`;
  export default Navbar;