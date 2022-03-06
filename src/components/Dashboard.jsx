import React from "react";
import styled from "styled-components";
import Profile from "./Profile";


export default function Dashboard() {
  return (
    <div>
      <Section>
        
        <div className="grid">
          <div className="row__one">
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
  margin-left: 1vw;
  padding: 1rem;
  height: 100%;

  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-left: 4%;
    padding-right: 15%;
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
