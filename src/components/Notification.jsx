import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

const Msg = () => (
  <div>
  <div className="row">
  <div className="column">
  <div className="row">
  <div className="circle">
  <div className="right"></div>
  </div>
  <div className="left">
  
    <h4 className="warm">
       Rub your hands and gently place your warm hands over your eyes, with
    fingertips on the forehead.
    </h4>
   
  </div>
  </div>
  </div>
  </div>
  </div>
);

const myDate = new Date();
const dateTime = myDate.toLocaleTimeString();

function Notification({ setCount, count }) {
  console.log(count);

  const closeButton = ({ closeToast }) => {
    <button onClick={closeToast}></button>;
  };

  const ColoredLine = ({ color, marginTop, marginBottom }) => (
    <hr
      style={{
        color,
        height: 1,
        marginTop,
        marginBottom,
      }}
    />
  );

  function displayMsg() {
    toast(<Msg />);
    setCount(count + 1);
  }

  return (
    <Section>
      <div className="row">
        <div className="column">
          <div className="row">
            <div className="circle">
              <div className="right"></div>
            </div>

            <div className="gap left">
              <h2>EyeCare</h2>
              <h4>It’s time to look away from your screen! </h4>
              <p>{dateTime}</p>
            </div>
          </div>
        </div>
        <div className="btn">
          <button className="noti btn-down" onClick={displayMsg}>
            Accept
          </button>
          <ColoredLine
            color="#e6e6e6"
          />
          <button className="noti btn-up" onClick={closeButton}>
            Ignore
          </button>
        </div>
      </div>
    </Section>
  );
}

export default Notification;

const Section = styled.section`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: visible;
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
    color: #342f56;
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
    width: 30%;
  }

  .Toastify__toast-theme--light {
    padding: 0;
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

  .btn-up:hover {
    background-color: #fad263;
  }

  .btn-down:hover {
    background-color: #fad263;
  }

  /* --toastify-toast-width: 600px; */

  .vl {
    padding: 0px;
    margin: 0px;
  }

  .Toastify__toast-theme--light,
  .Toastify__toast,
  .Toastify__toast--default {
    height: auto;
    color: #342f56;
    padding: 0;
  }

  .Toastify__toast-theme--light {
    padding: 0;
  }

  // .Toastify-color-progress-light{
  // background-color: linear-gradient(#fad263 70%, #fffb97)
  // }

  .warm {
    font-weight: light;
    color: #342f56;
    font-size: 0.6rem;
  }
`;
