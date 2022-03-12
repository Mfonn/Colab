import React from "react";
import styled from "styled-components";
// import image from "../assets/profile.jpg";
// import { BiTimer } from "react-icons/bi";
import { cardStyles } from "./ReusuableStyles";
import Countdown from "./Countdown";

export default function Profile({ setCount, count }) {
  return (
    <Section>
      <div className="info">
        <div className="container">
          <h3>Push Notification Settings</h3>
          <h5 className="instruction">
            Provide the frequency of minutes that you would like to be notified
          </h5>
          <Countdown className="count" setCount={setCount} count={count} />
        </div>
      </div>

      {/* 
      <div className='image'>
        <img src={image} alt="" />
      </div> */}
    </Section>
  );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 500px;
  margin-bottom: 2%;
  box-shadow: 0 12px 10px -10px rgba(0, 0, 0, 0.3);

  transition: 0.5s ease-in-out;

  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
    h5 {
      letter-spacing: 0.2rem;
    }
  }
  .info {
    display: flex;
    /* gap: 5rem; */
    /* height: 300px; */
    /* width: 400px; */

    .container {
      padding: 2rem;

      h3 {
        padding-bottom: 1rem;
        font-size: 1.3rem;
      }

      h5 {
        font-weight: normal;
        font-size: 0.8rem;
        padding-bottom: 3rem;
      }

      .instruction {
        margin-top: 1%;
      }
    }
  }
`;
