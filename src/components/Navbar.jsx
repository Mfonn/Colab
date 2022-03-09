import React from 'react';
import styled from "styled-components";

export default function Navbar() {
  return (
    <Nav>
      
        <div className='title'>
          <h1>EyeCare</h1>
        </div>
     
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  margin-top: 1%;
  margin-left: 8%;
  justify-content: space-between;
  color: #343F56;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #343F56;
        letter-spacing: 0.2rem;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
`;
