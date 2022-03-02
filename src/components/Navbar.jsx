import React from 'react';
import styled from "styled-components";

export default function Navbar() {
  return (
    <Nav>
      
        <div className='title'>
          <h1>Welcome to <span>PRODUCT NAME</span></h1>
        </div>
     
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #ffc107;
        letter-spacing: 0.2rem;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
`;
