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
          <h1 className="taken">Eye Rests Taken</h1>
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
  margin-top: 0%;

  h1 {
    display: flex;
  }

  .taken {
    width: 100%;
    font-size: 1rem;
    justify-content: center;
  }

  .analytic2 {
    margin-top: 5%;
    padding: 0.1rem;
  }

  .analytic1 {
    padding-left: 2rem;
    grid-template-columns: repeat(2, 1fr);
    width: fit-content;
    padding: 1rem 2rem 1rem 2rem;
    justify-content: center;
  }

  .analytic {
    ${cardStyles};
    width: 100%;
    align-items: center;
    gap: 1rem;

    margin-bottom: 2%;
    box-shadow: 0 12px 10px -10px rgba(0,0,0,0.3);

    transition: 0.5s ease-in-out;

    &:hover {
      background-color: #f9d271;
      transform: scaleX(1.1);
    }

    .content {
      display: block;
      padding-bottom: 1rem;
    }

    .logo {
      display: block;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      padding-left: 0rem;
      padding-top: 0.5rem;

      svg {
        font-size: 1.5rem;
      }
    }
  }
`;
