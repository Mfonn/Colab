import React from "react";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h1 className="font-link">EyeCare</h1>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  .font-link {
    font-family: "Dongle", sans-serif;
    font-size: 3rem;
    padding-right: 4rem;
    font-weight: light;
  }

  display: flex;
  margin-top: 1%;
  margin-left: 8%;
  justify-content: space-between;
  color: #343f56;

  width: 100%;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;

        color: #343f56;
        letter-spacing: 0.2rem;
        font-family: "Dongle", sans-serif;
      }
    }
  }
`;
