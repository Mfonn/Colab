import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";

const Msg = () => (
  <div>
    Rub your hands and gently place your warm hands over your eyes, with fingertips on the forehead.
  </div>
)



function Notification() {

    const displayMsg = () => {


    toast(<Msg />) 
  }

    const closeButton = ({ closeToast }) => {
      <button onClick={closeToast}></button>
    }

    const ColoredLine = ({ color }) => (
  <hr
    style={{
      color,
      height: 1
    }}
  />
);


   
 



  return (
    <Section>
      <div clasName="row">
        <div  className="column left">
        <h4>It is time to rest you eyes</h4>
        </div>
          
    
      <div className="column right">
        <div className='vl'>

      <button className="noti" onClick={displayMsg}>Accept</button>
      <ColoredLine color="#e6e6e6" />
     <button className="noti" onClick={closeButton}>Close</button>
     </div>
      </div>

     </div>
     
    </Section>

  )
}

export default Notification

const Section = styled.section`
//   .row:after {
//   content: "";
//   display: table;
//   clear: both;
// }

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

.Toastify__toast-theme--light, .Toastify__toast, .Toastify__toast--default {
  height: auto;
  color: #342f56;
  padding: 0.5rem;
}

  --toastify-color-progress-light: linear-gradient(
    to right,
     #ffbc5a, #f3d189, #ffe7c4
  );
`;