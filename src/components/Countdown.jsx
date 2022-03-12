import React from "react";
import { useTimer } from "react-timer-hook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "./Notification";
import styled from "styled-components";


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
          <Notification setCount={setCount} count={count}/>
        </div>
      ));
    }
  }

  //code to put time selected
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
        <span>{minutes}</span>:<span>{seconds}</span> 
        </div>
        {/* <p>{isRunning ? "Running" : "Not running"}</p>
        <button onClick={start}>Start</button> */}
         {/* <button onClick={pause}>Pause</button>  */}
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
    padding: 15px;
    background-color: #facf7e;
    color: #343f56;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.2rem;
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


      .row {
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    gap: 17px;
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

  .right {
    /* width: 25%; */
    margin: 25px 0px 0px 5px;
    background-image: linear-gradient(#fad263 70%, #fffb97);
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

    .circle {
    width: fit-content;
  }
 

  .Toastify__close-button--light {
    display: none;
  }

    .Toastify__toast-container--top-right {
    top: 1em;
    right: 1em;
    border-radius: 10%;
    padding: 0px;
    width: 30%;
  }

  .Toastify__toast-theme--light {
    padding: 0;
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

