import React, { useState } from "react";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
// import Settings from "./components/Settings";
import Analytics from "./components/Analytics";
import Navbar from "./components/Navbar";
import Waves from "./components/Waves";

export default function () {

  const [count, setCount] = useState(0);


  return (
    <div>
      <Navbar />
      <Section>
        <Analytics count={count}/>
        <Dashboard setCount={setCount} count={count}/>
      </Section>
      <Waves />
    </div>
  );
}

const Section = styled.section`
  padding: 0.1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  height: 90vh;
`;
