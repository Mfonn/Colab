import React from "react";
import styled from "styled-components";
import { cardStyles } from "./ReusuableStyles";
import Clicks from "./Clicks";
import TimeChart from "./TimeChart";

export default function Analytics() {
  return (
    <Section>
      <div className="analytic">
        <div className="logo">
          <h1>0</h1>
        </div>
        <div className="content">
          <Clicks />
        </div>
      </div>

      <div className="analytic analytic2">
        <TimeChart />
      </div>
    </Section>
  );
}

const Section = styled.section`
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  margin-top: 5%;
  .analytic2 {
    margin-top: 30%;
  }

  .analytic {
    ${cardStyles};
    padding: 0.1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #ffc107;
      color: blue;
      svg {
        color: #ffffff;
      }
    }

    .logo {
      background-color: #000000;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;

      svg {
        font-size: 1.5rem;
      }
    }
  }
`;
