import React from 'react';
import styled from "styled-components";
import Dashboard from "./components/Dashboard"
// import Settings from "./components/Settings";
import Analytics from './components/Analytics';
import Navbar from "./components/Navbar";




export default function() {
  return (
    <div>
      <Navbar />
      <Section>
      <Analytics />
      <Dashboard />
      </Section>
    </div>

  );
}


const Section = styled.section`
     padding: 0.1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
`;