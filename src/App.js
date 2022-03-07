import React from "react";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
// import Settings from "./components/Settings";
import Analytics from "./components/Analytics";
import Navbar from "./components/Navbar";
import Waves from "./components/Waves";

export default function () {
  return (
    <div>
      <Navbar />
      <Section>
        <Analytics />
        <Dashboard />
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
