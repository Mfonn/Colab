import React from "react";
import { useTimer } from "react-timer-hook";
import { useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "./Notification";
import styled from "styled-components";

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({ expiryTimestamp, onExpire: () => bongo() });

  function bongo() {
    var intID = setTimeout(notify, 1000);

    function notify() {
      toast(() => (
        <div>
          <Notification />
        </div>
      ));
    }
  }

  function purr(number) {
    const time = new Date();

    time.setSeconds(time.getSeconds() + number);
    restart(time);
  }

  function kulp(numb, number) {
    setInterval(() => purr(number), numb);
  }

  return (
    <Section>
      <div>
        <div style={{ fontSize: "100px", textAlign: "center" }}>
          {/* <span>{minutes}</span>:<span>{seconds}</span> */}
        </div>
        {/* <p>{isRunning ? "Running" : "Not running"}</p> */}
        {/* <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button> */}
      </div>

      <button
        value="20"
        className="jiggle"
        onClick={() => {
          purr(10);
          kulp(1100 * 10, 10);
        }}
      >
        20
      </button>

      <button
        className="jiggle"
        onClick={() => {
          purr(1500);
          kulp(1600 * 1000, 1500);
        }}
      >
        25
      </button>

      <button
        className="jiggle"
        onClick={() => {
          purr(1800);
          kulp(1900 * 1000, 1800);
        }}
      >
        30
      </button>

      <button
        className="jiggle"
        onClick={() => {
          purr(2700);
          kulp(2800 * 1000, 2700);
        }}
      >
        45
      </button>

      <ToastContainer limit={1} />
    </Section>
  );
}

export default MyTimer;

const Section = styled.section`

  background-color: #ffffff;
  width: 70%;
  margin: auto;
  text-align: center;

  border-radius: 7%;
  height: auto;
  box-shadow: 0 10px 10px -10px rgba(0,0,0,0.3);

  display: flex;
  justify-content: space-between;
  margin: auto;

  padding: 1.5rem;

  .jiggle {
      background-color: #f3d189;
      color: #343f56;
      margin: 2%;
      box-shadow: 0 12px 10px -10px rgba(0,0,0,0.3);
  }

  button:focus {
    background-color: #fb9300;
  }

  button {
    padding: 15px;
    background-color: #facf7e;
    color: #343f56;
    border: none;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    font-size: 1.2rem;
    font-weight: bold;
    transition: all 1s;
    cursor: pointer;

    &:hover {
      background-color: #fb9300;
      transform: scaleX(1.1);
      overflow-y: hidden;
    }
  }


   
    .column {
      float: left;
    }

    .left {
      width: 75%;
    }

    .right {
      width: 25%;
    }
 

  .Toastify__close-button--light {
    display: none;
  }

    --toastify-color-progress-light: linear-gradient(
    to right,
     #ffbc5a, #f3d189, #ffe7c4
  );

  .noti{
    background-color: #ffffff;
    border-radius: 0%;

    font-size: 1rem;
    font-weight: 500;

    padding: 0.5rem;
    margin: 0;

    border: 0;
  }

  .vl {
  
    border-left: 1px solid #e6e6e6; 
    height: 3rem;
    // width: 1%;
    // display: inline-block;
    // padding: 0;
    // margin: 0;


  }
`;

