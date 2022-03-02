import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import FAQ from "./FAQ";
import Analytics from "./Analytics";
import Profile from "./Profile";


export default function Dashboard() {
  return (
    <div>
      <Section>
        <Navbar />
        <div className="grid">
          <div className="row__one">
          
            <Analytics />
            {/* <FAQ /> */}
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
  padding: 1rem;
  height: 100%;

  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-left: 8%;
    padding-right: 21%;
    gap: 1rem;
    margin-top: 1.5rem;

    .row__one {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      height: 50%;
      gap: 1rem;
    }

    .row__two {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      height: 50%;
      width: 80%;
      margin: auto;
      margin-top: 1rem;
      gap: 1rem;
    }
  }
`;
