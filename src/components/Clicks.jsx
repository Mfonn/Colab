import React from 'react';
import styled from "styled-components";
  
function Clicks() {
    return (
        <Section>
        <div className="main-cointainer">
            
              
        <h1>0 </h1>
  
        </div>
        </Section>

    )
}

export default Clicks

const Section = styled.section`
    width: 65%;
    margin: auto;
    margin-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10%;
    background-color: #ffffff;
    padding: 0rem;
    color: #343f56;
    box-shadow: 0 10px 10px -10px rgba(0,0,0,0.3);

    h1 {

    font-size: 5rem;
    font-weight: 500;
    padding: 0.5rem;

    }
`;