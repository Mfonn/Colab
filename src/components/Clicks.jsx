import React from "react";
import styled from "styled-components";

function Clicks({ count }) {
  return (
    <Section>
      <div className="main-cointainer">
        <h1 className="tryme">{count}</h1>
      </div>
    </Section>
  );
}

export default Clicks;

const Section = styled.section`
  margin: auto;
  margin-bottom: 5%;
  display: inline;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 0rem;
  color: #343f56;

  h1 {
    font-size: 5rem;
    font-weight: 500;
    padding: 0.5rem;
    display: inline;
  }

  .tryme {
    display: inline;
  }

  .main-cointainer {
    display: inline;
  }
`;
