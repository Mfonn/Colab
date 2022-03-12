import React from "react";
import { useTimer } from "react-timer-hook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "./Notification";
import styled from "styled-components";
import Snooze from "./Snooze";

function MyTimer({ expiryTimestamp, setCount, count }) {
  //code for the timer
  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({ expiryTimestamp, onExpire: () => bongo() });

  //calls notification everytime the timer runs out
  function bongo() {
    var intID = setTimeout(notify, 1000);

    //calls toast notifications when it is done
    function notify() {
      toast(() => (
        <div>
          <Notification setCount={setCount} count={count} />
        </div>
      ));
    }
  }

  //code to put timer selected
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
      <div className="">
        <div className="">
          {/* code for the timer */}
          <div style={{ fontSize: "100px", textAlign: "center" }}>
            {/* <span>{minutes}</span>:<span>{seconds}</span> */}
          </div>
          {/* <p>{isRunning ? "Running" : "Not running"}</p>
        <button onClick={start}>Start</button> */}
          {/* <button onClick={pause}>Pause</button> */}
          {/* <button onClick={resume}>Resume</button> */}
        </div>

        {/* code for  the  */}
        <div className="push">
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
        </div>
      </div>
    </Section>
  );
}

export default MyTimer;

const Section = styled.section`
  .push {
    background-color: #ffffff;
    text-align: center;
    border-radius: 10px;
    height: auto;
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.3);

    display: flex;
    justify-content: space-between;
    margin-left: 30px;

    padding: 1.5rem;
  }

  .jiggle {
    background-color: #f3d189;
    color: #343f56;
    margin: 2%;
  }

  button:focus {
    background-color: #fb9300;
  }

  button {
    padding: 20px;
    background-color: rgba(251, 147, 0, 0.35);
    color: #343f56;
    border: none;
    /* width: 50px; */
    /* height: 70px; */
    border-radius: 50%;
    font-size: 1.2rem;
    font-weight: bold;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #fb9300;
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

  --toastify-toast-width: 400px;

  .Toastify__toast-body,
  .Toastify__toast,
  .Toastify__toast-container {
    padding: 0px;
    margin: 0px;
  }

  --toastify-color-progress-light: linear-gradient(
    to right,
    #ffbc5a,
    #f3d189,
    #ffe7c4
  );

  /* .noti {
    background-color: #ffffff;
    border-radius: 0%;

    font-size: 1rem;
    font-weight: 500;

    padding: 0.5rem;
    margin: 0;

    border: 0;
  } */

  .row {
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    gap: 17px;
  }

  .circle {
    width: fit-content;
  }

  .left {
    /* width: 300px; */
    /* border-right: 1px solid #e6e6e6; */
    height: 100%;
    width: fit-content;
    margin-right: 0px;
    color: #222;
    text-align: left;
    padding: 10px 0px;
  }

  h2 {
    color: #342f56;
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 0.8rem;
    margin-bottom: 8px;
  }

  p {
    font-size: 0.7rem;
  }

  .right {
    /* width: 25%; */
    margin: 25px 0px 0px 5px;
    background-image: linear-gradient(#fad263 70%, #fffb97);
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .btn {
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    margin: 0;
    width: 90px;
    margin-left: 0px;
  }

  .Toastify__close-button--light {
    display: none;
  }

  .Toastify__toast-container--top-right {
    top: 1em;
    right: 1em;
    border-radius: 10%;
    padding: 0px;
  }

  .noti {
    background-color: #fff;
    width: 100%;
    height: 50%;
    border-radius: 0px;
    padding: 0;
    /* padding-right: 15px; */
    margin: 0;
    /* height: fit-content; */
    font-size: 0.9rem;
    font-weight: bold;
    text-align: center;
  }

  .btn-down {
    border-top-right-radius: 5px;
  }

  .btn-up {
    border-bottom-right-radius: 5px;
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
