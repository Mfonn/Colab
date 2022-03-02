import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import FAQ from "./FAQ";
import Analytics from "./Analytics";
import Profile from "./Profile";
import TimeChart from "./TimeChart";

export default function Dashboard() {
  return (
    <div>
      <Section>
        <Navbar />
        <div className="grid">
          <div className="row__one">
            <TimeChart />
            <Analytics />
            <FAQ />
          </div>
          <div className="row__two">
            <Profile />
          </div>
        </div>
      </Section>
    </div>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;

  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;

    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }

    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      height: 50%;
      gap: 1rem;
    }
  }
`;
