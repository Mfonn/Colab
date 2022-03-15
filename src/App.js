import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
// import Settings from "./components/Settings";
import Analytics from "./components/Analytics";
import Navbar from "./components/Navbar";
import Waves from "./components/Waves";
import Loading from './components/Loading';

export default function () {

  const [count, setCount] = useState(0);

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])



  return (
    <div>
     
      {loading === false ? (
        <div>
      <Navbar />
      <Section>
        <Analytics count={count}/>
        <Dashboard setCount={setCount} count={count}/>
      </Section>
      <Waves />
      </div>
      ): (
       <Loading />
      )}
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
